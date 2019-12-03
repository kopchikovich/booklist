import React, {Component} from 'react'

class Main extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            screen: ''
        }
    }

    render() {
        return (
            <main className='app__main main'>
                app main content
            </main>
        )
    }
}

export default Main