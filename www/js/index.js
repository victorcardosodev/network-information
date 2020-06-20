alert ("app.checkConnection: function () {...");
console.log ("app.checkConnection: function () {...");

var networkState = navigator.connection.type;

var states = {};
states[connection.UNKNOWN] = 'Unknown connection';
states[connection.ETHERNET] = 'Ethernet connection';
states[connection.CELL_2G] = 'Cell 2G connection';
states[connection.CELL_3G] = 'Cell 3G connection';
states[connection.CELL_4G] = 'Cell 4G connection';
states[connection.CELL] = 'Cell generic connection';
states[connection.NONE] = 'No network connection';

alert ('Connection type: ' + states[networkState]);
console.log ('Connection type: ' + states[networkState]);

// Application Constructor
initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
},

// deviceready Event Handler
//
// Bind any cordova events here. Common events are:
// 'pause', 'resume', etc.
onDeviceReady: function() {
    this.receivedEvent('deviceready');
    app.checkConnection();
},

// Update DOM on a Received Event
receivedEvent: function(id) {
    
}
};

app.initialize();