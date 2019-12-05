import React, {Component} from 'react'

class Main extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <main className='app__main main'>
                {this.props.search}
            </main>
        )
    }
}

export default Main