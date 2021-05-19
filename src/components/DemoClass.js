import React, { Component } from 'react'

class DemoClass extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
            name:'guest',
            show:true
        }
    }
    
    clickHandler = () => {
        this.setState({
            name:'user'
           
        }) 
    }
    
   
    

    render() {

        

        return (
            this.state.show ? 
                <div>
                    <h1>Welcome {this.state.name}</h1>
                    <button onClick={this.clickHandler}>subscribe</button>
                </div>
            :
            <div>nothing to show</div>
        )
    }
}

export default DemoClass
