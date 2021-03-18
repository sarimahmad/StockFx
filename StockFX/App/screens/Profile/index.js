/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../redux/actions';
import ProfileStyles from './ProfileStyles';
import HeaderWithOptionBtn from '../../component/HeaderWithOptionBtn';
import {BLUE, WHITE} from '../../helper/Color';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editProfile: false,
      imageUri: '',
      f_name: '',
      l_name: '',
      email: '',
    };
  }

  render() {
    return (
      <ProfileStyles.WrapperViewVertical>
        <HeaderWithOptionBtn
          headerText={'Profile'}
          backColor={BLUE.app}
          leftIcon={require('../../assets/menu_btn.png')}
          rightIcon={
            this.state.editProfile
              ? require('../../assets/save_white.png')
              : require('../../assets/edit_profile.png')
          }
          rightPress={() =>
            this.setState({editProfile: !this.state.editProfile})
          }
          leftPress={() => this.props.navigation.openDrawer()}
        />
        <ProfileStyles.SafeView>
          <ProfileStyles.Scroll>
            <ProfileStyles.TopUserProfileWrapper
              underlayColor={BLUE.background}>
              <ProfileStyles.TopUserInnerImage
                source={
                  this.state.imageUri !== ''
                    ? {uri: this.state.image}
                    : require('../../assets/add_pic_profil.png')
                }
              />
            </ProfileStyles.TopUserProfileWrapper>
            <ProfileStyles.SimpleView>
              <ProfileStyles.ItemWrapper>
                <ProfileStyles.ItemInnerLeft>
                  <ProfileStyles.OpenSans10Regular>
                    First name
                  </ProfileStyles.OpenSans10Regular>
                  <ProfileStyles.TextInput
                    value={this.state.f_name}
                    editable={this.state.editProfile}
                    placeholder={'Ash'}
                    placeholderTextColor={WHITE.off}
                    onChangeText={(f_name) => this.setState({f_name})}
                  />
                </ProfileStyles.ItemInnerLeft>
              </ProfileStyles.ItemWrapper>

              <ProfileStyles.ItemWrapper>
                <ProfileStyles.ItemInnerLeft>
                  <ProfileStyles.OpenSans10Regular>
                    Last name
                  </ProfileStyles.OpenSans10Regular>
                  <ProfileStyles.TextInput
                    value={this.state.l_name}
                    placeholder={'Taker'}
                    placeholderTextColor={WHITE.off}
                    editable={this.state.editProfile}
                    onChangeText={(l_name) => this.setState({l_name})}
                  />
                </ProfileStyles.ItemInnerLeft>
              </ProfileStyles.ItemWrapper>

              <ProfileStyles.ItemWrapper>
                <ProfileStyles.ItemInnerLeft>
                  <ProfileStyles.OpenSans10Regular>
                    Email Address
                  </ProfileStyles.OpenSans10Regular>
                  <ProfileStyles.TextInput
                    value={this.state.email}
                    placeholder={'Ash@taker.com'}
                    placeholderTextColor={WHITE.off}
                    editable={this.state.editProfile}
                    onChangeText={(email) => this.setState({email})}
                  />
                </ProfileStyles.ItemInnerLeft>
              </ProfileStyles.ItemWrapper>

              <ProfileStyles.ItemInnerLeft>
                <ProfileStyles.OpenSans10Regular style={{marginTop: 10}}>
                  Linked Account
                </ProfileStyles.OpenSans10Regular>
                <ProfileStyles.SocialBtnImage
                  style={{alignSelf: 'flex-end'}}
                  source={require('../../assets/google_btn.png')}
                />
              </ProfileStyles.ItemInnerLeft>
            </ProfileStyles.SimpleView>
          </ProfileStyles.Scroll>
        </ProfileStyles.SafeView>
      </ProfileStyles.WrapperViewVertical>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
