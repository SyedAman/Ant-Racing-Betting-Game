import React, { Component } from 'react';
import { Card, CardHeader } from 'material-ui/Card';

import mockAntStats from '../lib/mock-ant-stats';
import mockRaceStats from '../lib/mock-race-stats';

class Upcoming extends Component {
  state = {
    mockAntStats,
    mockRaceStats
  }

  async componentDidMount () {
    try {
      // make GET request to GraphQL API here

      // handle success
    } catch (error) {
      throw new Error(error);
    }
  }

  render () {
    return (
      <ul>
        {this.state.mockRaceStats.map((race, index) => (
          <li key={index}>
            <Card>
              <CardHeader title={race.name} />
            </Card>
          </li>
        ))}
      </ul>
    );
  }
}

export default Upcoming;
