import React, { Component } from 'react'
import axios from  'axios'
class Weather extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }

async componentDidMount (){
    const response = await axios.get('http://api.weatherstack.com/current?access_key=ad1c16a10230bed3168076c957f51552query=' + this.props.location.state.image,{

     })
     console.log(response)
}
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
export default Weather;