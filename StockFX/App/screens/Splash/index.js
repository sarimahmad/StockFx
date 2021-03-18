import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {NavigationEvents} from 'react-navigation';

import * as Actions from '../../redux/actions';
import SplashStyles from './SplashStyles';

class Splash extends Component {
  async getAsyncData() {
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <SplashStyles.WrapperViewVertical>
        <NavigationEvents
          onDidFocus={(payload) => {
            setTimeout(() => {
              this.getAsyncData();
            }, 700);
          }}
        />
        <SplashStyles.SplashIcon source={require('../../assets/logo.png')} />
      </SplashStyles.WrapperViewVertical>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    userDetail: state.user.userDetail,
    userToken: state.user.userToken,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
