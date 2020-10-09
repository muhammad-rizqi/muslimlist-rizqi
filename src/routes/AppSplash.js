import React, {Component} from 'react';
import Splash from '../screens/start/Splash';
import AppStack from './AppStack';

export default class AppSplash extends Component {
  constructor() {
    super();
    this.state = {
      splash: true,
    };
  }

  splash() {
    if (this.state.splash) {
      return <Splash />;
    } else {
      return <AppStack />;
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({splash: false});
    }, 3000);
  }

  render() {
    return <>{this.splash()}</>;
  }
}
