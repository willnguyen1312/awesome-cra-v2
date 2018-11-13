import * as React from 'react'

export default class Buble extends React.Component {
    parentClick = () => {
        console.log("Parent")
    }
    childrenClick = () => {
        console.log("Children")
    }
    render() {
        return <div onTouchStart={this.parentClick}>
            <div>
                <button onTouchStart={this.childrenClick}>Hell Yeah</button>
            </div>
        </div>
    }
}