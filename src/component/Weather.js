import React, { Component } from 'react'
import axios from  'axios'
// import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
class Weather extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }

async componentDidMount (){
    const response = await axios.get('http://api.weatherstack.com/current?access_key=1a93a72ba85c81df32e8ba53280900e1&query=' + this.props.location.state.image,{

     })
     console.log(response)
     this.setState({data:response.data.current})
}
    render() {
        return (
            <div>
                <img alt='thumbnail' src={this.state.data.weather_icons}/>
               <Typography>{this.state.data.temperature}</Typography> 
               <Typography>{this.state.data.wind_speed}</Typography> 
               <Typography>{this.state.data.precip}</Typography> 
            </div>
        )
    }
}
export default Weather;