import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {NavigationEvents} from 'react-navigation';

import * as Actions from '../../redux/actions';
import NewsAndFeedStyles from './NewsAndFeedStyles';

class NewsAndFeed extends Component {
  render() {
    return (
      <NewsAndFeedStyles.WrapperViewVertical>
        <NavigationEvents
          onDidFocus={(payload) => {
            setTimeout(() => {}, 700);
          }}
        />
      </NewsAndFeedStyles.WrapperViewVertical>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsAndFeed);
