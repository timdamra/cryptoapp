import React, { Component } from 'react';
import moment from 'moment';
import {
  VictoryChart,
  VictoryCandlestick,
  VictoryAxis,
  VictoryTheme,
  VictoryTooltip
} from 'victory';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchChartData, emptyChartData } from '../actions';

class CandleStick extends Component {
  componentDidMount = () => {
    this.props.fetchChartData(this.props.symbol);
  };
  componentWillUnmount = () => {
    this.props.emptyChartData();
  };
  render = () => {
    return this.props.chartData
      ? <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={{ x: 25 }}
          scale={{ x: 'time' }}
        >
          <VictoryAxis angle="45" tickFormat={t => moment(t).format('hh:mm')} />
          <VictoryAxis dependentAxis />
          <VictoryCandlestick
            candleColors={{ positive: 'green', negative: 'red' }}
            data={this.props.chartData}
            high="high"
            close="close"
            low="low"
            open="open"
            x="x"
            labelComponent={<VictoryTooltip flyoutStyle={{ fill: 'white' }} />}
            labels={d => [
              `open: ${d.open}`,
              `close: ${d.close}`,
              `high: ${d.high}`,
              `low: ${d.low}`
            ]}
          />
        </VictoryChart>
      : <h3>Data not available for this coin</h3>;
  };
}

CandleStick.propTypes = {
  chartData: PropTypes.array.isRequired
};

const mapStateToProps = ({ chartData }) => {
  return { chartData };
};

export default connect(mapStateToProps, { fetchChartData, emptyChartData })(
  CandleStick
);
