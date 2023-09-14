import React, { Component } from 'react';
import { StatsContainer, StatItem } from './Statistics.styles';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <StatsContainer>
        <StatItem>Good: {good}</StatItem>
        <StatItem>Neutral: {neutral}</StatItem>
        <StatItem>Bad: {bad}</StatItem>
        <StatItem>Total: {total}</StatItem>
        <StatItem>Positive feedback: {positivePercentage.toFixed(2)}%</StatItem>
      </StatsContainer>
    );
  }
}

export default Statistics;