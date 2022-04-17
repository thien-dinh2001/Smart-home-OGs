import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native'; 

function NotificationsScreen() {
    return (
      <View style={{ flex: 1}}>
        <View style={{backgroundColor:'black', flex: 1}}>
        </View>
        <View style={{backgroundColor: 'gray', flex: 4}}>
          <FlatList 
            data = {data}
            keyExtractor = {(item, index) => {return index.toString()}}
            renderItem = {({ item }) => {
              <View style= {styles.container}> 
                <Text>{data}</Text>
              </View>
            }}
          />
        </View>
      </View>
    );
  }

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 15,
    backgroundColor: 'white',
  }
})