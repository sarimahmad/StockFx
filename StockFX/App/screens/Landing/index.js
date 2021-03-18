import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../redux/actions';
import LandingStyles from './LandingStyles';
import {BLUE, YELLOW} from '../../helper/Color';

class Landing extends Component {
  render() {
    return (
      <LandingStyles.WrapperViewVertical>
        <LandingStyles.BackgroundAbsoluteView
          source={require('../../assets/background/landing_back.png')}
        />
        <LandingStyles.SafeView>
          <LandingStyles.TopView>
            <LandingStyles.TopAppImage
              source={require('../../assets/logo.png')}
            />
            <LandingStyles.OpenSans14Regular>
              Best way to stay on to{'\n'}
              of financial markets
            </LandingStyles.OpenSans14Regular>
            <LandingStyles.TopInnerBottomWrapper>
              <LandingStyles.OpenSans18Bold>
                Want a quick introduction about{'\n'}
                how to get started
              </LandingStyles.OpenSans18Bold>
            </LandingStyles.TopInnerBottomWrapper>
          </LandingStyles.TopView>
          <LandingStyles.BottomView>
            <LandingStyles.BottomBtn
              underlayColor={YELLOW.app}
              style={{backgroundColor: YELLOW.app}}
              onPress={() => this.props.navigation.navigate('Main')}>
              <LandingStyles.BtnText> Try Demo </LandingStyles.BtnText>
            </LandingStyles.BottomBtn>
            <LandingStyles.BottomBtn
              underlayColor={BLUE.light}
              style={{backgroundColor: BLUE.light}}
              onPress={() => this.props.navigation.navigate('SignIn')}>
              <LandingStyles.BtnText> Login | Sign Up </LandingStyles.BtnText>
            </LandingStyles.BottomBtn>
            <LandingStyles.OpenSans9Regular>
              By continuing past this screen, you agree to our{'\n'}
              <LandingStyles.OpenSans9Bold>
                Terms & Conditions
              </LandingStyles.OpenSans9Bold>
              and
              <LandingStyles.OpenSans9Bold>
                Privacy Policy
              </LandingStyles.OpenSans9Bold>
            </LandingStyles.OpenSans9Regular>
          </LandingStyles.BottomView>
        </LandingStyles.SafeView>
      </LandingStyles.WrapperViewVertical>
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

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
