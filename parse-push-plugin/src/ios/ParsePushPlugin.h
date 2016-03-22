#import <Cordova/CDV.h>
#import "AppDelegate.h"

@interface ParsePushPlugin: CDVPlugin

@property (nonatomic, copy) NSString* callbackId;
@property (nonatomic, retain) NSMutableArray* pnQueue;

//
// methods exposed to JS
// by ZH, doesn't work for Android
// - (void)initialize: (CDVInvokedUrlCommand*)command;             // for parse.com 
// - (void)initializeParseServer: (CDVInvokedUrlCommand*)command;  // for parse server
 
- (void)registerCallback: (CDVInvokedUrlCommand*)command;

- (void)getInstallationId: (CDVInvokedUrlCommand*)command;
- (void)getInstallationObjectId: (CDVInvokedUrlCommand*)command;

- (void)getSubscriptions: (CDVInvokedUrlCommand *)command;
- (void)subscribe: (CDVInvokedUrlCommand *)command;
- (void)unsubscribe: (CDVInvokedUrlCommand *)command;

//
// methods internal to plugin
- (void)pluginInitialize;
- (void)jsCallback: (NSDictionary*)userInfo withAction: (NSString*)pnAction;
+ (void)saveDeviceTokenToInstallation: (NSData*)deviceToken;
@end

