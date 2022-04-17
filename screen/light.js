import React, { useState, useEffect } from "react"; 
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image, Switch, Dimensions } from 'react-native';
import init from 'react_native_mqtt';
import {AsyncStorage} from '@react-native-async-storage/async-storage';


init({
  size: 10000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {},
});




export default function LightScreen () { 
  const OnOffSwitch = () =>
  {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
      setIsEnabled(previousState => !previousState);
      changeMess(isEnabled.toString());
      onConnect();
      //sendMessage({isEnabled}, 'thienkun/feeds/onoff');
    }
    return (
      <View style={styles.container}>
        <Switch
          trackColor={{ false: "#767577", true: "green" }}
          thumbColor={isEnabled ? "f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}  
          value={isEnabled}
        />
      </View>
    );
  };  
  //MQTT
  const topic = 'thienkun/feeds/test';
  //'tentoila24/feeds/temp';
  const password = //'aio_EVNi18eQsuWTkmrRxnPTKC8ZV5KJ';
  'aio_RkrG82uhCi3HTC6Y4PNzNsKv1W5r';
  //const uri = 'mqtts://#thienkun:#aio_VwGf00hR9EfUZuJVX8yvnIwuGEf2@io.adafruit.com';
  const mqttHost = 'io.adafruit.com';
  
  var client;
  
  function mqtt() {
    var clientID = "myclientid_" + new Date().getTime();
    client = new Paho.MQTT.Client(mqttHost, 443, clientID);
    // set callback handlers
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    // connect the client

    client.connect({ //onSuccess:onConnect, 
      useSSL: true, userName: 'thienkun', password: password });
  }
  
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("onConnect");
    if (!client.isConnected())
    {
      console.log('No connection');
    }
    else
    {
      client.subscribe(topic);
      var message = new Paho.MQTT.Message(Mess.toString());
      console.log(message.topic);
      message.destinationName = topic;
      client.send(message);
    }
    
  }

  /*function sendMessage(mess, topic) {
    client = new Paho.MQTT.Client(mqttHost, 443, "myclientid_" + parseInt(Math.random() * 99999, 100));
    client.connect({ useSSL: true, userName: 'tentoila24', password: password });
    if (client.isConnected())
    {
      client.subscribe(topic);
      var message = new Paho.MQTT.Message(mess.toString());
      message.destinationName = topic;
      client.send(mess);
    }
    else 
    {
      console.log('GG');
    }
  }*/
  
  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:" + responseObject.errorMessage);
      
    }
  }
  
  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:" + message.payloadString);
    changeMess(message.payloadString)
  }
  const [Mess, changeMess] = useState(30.0);
  mqtt();
  return (
    <View style={{padding: 10, margin: 10, flex: 1}}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 20 }}>
        <Image style={{width: 25, height: 25}} source={require('../assets/left-arrow.png')}/>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 30 }}>
        <AppButton title='Light'/>
        <AppButton title='Alarm'/>
      </View>
      <View style={{ padding: 30, flexDirection:'row',  justifyContent: 'space-evenly'}}>
        <LightDensity title={Mess} />
      </View>
      <View style={{ padding: 30, flexDirection:'row', justifyContent: 'space-evenly'}}>
        <OnOffSwitch/>
      </View>
      <View>
        
      </View>
    </View>
    
  
  ); 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  circleContainer: {
    width: 120,
    height: 120,
    borderRadius: 120/2,
    borderColor: 'black',
    borderWidth: 3,
    //paddingVertical: 10,
    //paddingHorizontal: 12,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  text: {
    alignContent: 'space-between',
    alignSelf: 'baseline',
    fontSize: 14,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: 'center'
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  imgButtonContainer: {
    backgroundColor: "#009688",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: 'center'
  },
  imgButtonIconStyle: {
    resizeMode: 'stretch',
    padding: 10,
    margin: 5
  }
})

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const LightDensity = ({ onPress, title}) => (
  <TouchableOpacity style={styles.circleContainer}>
    <Text style={{ fontSize: 40, alignSelf: 'center'}}>{title}</Text>
  </TouchableOpacity>
);

const screenWidth = Dimensions.get('window').width;

const OnOffSwitch = () =>
{
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    sendMessage({isEnabled});
  }
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "green" }}
        thumbColor={isEnabled ? "f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};  