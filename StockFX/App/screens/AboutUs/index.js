import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../redux/actions';
import AboutUsStyles from './AboutUsStyles';
import {BLUE} from '../../helper/Color';
import HeaderWithOptionBtn from '../../component/HeaderWithOptionBtn';

class AboutUs extends Component {
  render() {
    return (
      <AboutUsStyles.WrapperViewVertical>
        <HeaderWithOptionBtn
          headerText={'AboutUs'}
          backColor={BLUE.app}
          leftIcon={require('../../assets/menu_btn.png')}
          leftPress={() => this.props.navigation.openDrawer()}
        />
        <AboutUsStyles.SafeView>
          <AboutUsStyles.Scroll>
            <AboutUsStyles.SimpleView>
              <AboutUsStyles.TopImage source={require('../../assets/logo.png')} />
              <AboutUsStyles.OpenSans13Regular>
                To be of use, statistics must be both reliable and relevant.
                They need to be compiled correctly, following standard{' '}
                <AboutUsStyles.OpenSans13Bold>
                  practices and methodology.
                </AboutUsStyles.OpenSans13Bold>{' '}
                They must also meet the needs of users and answer the questions
                posed by{' '}
                <AboutUsStyles.OpenSans13Bold>
                  policymakers.
                </AboutUsStyles.OpenSans13Bold>{' '}
                Developing countries face a number of problems in providing
                statistics that meet these criteria. They often find themselves
                caught in a vicious cycle—under-investment in national
                statistical systems constrains activities and results in data of
                poor quality, which policymakers are unwilling to rely on. This
                lack of demand for the data leads to fewer resources being made
                available for their production and quality control. The World
                Bank is committed to helping developing countries break out of
                this cycle.{' '}<AboutUsStyles.OpenSans13Bold>Our work includes investments in statistical
                activities, creating and implementing standards and frameworks
                for data collection, analysis and dissemination, strengthening
                the international statistical system, and compiling global data
                sets.</AboutUsStyles.OpenSans13Bold>{' '} There is also much to be done in raising awareness of the
                value of statistics among governments, decision makers and other
                users. As advocates for statistics, we work in close partnership
                with developing countries and our partners in the international
                community. A priority of the World Bank’s efforts to improve the
                statistical infrastructure of developing countries is the
                preparation of national strategies for the development of
                statistics as recommended in the Marrakech Action Plan for
                Statistics. These country-driven plans look at the needs of the
                whole statistical system and provide the basis for coordinated
                and prioritized donor assistance. Other components of the World
                Bank’s statistical capacity building program include:
              </AboutUsStyles.OpenSans13Regular>
            </AboutUsStyles.SimpleView>
          </AboutUsStyles.Scroll>
        </AboutUsStyles.SafeView>
      </AboutUsStyles.WrapperViewVertical>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
