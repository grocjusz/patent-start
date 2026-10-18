package pl.patentstart;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/** Treść hasła słownika, bez zmiennych elementów otaczającej witryny. */
public final class SourceFingerprint {
 private SourceFingerprint(){}
 public static byte[] htmlMain(byte[] bytes)throws IOException{
  String html=new String(bytes,StandardCharsets.UTF_8);
  Matcher main=Pattern.compile("<main\\b[^>]*\\bid=[\"']main[\"'][^>]*>([\\s\\S]*?)</main\\s*>",Pattern.CASE_INSENSITIVE).matcher(html);
  if(!main.find())throw new IOException("Brak treści hasła SAAMI");
  String content=main.group(1);
  if(main.find()||!Pattern.compile("<h1\\b",Pattern.CASE_INSENSITIVE).matcher(content).find()||!Pattern.compile("<div\\b[^>]*\\bclass=[\"'][^\"']*\\bentry-content\\b[^\"']*[\"']",Pattern.CASE_INSENSITIVE).matcher(content).find())throw new IOException("Niejednoznaczna treść hasła SAAMI");
  return content.replace("\r\n","\n").getBytes(StandardCharsets.UTF_8);
 }
}
