import React, {Component} from 'react'

class Checkbox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isChecked: this.props.isChecked
        }
    }

    render() {
        return (
            <input type='checkbox' onChange={this.props.onChangeHandler} checked={this.props.isChecked} />
        )
    }
}

export default Checkbox