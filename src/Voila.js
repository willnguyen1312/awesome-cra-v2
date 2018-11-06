import * as React from 'react'
import { signal, controller } from './abort';


let num = 1
let call = 1

export default class App extends React.Component {
    state = {
        data: 0,
    }

    componentDidMount = async () => {
        if (num < 4) {
            num++
            setTimeout(() => {
                this.props.history.push('/about')
            }, 200);
        }
        const controller = new AbortController();
        this.controller = controller;
        const signal = controller.signal;

        try {
            const data = await fetch(`https://jsonplaceholder.typicode.com/users/${call++}`, {
                signal,
            }).then(r => r.json())
            this.setState({
                data,
            })
        } catch (e) {
            console.log(e)
        }

    }

    componentWillUnmount() {
        this.controller.abort()
    }

    render() {
        console.log(this.state);
        return <div>
            {this.state.data.name}
            {/* <button onClick={this.handleClick}>Load Data</button> */}
        </div>
    }
}