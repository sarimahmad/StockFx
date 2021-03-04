import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {NavigationEvents} from 'react-navigation';

import * as Actions from '../../redux/actions';
import NotificationStyles from './NotificationStyles';

class Splash extends Component {

  render() {
    return (
      <NotificationStyles.WrapperViewVertical>
        <NavigationEvents
          onDidFocus={(payload) => {
            setTimeout(() => {
            }, 700);
          }}
        />
        <NotificationStyles.TextScreenTextScreen>
          notification
        </NotificationStyles.TextScreenTextScreen>
      </NotificationStyles.WrapperViewVertical>
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
