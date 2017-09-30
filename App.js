import React from 'react';
import { Root, Container, Text, View, Button } from 'native-base';
import * as Expo from 'expo';

import firebase from './firebase'
import styles from "./styles";

const db = firebase.database();
const ref = db.ref('rndb');

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      readyFlag: false,
      point: 0,
    };
    ref.on('child_changed', snapshot => {
      this.setState({
        point: snapshot.val(),
      })
    })
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });
    this.setState({ readyFlag: true });
  }

  add() {
    ref.update({
      point: this.state.point + 1
    })
  }

  render() {
    if (!this.state.readyFlag) {
      return <Expo.AppLoading />;
    }
    return (
      <Root>
        <Container style={styles.container}>
          <View>
            <Text>{this.state.point}</Text>
            <Text>{this.state.point}</Text>
            <Text>{this.state.point}</Text>
            <Text>{this.state.point}</Text>
            <Text>{this.state.point}</Text>
            <Text>{this.state.point}</Text>
            <Text>{this.state.point}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              rounded
              onPress={this.add.bind(this)}
              style={{ backgroundColor: "red" }}
            >
              <Text>追加</Text>
            </Button>
          </View>
        </Container>
      </Root>
    );
  }
}
