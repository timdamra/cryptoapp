import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryTheme,
  VictoryTooltip
} from 'victory';

export default class Research extends Component {
  componentDidMount = () => {
    axios
      .get('/api/research/zec')
      .then(response => {
        let apiData = response.data.Data;
        let data = [];

        apiData.forEach((val, i) => {
          let time = moment(val.time).format('HH').toString();

          if (!data[time]) {
            data[time] = 1;
          }

          if (data[time]) {
            data[time] += 1;
          }
        });

        this.setState({
          data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render = () => {
    return this.state.data
      ? <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={{ x: 25 }}
          scale={{ x: 'time' }}
        >
          <VictoryAxis tickFormat={t => moment(t).format('HH')} />
          <VictoryAxis dependentAxis />
          <VictoryBar
            alignment="start"
            data={this.props.chartData}
            x="time"
            y="high"
          />
        </VictoryChart>
      : <h3>No data</h3>;
  };
}
