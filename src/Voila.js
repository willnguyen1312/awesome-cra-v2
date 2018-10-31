import * as React from 'react'
import axios from 'axios'


const CancelToken = axios.CancelToken;
const source = CancelToken.source();




export default class App extends React.Component {
    state = {
        data: 0,
    }

    handleClick = async () => {
        // setTimeout(() => {
        //     this.props.history.push('/about')
        // }, 1000);
        // const { name } = await fetch('https://jsonplaceholder.typicode.com/users/1')
        //     .then(r => r.json())

        try {

            setTimeout(() => {
                this.props.history.push('/about')
            }, 1000);
            const { data: { name } } = await axios.get('https://jsonplaceholder.typicode.com/users/1', {
                cancelToken: source.token
            })

            this.setState({
                data: name
            })
        } catch (error) {
            if (axios.isCancel(error)) {
                console.log('Request canceled', error);
            } else {
                console.log('Normal error ', error);
            }
        }
    }

    componentWillUnmount() {
        // cancel the request (the message parameter is optional)
        source.cancel();
    }

    render() {
        return <div>
            {this.state.data}
            <button onClick={this.handleClick}>Load Data</button>
        </div>
    }
}