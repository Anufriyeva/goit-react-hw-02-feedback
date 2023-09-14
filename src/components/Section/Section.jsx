import React, { Component } from 'react';
import {SectionContainer} from './Section.styles';


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

export default Section;