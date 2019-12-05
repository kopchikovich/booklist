import React, {Component} from 'react'

class Main extends Component {
    
    render() {
        return (
            <main className='app__main main'>
                {this.props.search}
            </main>
        )
    }
}

export default Main