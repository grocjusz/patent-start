package pl.patentstart;
import android.app.job.*;
public class UpdateJob extends JobService {
 @Override public boolean onStartJob(JobParameters params){new Thread(()->{UpdateManager.check(this,null);jobFinished(params,false);},"patent-background").start();return true;}
 @Override public boolean onStopJob(JobParameters params){return true;}
}
