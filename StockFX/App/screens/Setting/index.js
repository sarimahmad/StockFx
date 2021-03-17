import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {Switch} from 'react-native';
import {connect} from 'react-redux';

import * as Actions from '../../redux/actions';
import SettingStyles from './SettingStyles';
import HeaderWithSearch from '../../component/HeaderWithSearch';
import {BLACK, BLUE, YELLOW} from '../../helper/Color';

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinUpdate: false
    }
  }
  
  render() {
    return (
      <SettingStyles.WrapperViewVertical>
        <HeaderWithSearch
          leftPress={() => this.props.navigation.openDrawer()}
          headerText={'Setting'}
        />
        <SettingStyles.SafeArea>
          <SettingStyles.SimpleView>
            <SettingStyles.OpenSans12Bold>General</SettingStyles.OpenSans12Bold>
            <SettingStyles.ItemWrapper>
              <SettingStyles.ItemInnerLeft>
                <SettingStyles.OpenSans10Regular>
                  Language
                </SettingStyles.OpenSans10Regular>
                <SettingStyles.OpenSans14Regular>
                  English
                </SettingStyles.OpenSans14Regular>
              </SettingStyles.ItemInnerLeft>
              <SettingStyles.ItemRightView>
                <SettingStyles.RightIcon
                  source={require('../../assets/rightArrow.png')}
                />
              </SettingStyles.ItemRightView>
            </SettingStyles.ItemWrapper>

            <SettingStyles.ItemWrapper>
              <SettingStyles.ItemInnerLeft>
                <SettingStyles.OpenSans10Regular>
                  Local Fiat Currency
                </SettingStyles.OpenSans10Regular>
                <SettingStyles.OpenSans14Regular>
                  US Dollar (USD)
                </SettingStyles.OpenSans14Regular>
              </SettingStyles.ItemInnerLeft>
              <SettingStyles.ItemRightView>
                <SettingStyles.RightIcon
                  source={require('../../assets/rightArrow.png')}
                />
              </SettingStyles.ItemRightView>
            </SettingStyles.ItemWrapper>

            <SettingStyles.ItemWrapper>
              <SettingStyles.ItemInnerLeft>
                <SettingStyles.OpenSans14Regular>
                  Notification Options
                </SettingStyles.OpenSans14Regular>
              </SettingStyles.ItemInnerLeft>
              <SettingStyles.ItemRightView>
                <SettingStyles.RightIcon
                  source={require('../../assets/rightArrow.png')}
                />
              </SettingStyles.ItemRightView>
            </SettingStyles.ItemWrapper>

            <SettingStyles.ItemWrapper>
              <SettingStyles.ItemInnerLeft>
                <SettingStyles.OpenSans14Regular>
                  View Options
                </SettingStyles.OpenSans14Regular>
              </SettingStyles.ItemInnerLeft>
              <SettingStyles.ItemRightView>
                <SettingStyles.RightIcon
                  source={require('../../assets/rightArrow.png')}
                />
              </SettingStyles.ItemRightView>
            </SettingStyles.ItemWrapper>

            <SettingStyles.ItemWrapper>
              <SettingStyles.ItemInnerLeft>
                <SettingStyles.OpenSans14Regular>
                  Other Options
                </SettingStyles.OpenSans14Regular>
              </SettingStyles.ItemInnerLeft>
              <SettingStyles.ItemRightView>
                <SettingStyles.RightIcon
                  source={require('../../assets/rightArrow.png')}
                />
              </SettingStyles.ItemRightView>
            </SettingStyles.ItemWrapper>
            
            <SettingStyles.OpenSans12Bold style={{marginTop: 30}}>Security</SettingStyles.OpenSans12Bold>
            <SettingStyles.ItemWrapper>
              <SettingStyles.ItemInnerLeft>
                <SettingStyles.OpenSans14Regular>
                  Passcode Lock
                </SettingStyles.OpenSans14Regular>
              </SettingStyles.ItemInnerLeft>
              <SettingStyles.ItemRightView>
                <Switch
                  value={this.state.coinUpdate}
                  trackColor={{
                    false: BLACK.textColorDark,
                    true: YELLOW.app,
                  }}
                  thumbColor={
                    this.state.coinUpdate ? BLUE.drawerLine : BLUE.light
                  }
                  ios_backgroundColor={BLACK.textColorDark}
                  onValueChange={(coinUpdate) => this.setState({coinUpdate})}
                />
              </SettingStyles.ItemRightView>
            </SettingStyles.ItemWrapper>
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
