/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Slider} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {NavigationEvents} from 'react-navigation';
import {
  Chart,
  Area,
  Line,
  VerticalAxis,
  HorizontalAxis,
} from 'react-native-responsive-linechart';
import {ContributionGraph} from 'react-native-chart-kit';

import * as Actions from '../../redux/actions';
import DetailStyles from './DetailStyles';
import HeaderWithFavorite from '../../component/HeaderWithFavorite';
import {BLUE, GREEN, WHITE, YELLOW} from '../../helper/Color';
import {SCREEN} from '../../helper/Constant';

const commitsData = [
  {date: '2017-01-02', count: 1},
  {date: '2017-01-03', count: 2},
  {date: '2017-01-04', count: 3},
  {date: '2017-01-05', count: 4},
  {date: '2017-01-06', count: 5},
  {date: '2017-01-30', count: 2},
  {date: '2017-01-31', count: 5},
  {date: '2017-03-01', count: 2},
  {date: '2017-04-02', count: 4},
  {date: '2017-03-05', count: 2},
  {date: '2017-02-30', count: 4},
];

const chartConfig = {
  backgroundColor: BLUE.app,
  backgroundGradientFrom: BLUE.app,
  backgroundGradientTo: BLUE.app,
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(42, 204, 66, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '1',
    strokeWidth: '1',
    stroke: GREEN.app,
  },
};

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
      selectedIndex: 0,
      selectedChart: 0,
    };
  }
  _renderOverview(item) {
    return (
      <DetailStyles.SafeView>
        <DetailStyles.Scroll>
          <DetailStyles.SimpleRowView style={{paddingHorizontal: 30}}>
            <DetailStyles.SafeView>
              <DetailStyles.OpenSans26Bold>
                ${item.amount}
              </DetailStyles.OpenSans26Bold>
              <DetailStyles.AverageRowWrapper>
                <DetailStyles.OpenSans14Regular
                  style={{color: item ? item.color : GREEN.default}}>
                  +$0.87
                </DetailStyles.OpenSans14Regular>
                <DetailStyles.AverageInnerView
                  style={{backgroundColor: item ? item.color : GREEN.default}}>
                  <DetailStyles.OpenSans14Bold>
                    +0.70%
                  </DetailStyles.OpenSans14Bold>
                </DetailStyles.AverageInnerView>
              </DetailStyles.AverageRowWrapper>
            </DetailStyles.SafeView>
            <DetailStyles.SafeView style={{alignItems: 'flex-end'}}>
              <DetailStyles.OpenSans14Bold style={{color: WHITE.dark}}>
                $125.12
              </DetailStyles.OpenSans14Bold>
              <DetailStyles.OpenSans12Regular>
                Market closed
              </DetailStyles.OpenSans12Regular>
              <DetailStyles.OpenSans12Regular>
                Opens at 4 Mar 19:30
              </DetailStyles.OpenSans12Regular>
            </DetailStyles.SafeView>
          </DetailStyles.SimpleRowView>
          <DetailStyles.OpenSans12Regular style={{paddingLeft: 30}}>
            Price at close 03 Mar 02:00 PKT
          </DetailStyles.OpenSans12Regular>
          <DetailStyles.TopCategoriesList>
            <DetailStyles.HorizontalCategoriesList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              data={['1H', '1D', '3D', '1W', '1M', '3M', '6M']}
              renderItem={(items, index) => (
                <DetailStyles.CategoryItemWrapper
                  onPress={() => this.setState({selectedIndex: items.index})}>
                  <DetailStyles.CategorySelected
                    style={{
                      backgroundColor:
                        this.state.selectedIndex === items.index
                          ? YELLOW.app
                          : BLUE.app,
                    }}>
                    <DetailStyles.OpenSans12Bold
                      style={{
                        color:
                          this.state.selectedIndex === items.index
                            ? BLUE.app
                            : BLUE.light,
                      }}>
                      {items.item}
                    </DetailStyles.OpenSans12Bold>
                  </DetailStyles.CategorySelected>
                </DetailStyles.CategoryItemWrapper>
              )}
            />
          </DetailStyles.TopCategoriesList>
          <DetailStyles.ChartWrapper>
            {this.state.selectedChart === 0 ? (
              <Chart
                style={{
                  height: 198,
                  width: '99%',
                  alignSelf: 'center',
                  borderRadius: 15,
                  borderWidth: 2,
                }}
                data={[
                  {x: -2, y: 15},
                  {x: -1, y: 13},
                  {x: 0, y: 12},
                  {x: 1, y: 7},
                  {x: 2, y: 6},
                  {x: 3, y: 8},
                  {x: 4, y: 10},
                  {x: 5, y: 8},
                  {x: 6, y: 12},
                  {x: 7, y: 14},
                  {x: 8, y: 12},
                  {x: 9, y: 13.5},
                  {x: 10, y: 18},
                ]}
                xDomain={{min: -2, max: 10}}
                yDomain={{min: 0, max: 20}}>
                <VerticalAxis
                  tickCount={11}
                  theme={{labels: {formatter: (v) => v.toFixed(2)}}}
                />
                <HorizontalAxis
                  tickCount={5}
                  tickValues={['-2', '1', '3', '6', '10']}
                />
                <Area
                  theme={{
                    gradient: {
                      from: {color: '#2ACC42'},
                      to: {color: '#ABFFB8', opacity: 0.8},
                    },
                  }}
                  smoothing={'bezier'}
                />
                <Line
                  theme={{
                    stroke: {color: GREEN.app, width: 5},
                    scatter: {default: {width: 4, height: 4, rx: 2}},
                  }}
                />
              </Chart>
            ) : (
              <ContributionGraph
                values={commitsData}
                endDate={new Date('2017-04-01')}
                numDays={91}
                width={SCREEN.width - 63}
                height={200}
                chartConfig={chartConfig}
                withVerticalLabels={true}
              />
            )}
          </DetailStyles.ChartWrapper>
          <DetailStyles.AverageRowWrapper
            style={{
              width: SCREEN.width - 60,
              alignSelf: 'center',
              marginTop: 20,
            }}>
            <DetailStyles.ChartIconBtn
              onPress={() => this.setState({selectedChart: 0})}
              underlayColor={BLUE.app}>
              <DetailStyles.ChartIcon
                source={
                  this.state.selectedChart === 0
                    ? require('../../assets/line_chart_active.png')
                    : require('../../assets/line_chart_in_active.png')
                }
              />
            </DetailStyles.ChartIconBtn>
            <DetailStyles.ChartIconBtn
              onPress={() => this.setState({selectedChart: 1})}
              underlayColor={BLUE.app}
              style={{marginLeft: 20}}>
              <DetailStyles.ChartIcon
                source={
                  this.state.selectedChart === 1
                    ? require('../../assets/bar_chart_active.png')
                    : require('../../assets/bar_chart_in_active.png')
                }
              />
            </DetailStyles.ChartIconBtn>
          </DetailStyles.AverageRowWrapper>
          <DetailStyles.Divider />
          <DetailStyles.SimpleView>
            <DetailStyles.OpenSans18Bold>
              Market Data
            </DetailStyles.OpenSans18Bold>
            <Slider
              style={{
                width: SCREEN.width - 60,
                height: 10,
                marginTop: 12,
                backgroundColor: BLUE.app,
              }}
              minimumTrackTintColor={BLUE.app}
              maximumTrackTintColor={BLUE.app}
              thumbImage={require('../../assets/slider_icon.png')}
            />
            <DetailStyles.SimpleRowView>
              <DetailStyles.SafeView>
                <DetailStyles.OpenSans26Bold style={{fontSize: 18}}>
                  {'$106.11'}
                </DetailStyles.OpenSans26Bold>
              </DetailStyles.SafeView>
              <DetailStyles.SafeView>
                <DetailStyles.OpenSans26Bold
                  style={{fontSize: 18, alignSelf: 'flex-end'}}>
                  $106.11
                </DetailStyles.OpenSans26Bold>
              </DetailStyles.SafeView>
            </DetailStyles.SimpleRowView>
            <DetailStyles.SimpleRowView style={{marginVertical: 0}}>
              <DetailStyles.SafeView>
                <DetailStyles.OpenSans12Regular style={{marginTop: 0}}>
                  open
                </DetailStyles.OpenSans12Regular>
              </DetailStyles.SafeView>
              <DetailStyles.SafeView>
                <DetailStyles.OpenSans12Regular style={{marginTop: 0}}>
                  Previous Close
                </DetailStyles.OpenSans12Regular>
              </DetailStyles.SafeView>
            </DetailStyles.SimpleRowView>
            <DetailStyles.SimpleRowView style={{marginVertical: 0}}>
              <DetailStyles.SafeView>
                <DetailStyles.OpenSans18Bold style={{marginTop: 0}}>
                  $128.42
                </DetailStyles.OpenSans18Bold>
              </DetailStyles.SafeView>
              <DetailStyles.SafeView>
                <DetailStyles.OpenSans18Bold style={{marginTop: 0}}>
                  $128.42
                </DetailStyles.OpenSans18Bold>
              </DetailStyles.SafeView>
            </DetailStyles.SimpleRowView>
            <DetailStyles.SimpleRowView
              style={{marginVertical: 0, marginTop: 9}}>
              <DetailStyles.SafeView>
                <DetailStyles.OpenSans12Regular style={{marginTop: 0}}>
                  Market Cap
                </DetailStyles.OpenSans12Regular>
              </DetailStyles.SafeView>
              <DetailStyles.SafeView>
                <DetailStyles.OpenSans12Regular style={{marginTop: 0}}>
                  Turnover
                </DetailStyles.OpenSans12Regular>
              </DetailStyles.SafeView>
            </DetailStyles.SimpleRowView>
            <DetailStyles.SimpleRowView style={{marginVertical: 0}}>
              <DetailStyles.SafeView>
                <DetailStyles.OpenSans18Bold style={{marginTop: 0}}>
                  $2.15T
                </DetailStyles.OpenSans18Bold>
              </DetailStyles.SafeView>
              <DetailStyles.SafeView>
                <DetailStyles.OpenSans18Bold style={{marginTop: 0}}>
                  846.36K
                </DetailStyles.OpenSans18Bold>
              </DetailStyles.SafeView>
            </DetailStyles.SimpleRowView>
            <DetailStyles.SimpleRowView
              style={{marginVertical: 0, marginTop: 9}}>
              <DetailStyles.SafeView>
                <DetailStyles.OpenSans12Regular style={{marginTop: 0}}>
                  Shares Outstanding
                </DetailStyles.OpenSans12Regular>
              </DetailStyles.SafeView>
              <DetailStyles.SafeView>
                <DetailStyles.OpenSans12Regular style={{marginTop: 0}}>
                  Free Float
                </DetailStyles.OpenSans12Regular>
              </DetailStyles.SafeView>
            </DetailStyles.SimpleRowView>
            <DetailStyles.SimpleRowView style={{marginVertical: 0}}>
              <DetailStyles.SafeView>
                <DetailStyles.OpenSans18Bold style={{marginTop: 0}}>
                  16.82B
                </DetailStyles.OpenSans18Bold>
              </DetailStyles.SafeView>
              <DetailStyles.SafeView>
                <DetailStyles.OpenSans18Bold style={{marginTop: 0}}>
                  16.96B
                </DetailStyles.OpenSans18Bold>
              </DetailStyles.SafeView>
            </DetailStyles.SimpleRowView>
          </DetailStyles.SimpleView>
          <DetailStyles.BlueBtn>
            <DetailStyles.OpenSans14Bold style={{color: BLUE.light}}>
              Show more
            </DetailStyles.OpenSans14Bold>
          </DetailStyles.BlueBtn>
          <DetailStyles.Divider style={{marginTop: 10}} />
          <DetailStyles.SimpleView>
            <DetailStyles.OpenSans18Bold>
              Apple Inc News{'\n'}
            </DetailStyles.OpenSans18Bold>
            <DetailStyles.OpenSans18Bold>
              Apple likely to beat street estimates for services{'\n'}
            </DetailStyles.OpenSans18Bold>
            <DetailStyles.OpenSans14Regular style={{color: WHITE.light}}>
              The MagSafe adapter long found on laptops made by Apple Inc
              (Nasdaq:AAPL) could makea comeback on...{'\n'}
            </DetailStyles.OpenSans14Regular>
            <DetailStyles.OpenSans14Regular style={{color: WHITE.light}}>
              4 hours ago from Yahoo Finance{'\n'}
            </DetailStyles.OpenSans14Regular>
            <DetailStyles.OpenSans18Bold>
              Is NIVIDIA's acquisition of ARM holdings doomed{'\n'}
            </DetailStyles.OpenSans18Bold>
            <DetailStyles.OpenSans14Regular style={{color: WHITE.light}}>
              The MagSafe adapter long found on laptops made by Apple Inc
              (Nasdaq:AAPL) could makea comeback on...{'\n'}
            </DetailStyles.OpenSans14Regular>
            <DetailStyles.OpenSans14Regular style={{color: WHITE.light}}>
              4 hours ago from Yahoo Finance{'\n'}
            </DetailStyles.OpenSans14Regular>
            <DetailStyles.OpenSans18Bold>
              Broadcom is winning attention.why one analyst says the stock is
              worth more{'\n'}
            </DetailStyles.OpenSans18Bold>
            <DetailStyles.OpenSans14Regular style={{color: WHITE.light}}>
              The MagSafe adapter long found on laptops made by Apple Inc
              (Nasdaq:AAPL) could makea comeback on...{'\n'}
            </DetailStyles.OpenSans14Regular>
            <DetailStyles.OpenSans14Regular style={{color: WHITE.light}}>
              4 hours ago from Yahoo Finance{'\n'}
            </DetailStyles.OpenSans14Regular>
            <DetailStyles.BlueBtn>
              <DetailStyles.OpenSans14Bold style={{color: BLUE.light}}>
                Show more
              </DetailStyles.OpenSans14Bold>
            </DetailStyles.BlueBtn>
          </DetailStyles.SimpleView>
        </DetailStyles.Scroll>
      </DetailStyles.SafeView>
    );
  }
  handleSelect(event) {
    let entry = event.nativeEvent;
    if (entry == null) {
      this.setState({...this.state, selectedEntry: null});
    } else {
      this.setState({...this.state, selectedEntry: JSON.stringify(entry)});
    }
  }
  _renderAlert() {
    return <DetailStyles.SafeView />;
  }
  render() {
    const {navigation} = this.props;
    const itemSelected = navigation.getParam('item', {});
    return (
      <DetailStyles.WrapperViewVertical>
        <NavigationEvents
          onDidFocus={(payload) => {
            setTimeout(() => {}, 700);
          }}
        />
        <HeaderWithFavorite
          headerText={itemSelected !== '' ? itemSelected.name : 'FBC'}
          detail={itemSelected !== '' ? itemSelected.completeName : 'FBC.'}
          headerIcon={
            itemSelected !== ''
              ? itemSelected.image
              : require('../../assets/fbc.png')
          }
          leftPress={() => this.props.navigation.pop()}
        />
        <DetailStyles.SafeView>
          <DetailStyles.TopTabWrapper>
            <DetailStyles.TopTabInnerWrapper
              style={{borderBottomWidth: this.state.selectedTab === 0 ? 5 : 0}}
              underlayColor={BLUE.app}
              onPress={() => this.setState({selectedTab: 0})}>
              <DetailStyles.OpenSans14Bold
                style={{
                  color: this.state.selectedTab === 0 ? YELLOW.app : BLUE.light,
                }}>
                Overview
              </DetailStyles.OpenSans14Bold>
            </DetailStyles.TopTabInnerWrapper>
            <DetailStyles.TopTabInnerWrapper
              style={{borderBottomWidth: this.state.selectedTab === 1 ? 5 : 0}}
              underlayColor={BLUE.app}
              onPress={() => this.setState({selectedTab: 1})}>
              <DetailStyles.OpenSans14Bold
                style={{
                  color: this.state.selectedTab === 1 ? YELLOW.app : BLUE.light,
                }}>
                Alerts
              </DetailStyles.OpenSans14Bold>
            </DetailStyles.TopTabInnerWrapper>
          </DetailStyles.TopTabWrapper>
          {this.state.selectedTab === 0
            ? this._renderOverview(itemSelected)
            : this._renderAlert(itemSelected)}
        </DetailStyles.SafeView>
      </DetailStyles.WrapperViewVertical>
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

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
