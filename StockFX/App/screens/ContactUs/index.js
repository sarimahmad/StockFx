/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../redux/actions';
import ContactUsStyles from './ContactUsStyles';
import {BLUE, WHITE} from '../../helper/Color';
import HeaderWithOptionBtn from '../../component/HeaderWithOptionBtn';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
      email: '',
    };
  }
  render() {
    return (
      <ContactUsStyles.WrapperViewVertical>
        <HeaderWithOptionBtn
          headerText={'ContactUs'}
          backColor={BLUE.app}
          leftIcon={require('../../assets/menu_btn.png')}
          leftPress={() => this.props.navigation.openDrawer()}
        />
        <ContactUsStyles.SafeView>
          <ContactUsStyles.Scroll bounces={false}>
            <ContactUsStyles.SimpleView>
              <ContactUsStyles.ItemWrapper>
                <ContactUsStyles.ItemInnerLeft>
                  <ContactUsStyles.OpenSans10Regular>
                    Your name
                  </ContactUsStyles.OpenSans10Regular>
                  <ContactUsStyles.TextInput
                    value={this.state.name}
                    placeholder={'Ash'}
                    placeholderTextColor={WHITE.off}
                    onChangeText={(name) => this.setState({name})}
                  />
                </ContactUsStyles.ItemInnerLeft>
              </ContactUsStyles.ItemWrapper>

              <ContactUsStyles.ItemWrapper>
                <ContactUsStyles.ItemInnerLeft>
                  <ContactUsStyles.OpenSans10Regular>
                    Your Email
                  </ContactUsStyles.OpenSans10Regular>
                  <ContactUsStyles.TextInput
                    value={this.state.email}
                    placeholder={'Ash@taker.com'}
                    placeholderTextColor={WHITE.off}
                    onChangeText={(email) => this.setState({email})}
                  />
                </ContactUsStyles.ItemInnerLeft>
              </ContactUsStyles.ItemWrapper>

              <ContactUsStyles.ItemWrapper style={{borderBottomWidth: 0}}>
                <ContactUsStyles.ItemInnerLeft>
                  <ContactUsStyles.OpenSans10Regular>
                    Message
                  </ContactUsStyles.OpenSans10Regular>
                  <ContactUsStyles.TextInputMessage
                    multiline={true}
                    value={this.state.message}
                    placeholder={'Type the message here'}
                    placeholderTextColor={WHITE.off}
                    onChangeText={(message) => this.setState({message})}
                  />
                </ContactUsStyles.ItemInnerLeft>
              </ContactUsStyles.ItemWrapper>
              <ContactUsStyles.SendBtn>
                <ContactUsStyles.SendBtnText>Send</ContactUsStyles.SendBtnText>
              </ContactUsStyles.SendBtn>
            </ContactUsStyles.SimpleView>
          </ContactUsStyles.Scroll>
        </ContactUsStyles.SafeView>
      </ContactUsStyles.WrapperViewVertical>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
