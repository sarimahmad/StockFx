import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {NavigationEvents} from 'react-navigation';

import * as Actions from '../../redux/actions';
import AboutUsStyles from './AboutUsStyles';

class AboutUs extends Component {

  render() {
    return (
      <AboutUsStyles.WrapperViewVertical>
        <NavigationEvents
          onDidFocus={(payload) => {
            setTimeout(() => {
            }, 700);
          }}
        />
        <AboutUsStyles.TextScreenTextScreen>
          notification
        </AboutUsStyles.TextScreenTextScreen>
      </AboutUsStyles.WrapperViewVertical>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
