import {App, Platform} from 'ionic-angular';
import {HomePage} from './pages/home/home';

declare var ParsePushPlugin: any;
declare var window: any;

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {

      // ParsePushPlugin.initialize("bSpra5JHQTzsOTjxqSu0NlZfs5Xd8FbTrWE9odai","psDo0ivva83i51mWvvXqCdSkwT6sx6PilsVOrxum",() => {

        // ParsePushPlugin.getInstallationId(function(id) {
        //     alert(id);
        // }, function(e) {
        //     alert('error');
        // });

        // ParsePushPlugin.getSubscriptions(function(subscriptions) {
        //     alert(subscriptions);
        // }, function(e) {
        //     alert('error');
        // });

        ParsePushPlugin.subscribe('', function(msg) {
            alert('subscribed:'+msg);
        }, function(e) {
            alert('error');
        });

        // ParsePushPlugin.unsubscribe('SampleChannel', function(msg) {
        //     alert(msg);
        // }, function(e) {
        //     alert('error');
        // });
      // },(error) => {
      //   alert(error);
      // });

      if(window.ParsePushPlugin){
        alert('ParsePushPlugin available');
        ParsePushPlugin.on('receivePN', function(pn){
          alert('yo i got this push notification:' + JSON.stringify(pn));
        });
      }

    });
  }
}
