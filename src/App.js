import React, { Component } from 'react';
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';

class ChildOne extends Component {
  render() {
    return <h1>{this.props.data || 0}</h1>
  }
}

class ChildTwo extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.data !== nextProps.data
  }
  render() {
    return <h1>{this.props.data}</h1>
  }
}

class App extends Component {
  render() {
    return <div style={{
      widht: '100vw',
      height: '100vh'
    }}>
      <VictoryChart
        theme={VictoryTheme.material}
      >
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc" }
          }}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 }
          ]}
        />
      </VictoryChart>
    </div>
  }
}

export default App;
