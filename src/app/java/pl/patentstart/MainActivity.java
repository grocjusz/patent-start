package pl.patentstart;

import android.app.*;
import android.app.job.*;
import android.content.*;
import android.net.Uri;
import android.os.*;
import android.view.*;
import android.webkit.*;
import android.widget.FrameLayout;
import org.json.*;
import java.io.*;

public class MainActivity extends Activity {
 private WebView web;
 private final int IMPORT_PACK=10,IMPORT_BACKUP=11,EXPORT_BACKUP=12;
 @Override public void onCreate(Bundle saved){
  super.onCreate(saved);
  FrameLayout frame=new FrameLayout(this);frame.setBackgroundColor(0xfff5f5ee);
  frame.setOnApplyWindowInsetsListener((v,insets)->{v.setPadding(insets.getSystemWindowInsetLeft(),insets.getSystemWindowInsetTop(),insets.getSystemWindowInsetRight(),insets.getSystemWindowInsetBottom());return insets.consumeSystemWindowInsets();});
  web=new WebView(this);frame.addView(web,new FrameLayout.LayoutParams(-1,-1));setContentView(frame);
  WebSettings settings=web.getSettings();settings.setJavaScriptEnabled(true);settings.setDomStorageEnabled(true);settings.setAllowFileAccess(false);settings.setAllowContentAccess(false);settings.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);settings.setSupportMultipleWindows(false);settings.setMediaPlaybackRequiresUserGesture(true);
  CookieManager.getInstance().setAcceptCookie(false);
  web.setBackgroundColor(0xfff5f5ee);web.addJavascriptInterface(new Bridge(),"Native");
  web.setWebViewClient(new WebViewClient(){
   @Override public WebResourceResponse shouldInterceptRequest(WebView view,WebResourceRequest req){
    Uri u=req.getUrl();String p=u.getPath();
    if("https".equals(u.getScheme())&&"appassets.androidplatform.net".equals(u.getHost())&&p!=null&&p.startsWith("/assets/")&&!p.contains("..")){
     try{String name=p.substring(8);String mime=name.endsWith(".html")?"text/html":name.endsWith(".css")?"text/css":name.endsWith(".js")?"application/javascript":name.endsWith(".json")?"application/json":"application/octet-stream";return new WebResourceResponse(mime,"UTF-8",getAssets().open(name));}catch(Exception e){return new WebResourceResponse("text/plain","UTF-8",404,"Not found",null,new ByteArrayInputStream(new byte[0]));}
    }return new WebResourceResponse("text/plain","UTF-8",403,"Blocked",null,new ByteArrayInputStream(new byte[0]));
   }
   @Override public boolean shouldOverrideUrlLoading(WebView view,WebResourceRequest req){
    Uri u=req.getUrl();if("appassets.androidplatform.net".equals(u.getHost()))return false;
    if("https".equals(u.getScheme())||"http".equals(u.getScheme())){try{startActivity(new Intent(Intent.ACTION_VIEW,u));}catch(Exception e){message("Brak aplikacji do otwierania linków.");}}return true;
   }
  });
  web.loadUrl("https://appassets.androidplatform.net/assets/index.html");
  JobScheduler scheduler=(JobScheduler)getSystemService(JOB_SCHEDULER_SERVICE);
  scheduler.schedule(new JobInfo.Builder(1,new ComponentName(this,UpdateJob.class)).setRequiredNetworkType(JobInfo.NETWORK_TYPE_ANY).setPeriodic(24*60*60*1000L).setPersisted(true).build());
 }
 private void call(String fn,String value){runOnUiThread(()->{if(web!=null)web.evaluateJavascript("window."+fn+"&&window."+fn+"("+JSONObject.quote(value)+")",null);});}
 private void message(String value){call("onNativeMessage",value);}
 private void pick(int code){runOnUiThread(()->{Intent i=new Intent(Intent.ACTION_OPEN_DOCUMENT);i.addCategory(Intent.CATEGORY_OPENABLE);i.setType("*/*");startActivityForResult(i,code);});}
 private class Bridge {
  @JavascriptInterface public String getBank(){try{return UpdateManager.bank(MainActivity.this).toString();}catch(Exception e){return "{}";}}
  @JavascriptInterface public String getStatus(){return UpdateManager.status(MainActivity.this).toString();}
  @JavascriptInterface public void checkUpdates(){new Thread(()->UpdateManager.check(MainActivity.this,(event,value)->call(event,value)),"patent-updates").start();}
  @JavascriptInterface public void setFeed(String url){UpdateManager.setFeed(MainActivity.this,url);}
  @JavascriptInterface public void openUrl(String url){Uri u=Uri.parse(url);if("https".equals(u.getScheme()))runOnUiThread(()->{try{startActivity(new Intent(Intent.ACTION_VIEW,u));}catch(Exception e){message("Brak przeglądarki do otwarcia źródła.");}});}
  @JavascriptInterface public void importPack(){pick(IMPORT_PACK);}
  @JavascriptInterface public void importBackup(){pick(IMPORT_BACKUP);}
  @JavascriptInterface public void closeApp(){runOnUiThread(()->finish());}
  @JavascriptInterface public void exportBackup(String json){if(json.length()>2*1024*1024)return;getSharedPreferences("app",0).edit().putString("pendingBackup",json).apply();runOnUiThread(()->{Intent i=new Intent(Intent.ACTION_CREATE_DOCUMENT);i.addCategory(Intent.CATEGORY_OPENABLE);i.setType("application/json");i.putExtra(Intent.EXTRA_TITLE,"Patent-Start-postepy.json");startActivityForResult(i,EXPORT_BACKUP);});}
 }
 @Override protected void onActivityResult(int request,int result,Intent data){super.onActivityResult(request,result,data);if(result!=RESULT_OK||data==null||data.getData()==null){getSharedPreferences("app",0).edit().remove("pendingBackup").apply();return;}final Uri uri=data.getData();new Thread(()->{try{
   if(request==EXPORT_BACKUP){String content=getSharedPreferences("app",0).getString("pendingBackup",null);if(content==null)throw new IOException();try(OutputStream out=getContentResolver().openOutputStream(uri,"wt")){if(out==null)throw new IOException();out.write(content.getBytes("UTF-8"));}getSharedPreferences("app",0).edit().remove("pendingBackup").apply();message("Zapisano kopię postępów.");}
   else {String text;try(InputStream in=getContentResolver().openInputStream(uri)){text=new String(UpdateManager.read(in,2*1024*1024),"UTF-8");}if(request==IMPORT_PACK){UpdateManager.install(MainActivity.this,text);call("onBankUpdated","");}else if(request==IMPORT_BACKUP)call("onBackupLoaded",text);}
  }catch(Exception e){message(request==IMPORT_PACK?"Nie przyjęto pakietu: "+e.getMessage():"Nie udało się odczytać lub zapisać pliku.");}},"patent-file").start();}
 @Override public void onBackPressed(){web.evaluateJavascript("window.onAndroidBack&&window.onAndroidBack()",null);}
 @Override protected void onDestroy(){if(web!=null){web.removeJavascriptInterface("Native");web.destroy();web=null;}super.onDestroy();}
}
