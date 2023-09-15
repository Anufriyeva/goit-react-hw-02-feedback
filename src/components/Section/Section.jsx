import React, { Component } from 'react';
import {SectionContainer} from './Section.styles';
import PropTypes from 'prop-types';


class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <SectionContainer>
        <h1>{title}</h1>
        {children}
      </SectionContainer>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;