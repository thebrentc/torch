/* 
 * @ref https://opensourceforu.com/2016/08/build-first-mobile-application-using-apache-cordova/
 * @ref https://www.npmjs.com/package/cordova-plugin-flashlight
 */
var app = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
        document.getElementById("torch").addEventListener("click", function () {
            window.plugins.flashlight.toggle();
        });
        
        //make sure the torch is switched off when the app is exited via the backbutton
        document.addEventListener("backbutton", function() {
            // pass exitApp as callbacks to the switchOff method
            window.plugins.flashlight.switchOff(navigator.app.exitApp, navigator.app.exitApp);
        }, false);
        
    },
    receivedEvent: function(id) {
        console.log("Received event:" + id);
    }, 
    
};
app.initialize();
