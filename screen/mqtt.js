import init from 'react_native_mqtt';
import {AsyncStorage} from '@react-native-async-storage/async-storage';

init({
    size: 10000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
    sync: {},
});

export default function connection(){
    const feeds = ['thienkun/feeds/onoff', 'thienkun/feeds/test', 'thienkun/feeds/humid', 'tentoila24/feeds/temp'];
    const topic = feeds[1];

    const password = //'aio_EVNi18eQsuWTkmrRxnPTKC8ZV5KJ';
    'aio_RkrG82uhCi3HTC6Y4PNzNsKv1W5r';
    //const uri = 'mqtts://#thienkun:#aio_VwGf00hR9EfUZuJVX8yvnIwuGEf2@io.adafruit.com';
    const mqttHost = 'io.adafruit.com';

    var client;
    
    function mqtt() {
        var clientID = "myclientid_" + new Date().getTime() + new Date();
        client = new Paho.MQTT.Client(mqttHost, 443, clientID);
        // set callback handlers
        client.onConnectionLost = onConnectionLost;
        client.onMessageArrived = onMessageArrived;
        // connect the client
        client.connect({ useSSL: true, userName: 'thienkun', password: password });
    }

    function subscribe(topics) {
        if (client.isConnected())
        {
            for (let topic in topics)
                client.subscribe(topic);
        }
        else
        {
            console.log('No connection');
        }
    }
    // called when the client connects
    function onConnect(mess) {
    // Once a connection has been made, make a subscription and send a message.
        console.log("onConnect");
        if (!client.isConnected())
        {
            console.log('No connection'); 
        }
        else
        {
            //client.subscribe(topic);  
            var message = new Paho.MQTT.Message(mess.toString());
            client.subscribe(topic);
            message.destinationName = topic;
            message.retained = true;
            //client.publish(message);
            client.send(message);
        }   

    }

    // called when the client loses its connection
    function onConnectionLost(responseObject) {
        if (responseObject.errorCode !== 0) {
            console.log("onConnectionLost:" + responseObject.errorMessage);
            
        }
    }

    // called when a message arrives
    function onMessageArrived(message) {
        console.log("onMessageArrived:" + message.payloadString);
        changeMess(message.payloadString);
    }

}