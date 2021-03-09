import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {Switch} from 'react-native';
import {connect} from 'react-redux';
import {NavigationEvents} from 'react-navigation';
import {Chart, Area} from 'react-native-responsive-linechart';

import * as Actions from '../../redux/actions';
import StockStyles from './StockStyles';
import HeaderWithSearch from '../../component/HeaderWithSearch';
import {BLUE, GREEN, RED} from '../../helper/Color';
import {GraphData, StockList} from '../../helper/Constant';
import VerticalListWithTitle from '../../component/VerticalListWithTitle';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      selectedIndex: 0,
      followedAssets: false,
    };
  }

  render() {
    return (
      <StockStyles.WrapperViewVertical>
        <NavigationEvents
          onDidFocus={(payload) => {
            setTimeout(() => {}, 700);
          }}
        />
        <HeaderWithSearch
          leftPress={() => this.props.navigation.openDrawer()}
          headerText={'StockFX'}
          searchValue={this.state.searchValue}
          searchChange={(searchValue) => this.setState({searchValue})}
        />
        <StockStyles.SafeView>
          <StockStyles.TopCategoriesList>
            <StockStyles.HorizontalCategoriesList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              data={['All', 'US', 'Europe', 'Asia', 'Other']}
              renderItem={(item, index) => (
                <StockStyles.CategoryItemWrapper
                  onPress={() => this.setState({selectedIndex: item.index})}>
                  <StockStyles.CategorySelected
                    style={{
                      backgroundColor:
                        this.state.selectedIndex === item.index
                          ? BLUE.light
                          : BLUE.app,
                    }}>
                    <StockStyles.OpenSans12Bold
                      style={{
                        color:
                          this.state.selectedIndex === item.index
                            ? BLUE.app
                            : BLUE.light,
                      }}>
                      {item.item}
                    </StockStyles.OpenSans12Bold>
                  </StockStyles.CategorySelected>
                </StockStyles.CategoryItemWrapper>
              )}
            />
          </StockStyles.TopCategoriesList>
          <StockStyles.ChartListWrapper>
            <StockStyles.HorizontalCategoriesList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              data={GraphData}
              renderItem={(item, index) => (
                <StockStyles.GraphItemWrapper
                  style={{
                    borderLeftColor: item.item.color,
                    marginLeft: item.index === 0 ? 50 : 20,
                  }}
                  onPress={() => this.setState({selectedIndex: item.index})}>
                  <StockStyles.GraphInnerWrapper>
                    <StockStyles.OpenSans12Regular>
                      {item.item.name}
                    </StockStyles.OpenSans12Regular>
                    <StockStyles.OpenSans14Bold>
                      {item.item.amount}
                    </StockStyles.OpenSans14Bold>
                    <StockStyles.BottomRowView>
                      <StockStyles.OpenSans12Regular
                        style={{color: item.item.color}}>
                        {item.item.avg}%
                      </StockStyles.OpenSans12Regular>
                      <StockStyles.SafeView
                        style={{
                          transform: [{scaleY: item.item.value.revertValue}],
                          justifyContent: 'center',
                          alignItems: 'flex-end',
                          paddingRight: 10,
                        }}>
                        <Chart
                          style={{
                            height: 30,
                            minWidth: '50%',
                            alignItems: 'flex-end',
                            marginRight: 5,
                          }}
                          data={item.item.value.data}
                          xDomain={{min: -2, max: 2}}
                          yDomain={{min: 0, max: 12}}>
                          <Area
                            theme={{
                              gradient: {
                                from: {color: item.item.value.color},
                                to: {color: item.item.color, opacity: 0.5},
                              },
                            }}
                          />
                        </Chart>
                      </StockStyles.SafeView>
                    </StockStyles.BottomRowView>
                  </StockStyles.GraphInnerWrapper>
                </StockStyles.GraphItemWrapper>
              )}
            />
          </StockStyles.ChartListWrapper>

          <StockStyles.FollowedAssetsRowView>
            <Switch
              trackColor={BLUE.light}
              thumbColor={BLUE.light}
              value={this.state.followedAssets}
              onValueChange={(followedAssets) => this.setState({followedAssets})}
            />
            <StockStyles.OpenSans12Regular style={{marginLeft: 10}}>
              Only show followed assets
            </StockStyles.OpenSans12Regular>
          </StockStyles.FollowedAssetsRowView>
          <VerticalListWithTitle title={'Most active'} itemPress={(data) => this.setState({itemPressed: data})} data={StockList} />
        </StockStyles.SafeView>
      </StockStyles.WrapperViewVertical>
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

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
