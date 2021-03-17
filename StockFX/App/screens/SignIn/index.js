import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {NavigationEvents} from 'react-navigation';

import * as Actions from '../../redux/actions';
import SignInStyles from './SignInStyles';
import {BLUE, WHITE, YELLOW} from '../../helper/Color';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailFocused: false,
      passFocused: false,
    };
  }
  render() {
    return (
      <SignInStyles.WrapperViewVertical>
        <NavigationEvents
          onDidFocus={(payload) => {
            setTimeout(() => {}, 700);
          }}
        />
        <SignInStyles.SafeView>
          <SignInStyles.OpenSans18Bold>
            Want a quick introduction about{'\n'}
            how to get started
          </SignInStyles.OpenSans18Bold>
          <SignInStyles.SocialBtnWrapper>
            <SignInStyles.SocialInnerWrapper>
              <SignInStyles.SocialBtn>
                <SignInStyles.SocialBtnImage
                  source={require('../../assets/facebook_btn.png')}
                />
              </SignInStyles.SocialBtn>
            </SignInStyles.SocialInnerWrapper>
            <SignInStyles.SocialInnerWrapper>
              <SignInStyles.SocialBtn>
                <SignInStyles.SocialBtnImage
                  style={{alignSelf: 'flex-end'}}
                  source={require('../../assets/google_btn.png')}
                />
              </SignInStyles.SocialBtn>
            </SignInStyles.SocialInnerWrapper>
          </SignInStyles.SocialBtnWrapper>
          <SignInStyles.OpenSans14Bold>
            Or{'\n'}
            {'\n'}Log in with email
          </SignInStyles.OpenSans14Bold>
          <SignInStyles.TextInputWrapper>
            {this.state.emailFocused && (
              <SignInStyles.TextInputTitle>Email</SignInStyles.TextInputTitle>
            )}
            <SignInStyles.TextInput
              style={{
                borderBottomColor: this.state.emailFocused
                  ? YELLOW.app
                  : WHITE.light,
              }}
              placeholder={!this.state.emailFocused ? 'Email' : ''}
              onFocus={() => this.setState({emailFocused: true})}
              onSubmitEditing={() => this.setState({emailFocused: false})}
              placeholderTextColor={WHITE.dark}
            />
          </SignInStyles.TextInputWrapper>

          <SignInStyles.TextInputWrapper style={{marginTop: 10}}>
            {this.state.passFocused && (
              <SignInStyles.TextInputTitle>
                Password
              </SignInStyles.TextInputTitle>
            )}
            <SignInStyles.TextInput
              style={{
                borderBottomColor: this.state.passFocused
                  ? YELLOW.app
                  : WHITE.light,
              }}
              secureTextEntry={true}
              placeholder={!this.state.passFocused ? 'Password' : ''}
              onFocus={() => this.setState({passFocused: true})}
              onSubmitEditing={() => this.setState({passFocused: false})}
              placeholderTextColor={WHITE.dark}
            />
            <SignInStyles.AbsoluteEyeIcon>
              <SignInStyles.IconPass source={require('../../assets/eye_pass.png')} />
            </SignInStyles.AbsoluteEyeIcon>
          </SignInStyles.TextInputWrapper>
          <SignInStyles.ForgotPassText style={{textDecorationLine: 'underline'}}>
            Forgot password?
          </SignInStyles.ForgotPassText>
          <SignInStyles.BottomBtnWrapper
            underlayColor={YELLOW.app}
            onPress={() => this.props.navigation.navigate('Main')}
            style={{backgroundColor: YELLOW.app}}>
            <SignInStyles.BtnText>Login</SignInStyles.BtnText>
          </SignInStyles.BottomBtnWrapper>
          <SignInStyles.BottomBtnWrapper
            underlayColor={BLUE.light}
            style={{backgroundColor: BLUE.light}}>
            <SignInStyles.BtnText>Sign Up</SignInStyles.BtnText>
          </SignInStyles.BottomBtnWrapper>
        </SignInStyles.SafeView>
      </SignInStyles.WrapperViewVertical>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
