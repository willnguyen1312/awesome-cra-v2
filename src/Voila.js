import * as React from 'react'
import axios from 'axios'


let num = 1
let call = 1

export default class App extends React.Component {
    state = {
        data: 0,
    }

    componentDidMount() {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        this.source = source
        if (num < 4) {
            num++
            setTimeout(() => {
                this.props.history.push('/about')
            }, 200);
        }
        debugger;

        axios.get(`https://jsonplaceholder.typicode.com/users/${call++}`, {
            cancelToken: source.token
        }).then(({ data: { name } }) => {
            this.setState({
                data: name
            })
        }).catch(function (thrown) {
            if (axios.isCancel(thrown)) {
                console.log('Request canceled', thrown.message);
            } else {
                console.log("Unknow ", thrown)
            }
        });
    }

    componentWillUnmount() {
        // cancel the request (the message parameter is optional)
        this.source.cancel();
    }

    render() {
        return <div>
            {this.state.data}
            {/* <button onClick={this.handleClick}>Load Data</button> */}
        </div>
    }
}