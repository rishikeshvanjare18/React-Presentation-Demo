import React, { Component } from 'react'

class FormHandling extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             surname:'',
             city:''
        }
    }
    

    changeHandler = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitHandler = (e) =>{
        //e.preventDefault()
        const {name,surname,city} = this.state
        alert(name + surname + city)
    }

    render() {
        return (
            <div>
                <form>
                    <label>name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.changeHandler}/>

                    <label>surname</label>
                    <input type="text" name="surname" value={this.state.surname} onChange={this.changeHandler}/>

                    <label>city</label>
                    <input type="text" name="city" value={this.state.city} onChange={this.changeHandler}/>
                    <button onClick={this.submitHandler}>submit</button>
                </form>
            </div>
        )
    }
}

export default FormHandling
