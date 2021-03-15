import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../redux/actions';
import FavouriteStyles from './FavouriteStyles';
import HeaderWithSearch from '../../component/HeaderWithSearch';
import {BLUE, YELLOW} from '../../helper/Color';
import {StockList} from '../../helper/Constant';
import VerticalListWithTitle from '../../component/VerticalListWithTitle';

class Favourite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: false,
      selectedIndex: 0,
    };
  }

  render() {
    return (
      <FavouriteStyles.WrapperViewVertical>
        <HeaderWithSearch
          leftPress={() => this.props.navigation.openDrawer()}
          headerText={'Following'}
          searchValue={this.state.searchValue}
          searchChange={(searchValue) => this.setState({searchValue})}
        />
        <FavouriteStyles.SafeView>
          <FavouriteStyles.AbsoluteTopView />
          <FavouriteStyles.SimpleView>
            <FavouriteStyles.FilterFollowingInputWrapper>
              <FavouriteStyles.FilterSearchImage
                source={require('../../assets/search_black.png')}
              />
              <FavouriteStyles.FilterFollowingInput
                inlineImageLeft="search_icon"
                inlineImagePadding={5}
                placeholder={'Filter following'}
              />
            </FavouriteStyles.FilterFollowingInputWrapper>
            <FavouriteStyles.RowView>
              <FavouriteStyles.OpenSans14Bold>
                Most Active
              </FavouriteStyles.OpenSans14Bold>
              <FavouriteStyles.RightView>
                <FavouriteStyles.HorizontalCategoriesList
                  showsHorizontalScrollIndicator={false}
                  inverted
                  horizontal={true}
                  keyExtractor={(_item, index) => index.toString()}
                  data={['1H', '1D', '1W']}
                  renderItem={(items, _index) => (
                    <FavouriteStyles.CategoryItemWrapper
                      onPress={() =>
                        this.setState({selectedIndex: items.index})
                      }>
                      <FavouriteStyles.CategorySelected
                        style={{
                          backgroundColor:
                            this.state.selectedIndex === items.index
                              ? YELLOW.app
                              : BLUE.background,
                        }}>
                        <FavouriteStyles.OpenSans12Bold
                          style={{
                            color:
                              this.state.selectedIndex === items.index
                                ? BLUE.app
                                : BLUE.light,
                          }}>
                          {items.item}
                        </FavouriteStyles.OpenSans12Bold>
                      </FavouriteStyles.CategorySelected>
                    </FavouriteStyles.CategoryItemWrapper>
                  )}
                />
              </FavouriteStyles.RightView>
            </FavouriteStyles.RowView>
            {/* eslint-disable-next-line react-native/no-inline-styles */}
            <FavouriteStyles.RowView style={{marginTop: 30}}>
              <FavouriteStyles.OpenSans10Regular>
                Assets
              </FavouriteStyles.OpenSans10Regular>
              <FavouriteStyles.RightView>
                <FavouriteStyles.OpenSans10Regular>
                  % Change/Price
                </FavouriteStyles.OpenSans10Regular>
              </FavouriteStyles.RightView>
            </FavouriteStyles.RowView>
            <VerticalListWithTitle
              itemPress={(data) =>
                this.props.navigation.navigate('Detail', {item: data})
              }
              data={StockList}
            />
          </FavouriteStyles.SimpleView>
        </FavouriteStyles.SafeView>
      </FavouriteStyles.WrapperViewVertical>
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

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
