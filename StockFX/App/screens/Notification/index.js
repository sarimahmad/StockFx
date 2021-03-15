/* eslint-disable no-alert */
import React, {Component} from 'react';
import {SectionList} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../redux/actions';
import NotificationStyles from './NotificationStyles';
import NotificationHeader from '../../component/NotificationHeader';
import NotificationItem from '../../component/NotificationItem';

const DATA = [
  {
    title: 'Last 24 hours',
    data: [
      {
        name: 'Significant Price Change',
        dateTime: '1 Mar, 11:00',
        detail: 'Apple is up +2.91% to $46,647.27\n' + 'on Global average...',
        read: false,
      },
      {
        name: 'Significant Price Change',
        dateTime: '2 Mar, 11:00',
        detail: 'Apple is up +2.91% to $46,647.27\n' + 'on Global average...',
        read: true,
      },
      {
        name: 'Significant Price Change',
        dateTime: '4 Mar, 11:00',
        detail: 'Apple is up +2.91% to $46,647.27\n' + 'on Global average...',
        read: true,
      },
    ],
  },
  {
    title: '3 days ago',
    data: [
      {
        name: 'Significant Price Change',
        dateTime: '7 Mar, 11:00',
        detail: 'Apple is up +2.91% to $46,647.27\n' + 'on Global average...',
        read: true,
      },
      {
        name: 'Significant Price Change',
        dateTime: '5 Mar, 11:00',
        detail: 'Apple is up +2.91% to $46,647.27\n' + 'on Global average...',
        read: true,
      },
      {
        name: 'Significant Price Change',
        dateTime: '6 Mar, 11:00',
        detail: 'Apple is up +2.91% to $46,647.27\n' + 'on Global average...',
        read: true,
      },
    ],
  },
];

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  render() {
    return (
      <NotificationStyles.WrapperViewVertical>
        <NotificationHeader
          leftPress={() => this.props.navigation.openDrawer()}
          headerText={'Notifications'}
          searchValue={this.state.searchValue}
          searchChange={(searchValue) => this.setState({searchValue})}
          settingPress={() =>
            this.props.navigation.navigate('SettingNotification')
          }
        />
        <NotificationStyles.SafeView>
          <NotificationStyles.SimpleView>
            <SectionList
              sections={DATA}
              stickySectionHeadersEnabled={false}
              keyExtractor={(item, index) => item + index}
              renderItem={({item}) => (
                <NotificationItem
                  item={item}
                  itemPress={() => alert('Pressed')}
                />
              )}
              renderSectionHeader={({section: {title}}) => (
                <NotificationStyles.OpenSans12Regular>
                  {title}
                </NotificationStyles.OpenSans12Regular>
              )}
            />
          </NotificationStyles.SimpleView>
        </NotificationStyles.SafeView>
      </NotificationStyles.WrapperViewVertical>
    );
  }
}

function mapStateToProps(state) {
  return {
    userDetail: state.user.userDetail,
    userToken: state.user.userToken,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
