import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {NavigationEvents} from 'react-navigation';

import * as Actions from '../../redux/actions';
import ContactUsStyles from './ContactUsStyles';

class ContactUs extends Component {

  render() {
    return (
      <ContactUsStyles.WrapperViewVertical>
        <NavigationEvents
          onDidFocus={(payload) => {
            setTimeout(() => {
            }, 700);
          }}
        />
        <ContactUsStyles.TextScreenTextScreen>
          notification
        </ContactUsStyles.TextScreenTextScreen>
      </ContactUsStyles.WrapperViewVertical>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
