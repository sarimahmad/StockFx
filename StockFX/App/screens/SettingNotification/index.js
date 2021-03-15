import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {Switch} from 'react-native';
import {connect} from 'react-redux';

import * as Actions from '../../redux/actions';
import SettingNotificationStyles from './SettingNotificationStyles';
import HeaderWithOptionBtn from '../../component/HeaderWithOptionBtn';
import {BLUE} from '../../helper/Color';

class SettingNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioUpdate: false,
      coinUpdate: false,
      weekUpdate: false,
      newRelease: false,
      promUpdate: false,
      other: false,
    };
  }

  render() {
    return (
      <SettingNotificationStyles.WrapperViewVertical>
        <HeaderWithOptionBtn
          headerText={'Notification Settings'}
          rightIcon={require('../../assets/simple_cross.png')}
          rightPress={() => this.props.navigation.pop()}
          backColor={BLUE.background}
        />
        <SettingNotificationStyles.SafeView>
          <SettingNotificationStyles.Scroll>
            <SettingNotificationStyles.RowView>
              <SettingNotificationStyles.OpenSans14RegularOff>
                End of day portfolio update
              </SettingNotificationStyles.OpenSans14RegularOff>
              <SettingNotificationStyles.RightView>
                <Switch
                  value={this.state.portfolioUpdate}
                  trackColor={{false: BLUE.dark, true: BLUE.app}}
                  thumbColor={BLUE.light}
                  ios_backgroundColor={BLUE.dark}
                  onValueChange={(portfolioUpdate) =>
                    this.setState({portfolioUpdate})
                  }
                />
              </SettingNotificationStyles.RightView>
            </SettingNotificationStyles.RowView>
            <SettingNotificationStyles.RowView>
              <SettingNotificationStyles.OpenSans14RegularOff>
                Significant change coin update
              </SettingNotificationStyles.OpenSans14RegularOff>
              <SettingNotificationStyles.RightView>
                <Switch
                  value={this.state.coinUpdate}
                  trackColor={{false: BLUE.dark, true: BLUE.app}}
                  thumbColor={BLUE.light}
                  ios_backgroundColor={BLUE.dark}
                  onValueChange={(coinUpdate) => this.setState({coinUpdate})}
                />
              </SettingNotificationStyles.RightView>
            </SettingNotificationStyles.RowView>
            <SettingNotificationStyles.RowView>
              <SettingNotificationStyles.OpenSans14RegularOff>
                End of week update
              </SettingNotificationStyles.OpenSans14RegularOff>
              <SettingNotificationStyles.RightView>
                <Switch
                  value={this.state.weekUpdate}
                  trackColor={{false: BLUE.dark, true: BLUE.app}}
                  thumbColor={BLUE.light}
                  ios_backgroundColor={BLUE.dark}
                  onValueChange={(weekUpdate) => this.setState({weekUpdate})}
                />
              </SettingNotificationStyles.RightView>
            </SettingNotificationStyles.RowView>
            <SettingNotificationStyles.RowView>
              <SettingNotificationStyles.OpenSans14RegularOff>
                New release available
              </SettingNotificationStyles.OpenSans14RegularOff>
              <SettingNotificationStyles.RightView>
                <Switch
                  value={this.state.newRelease}
                  trackColor={{false: BLUE.dark, true: BLUE.app}}
                  thumbColor={BLUE.light}
                  ios_backgroundColor={BLUE.dark}
                  onValueChange={(newRelease) => this.setState({newRelease})}
                />
              </SettingNotificationStyles.RightView>
            </SettingNotificationStyles.RowView>
            <SettingNotificationStyles.RowView>
              <SettingNotificationStyles.OpenSans14RegularOff>
                Promotional update
              </SettingNotificationStyles.OpenSans14RegularOff>
              <SettingNotificationStyles.RightView>
                <Switch
                  value={this.state.promUpdate}
                  trackColor={{false: BLUE.dark, true: BLUE.app}}
                  thumbColor={BLUE.light}
                  ios_backgroundColor={BLUE.dark}
                  onValueChange={(promUpdate) => this.setState({promUpdate})}
                />
              </SettingNotificationStyles.RightView>
            </SettingNotificationStyles.RowView>
            <SettingNotificationStyles.RowView>
              <SettingNotificationStyles.OpenSans14RegularOff>
                Other
              </SettingNotificationStyles.OpenSans14RegularOff>
              <SettingNotificationStyles.RightView>
                <Switch
                  value={this.state.other}
                  trackColor={{false: BLUE.dark, true: BLUE.app}}
                  thumbColor={BLUE.light}
                  ios_backgroundColor={BLUE.dark}
                  onValueChange={(other) => this.setState({other})}
                />
              </SettingNotificationStyles.RightView>
            </SettingNotificationStyles.RowView>
            <SettingNotificationStyles.RowView>
              <SettingNotificationStyles.OpenSans14RegularOff>
                Weekly Markets Summary
              </SettingNotificationStyles.OpenSans14RegularOff>
              <SettingNotificationStyles.RightView>
                <SettingNotificationStyles.RightIcon
                  source={require('../../assets/rightArrow.png')}
                />
              </SettingNotificationStyles.RightView>
            </SettingNotificationStyles.RowView>
            <SettingNotificationStyles.Divider />
            <SettingNotificationStyles.SimpleView>
              <SettingNotificationStyles.OpenSans10Regular>
                Personal price alerts are not impacted by the settings above.
              </SettingNotificationStyles.OpenSans10Regular>
              <SettingNotificationStyles.RowView>
                <SettingNotificationStyles.OpenSans14RegularOff>
                  StockFX Direct
                </SettingNotificationStyles.OpenSans14RegularOff>
                <SettingNotificationStyles.RightView>
                  <SettingNotificationStyles.RightIcon
                    source={require('../../assets/rightArrow.png')}
                  />
                </SettingNotificationStyles.RightView>
              </SettingNotificationStyles.RowView>
              <SettingNotificationStyles.RowView>
                <SettingNotificationStyles.OpenSans14RegularOff>
                  Troubleshooting Notifications
                </SettingNotificationStyles.OpenSans14RegularOff>
                <SettingNotificationStyles.RightView>
                  <SettingNotificationStyles.RightIcon
                    source={require('../../assets/rightArrow.png')}
                  />
                </SettingNotificationStyles.RightView>
              </SettingNotificationStyles.RowView>
            </SettingNotificationStyles.SimpleView>
          </SettingNotificationStyles.Scroll>
        </SettingNotificationStyles.SafeView>
      </SettingNotificationStyles.WrapperViewVertical>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingNotification);
