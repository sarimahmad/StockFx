/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Carousel from 'react-native-snap-carousel';

import * as Actions from '../../redux/actions';
import NewsAndFeedStyles from './NewsAndFeedStyles';
import HeaderWithSearch from '../../component/HeaderWithSearch';
import {SCREEN} from '../../helper/Constant';
import {BLUE} from '../../helper/Color';

const entries = [
  {
    icon: require('../../assets/bit_coin_small.png'),
    backIcon: require('../../assets/big_bitcoin_logo.png'),
    name: 'BTC',
    detail: 'A single whale just moved\n$333 Million Bitcoin',
  },
  {
    icon: require('../../assets/bit_coin_small.png'),
    backIcon: require('../../assets/big_bitcoin_logo.png'),
    name: 'BTC',
    detail: 'A single whale just moved\n$333 Million Bitcoin',
  },
  {
    icon: require('../../assets/bit_coin_small.png'),
    backIcon: require('../../assets/big_bitcoin_logo.png'),
    name: 'BTC',
    detail: 'A single whale just moved\n$333 Million Bitcoin',
  },
];

class NewsAndFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      selectedIndex: 0,
    };
  }
  _renderItem = ({item}) => {
    return (
      <NewsAndFeedStyles.CardWrapper>
        <NewsAndFeedStyles.AbsoluteImage source={item.backIcon} />
        <NewsAndFeedStyles.CardInnerWrapper>
          <NewsAndFeedStyles.SimpleViewCenter
            style={{alignItems: 'center', width: 40}}>
            <NewsAndFeedStyles.ItemImage source={item.icon} />
            <NewsAndFeedStyles.OpenSane14bold>
              {item.name}
            </NewsAndFeedStyles.OpenSane14bold>
          </NewsAndFeedStyles.SimpleViewCenter>
          <NewsAndFeedStyles.BottomView>
            <NewsAndFeedStyles.OpenSans18Bold>
              {item.detail}
            </NewsAndFeedStyles.OpenSans18Bold>
            <NewsAndFeedStyles.RowView>
              <NewsAndFeedStyles.BottomOption>
                <NewsAndFeedStyles.OpenSane12bold
                  style={{color: BLUE.drawerLine}}>
                  DECRYPT
                </NewsAndFeedStyles.OpenSane12bold>
              </NewsAndFeedStyles.BottomOption>
              <NewsAndFeedStyles.OpenSane12bold>
                Bitcoin
              </NewsAndFeedStyles.OpenSane12bold>
            </NewsAndFeedStyles.RowView>
          </NewsAndFeedStyles.BottomView>
        </NewsAndFeedStyles.CardInnerWrapper>
      </NewsAndFeedStyles.CardWrapper>
    );
  };

  _renderWeeklyAnalytics = ({}) => {
    return (
      <NewsAndFeedStyles.WeeklyAnalyticsWrapper>
        <NewsAndFeedStyles.WeeklyAnalyticsInnerWrapper>
          <NewsAndFeedStyles.LeftView>
            <NewsAndFeedStyles.RowView>
              <NewsAndFeedStyles.OpenSans18BoldRed>
                22{' '}
              </NewsAndFeedStyles.OpenSans18BoldRed>
              <NewsAndFeedStyles.OpenSans10Regular>
                FEB
              </NewsAndFeedStyles.OpenSans10Regular>
            </NewsAndFeedStyles.RowView>
            <NewsAndFeedStyles.OpenSans10regularDot>
              -
            </NewsAndFeedStyles.OpenSans10regularDot>
            <NewsAndFeedStyles.RowView>
              <NewsAndFeedStyles.OpenSans18BoldRed>
                28{' '}
              </NewsAndFeedStyles.OpenSans18BoldRed>
              <NewsAndFeedStyles.OpenSans10Regular>
                FEB
              </NewsAndFeedStyles.OpenSans10Regular>
            </NewsAndFeedStyles.RowView>
          </NewsAndFeedStyles.LeftView>
          <NewsAndFeedStyles.SafeView
            style={{marginLeft: 10, justifyContent: 'center'}}>
            <NewsAndFeedStyles.OpenSane12bold>
              Weekly Analyst Update
            </NewsAndFeedStyles.OpenSane12bold>
            <NewsAndFeedStyles.OpenSans12Regular>
              This weekly analyst update covers: Value stocks beat growth
              stocks/ Financials climb on Treasury Bond yield...
            </NewsAndFeedStyles.OpenSans12Regular>
          </NewsAndFeedStyles.SafeView>
        </NewsAndFeedStyles.WeeklyAnalyticsInnerWrapper>
      </NewsAndFeedStyles.WeeklyAnalyticsWrapper>
    );
  };
  render() {
    return (
      <NewsAndFeedStyles.WrapperViewVertical>
        <HeaderWithSearch
          leftPress={() => this.props.navigation.openDrawer()}
          headerText={'News & Updates'}
          searchValue={this.state.searchValue}
          searchChange={(searchValue) => this.setState({searchValue})}
        />
        <NewsAndFeedStyles.SafeView>
          <NewsAndFeedStyles.SimpleViewCenter>
            <Carousel
              ref={(c) => {
                this._carousel = c;
              }}
              data={entries}
              renderItem={this._renderItem}
              sliderWidth={SCREEN.width}
              itemWidth={SCREEN.width}
            />
          </NewsAndFeedStyles.SimpleViewCenter>
          <NewsAndFeedStyles.SimpleViewCenter>
            <Carousel
              ref={(c) => {
                this._carousel = c;
              }}
              data={entries}
              renderItem={this._renderWeeklyAnalytics}
              sliderWidth={SCREEN.width}
              itemWidth={SCREEN.width}
            />
          </NewsAndFeedStyles.SimpleViewCenter>

          <NewsAndFeedStyles.TopCategoriesList>
            <NewsAndFeedStyles.HorizontalCategoriesList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              data={['Following', 'Everything', 'Most Popular', 'High']}
              renderItem={(item) => (
                <NewsAndFeedStyles.CategoryItemWrapper
                  onPress={() => this.setState({selectedIndex: item.index})}>
                  <NewsAndFeedStyles.CategorySelected
                    style={{
                      backgroundColor:
                        this.state.selectedIndex === item.index
                          ? BLUE.light
                          : BLUE.app,
                    }}>
                    <NewsAndFeedStyles.OpenSans12Bold
                      style={{
                        color:
                          this.state.selectedIndex === item.index
                            ? BLUE.app
                            : BLUE.light,
                      }}>
                      {item.item}
                    </NewsAndFeedStyles.OpenSans12Bold>
                  </NewsAndFeedStyles.CategorySelected>
                </NewsAndFeedStyles.CategoryItemWrapper>
              )}
            />
          </NewsAndFeedStyles.TopCategoriesList>
          <NewsAndFeedStyles.NewsList
            keyExtractor={(item, index) => index.toString()}
            data={['', '', '', '']}
            renderItem={() => (
              <NewsAndFeedStyles.WeeklyAnalyticsWrapper
                style={{marginBottom: 20}}>
                <NewsAndFeedStyles.WeeklyAnalyticsInnerWrapper>
                  <NewsAndFeedStyles.LeftView
                    style={{backgroundColor: BLUE.background}}>
                    <NewsAndFeedStyles.ItemImage
                      source={require('../../assets/bit_coin_small.png')}
                    />
                    <NewsAndFeedStyles.OpenSane14bold style={{marginTop: 5}}>
                      BTC
                    </NewsAndFeedStyles.OpenSane14bold>
                  </NewsAndFeedStyles.LeftView>
                  <NewsAndFeedStyles.SafeView
                    style={{backgroundColor: BLUE.background}}>
                    <NewsAndFeedStyles.OpenSane14bold>
                      Google stocks become 'Digital Gold' if Volatility drops
                      and regulators step in, says Bridgewater Executives...
                    </NewsAndFeedStyles.OpenSane14bold>
                    <NewsAndFeedStyles.RowView>
                      <NewsAndFeedStyles.BottomOption>
                        <NewsAndFeedStyles.OpenSane12bold
                          style={{color: BLUE.drawerLine}}>
                          STOCKGLOBE
                        </NewsAndFeedStyles.OpenSane12bold>
                      </NewsAndFeedStyles.BottomOption>
                      <NewsAndFeedStyles.OpenSans10Regular>
                        - 4 hours ago
                      </NewsAndFeedStyles.OpenSans10Regular>
                    </NewsAndFeedStyles.RowView>
                  </NewsAndFeedStyles.SafeView>
                </NewsAndFeedStyles.WeeklyAnalyticsInnerWrapper>
              </NewsAndFeedStyles.WeeklyAnalyticsWrapper>
            )}
          />
        </NewsAndFeedStyles.SafeView>
      </NewsAndFeedStyles.WrapperViewVertical>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsAndFeed);
