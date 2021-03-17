import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {NavigationEvents} from 'react-navigation';

import * as Actions from '../../redux/actions';
import SettingStyles from './SettingStyles';
import HeaderWithOptionBtn from '../../component/HeaderWithOptionBtn';
import HeaderWithSearch from '../../component/HeaderWithSearch';

class Setting extends Component {
  render() {
    return (
      <SettingStyles.WrapperViewVertical>
        <HeaderWithSearch
          leftPress={() => this.props.navigation.openDrawer()}
          headerText={'Setting'}
        />
        <SettingStyles.SafeArea>
          <SettingStyles.SimpleView>
            <SettingStyles.OpenSans12Bold>
              General
            </SettingStyles.OpenSans12Bold>
          </SettingStyles.SimpleView>
        </SettingStyles.SafeArea>
      </SettingStyles.WrapperViewVertical>
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

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
