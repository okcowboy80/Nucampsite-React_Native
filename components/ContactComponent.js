import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, Text } from 'react-native-elements';


class Contact extends Component {

  static navigationOptions = {
    title: 'Contact Us'
  
  }

  render() {
    return(
      <ScrollView>
        <Card
          featuredTitle={"Contact Information"}
          wrapperStyle={{margin: 20}}
        >
          <Text style={{marginBottom: 10}}>
            1 Nucamp Way
            Seattle, WA 98001
            U.S.A.
          </Text>
          <Text>
            Phone: 1-206-555-1234
          </Text>
          <Text>
            Email: campsites@nucamp.co
          </Text>
        </Card>
      </ScrollView>
    );
  }
}

export default Contact;