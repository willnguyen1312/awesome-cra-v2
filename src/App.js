import React, { Component } from 'react';

function sleep(miliseconds) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, miliseconds);
  })
}

class App extends Component {
  logs = [1, [2, 3, 4], 5]
  state = {
    current: 0
  }

  componentDidMount() {
    this.readLogs(this.logs);
  }

  readLogs = async (logs) => {
    for (const log of logs) {
      if (typeof log === "object") {
        await this.readLogs(log)
      } else {
        await sleep(1000)
        this.setState(() => ({
          current: log,
        }))
      }
    }
  }

  render() {
    return (
      <h1>
        {this.state.current}
      </h1>
    );
  }
}

export default App;
