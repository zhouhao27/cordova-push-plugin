package com.wow.parsedemo.app;

import android.app.Application;
import android.util.Log;

import com.parse.Parse;
import com.parse.ParseException;
import com.parse.ParsePush;
import com.parse.SaveCallback;


public class MyApplication extends Application {

    private static MyApplication sInstance;

    /**
     * @return ApplicationController singleton instance
     */
    public static synchronized MyApplication getInstance() {
        return sInstance;
    }

    @Override
    public void onCreate() {
        super.onCreate();

        //Parse.initialize(this, getResources().getString(R.string.applicationid), getResources().getString(R.string.clientkey));
        Parse.initialize(new Parse.Configuration.Builder(this)
            .applicationId("myAppId")
            .clientKey("clientKey")
            .server("http://192.168.35.166:1317/parse/")
            .build()
        );

        ParsePush.subscribeInBackground("", new SaveCallback() {
            @Override
            public void done(ParseException e) {
                if (e == null) {

                    Log.d("com.parse.push", "successfully subscribed to the broadcast channel.");
                } else {
                    Log.e("com.parse.push", "failed to subscribe for push", e);
                }
            }
        });

        // initialize the singleton
        sInstance = this;

    }


}
