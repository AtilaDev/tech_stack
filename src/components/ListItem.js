import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';

import { selectLibrary } from '../actions';

class LibraryItem extends Component {
  componentDidUpdate = () => {
    LayoutAnimation.spring();
  };

  renderDescription = () => {
    if (this.props.expanded) {
      return (
        <CardSection>
          <View style={{ backgroundColor: '#fefefe' }}>
            <Text style={{ flex: 1 }}>
              {this.props.library.item.description}
            </Text>
          </View>
        </CardSection>
      );
    }
  };

  render() {
    const { title, id } = this.props.library.item;
    const { titleStyle } = styles;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <View>
              <Text style={titleStyle}>{title}</Text>
            </View>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return {
    expanded
  };
};

export default connect(
  mapStateToProps,
  { selectLibrary }
)(LibraryItem);
