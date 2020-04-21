import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import axios from 'axios'
import CountryDetails from './CountryDetails'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
class HomePage extends Component {
    constructor(props){
        super(props);
        this.state={
            text:'',
            Image:''
        }
    }
handleChange = e =>{
    const regex = /[A-Za-z]/
    if ((e.target.value === '')|| regex.test(e.target.value)){
        this.setState({text:e.target.value})
    }
}

handleSubmit = async e  => {
    e.preventDefault();
    const response = await axios.get('https://restcountries.eu/rest/v2/name/'+ this.state.text,{

    })
    console.log(response)
    this.setState({Image:response.data})
}
    render() {
        const {classes} = this.props
        return (
            <div  className={classes.root}>
            <Typography className={classes.title}>Get countries Details</Typography>
                <form>
            <TextField
            lable='Enter the country name'
            margin='normal'
            variant='outlined'
            className={classes.input}
            onChange={this.handleChange}
            />
            <Button
                variant='contained'
                color='primary'
                className={classes.btn}
                onClick={this.handleSubmit}
                disable={!this.state.text}
                >Search
            </Button>
            </form>
            {this.state.Image !== '' && (<CountryDetails {...this.state}/>)}
            </div>
        )
    }
}
export default withStyles({ 
    root:{
        marginLeft:'30%',
        marginTop:'5%'
    },
    title:{
        fontSize:'30px'
    },
    input:{
        width:'50ch'
    },
    btn:{
        marginTop:'2%',
        padding:'1%',
        margin:'2%'
    }
})(HomePage)