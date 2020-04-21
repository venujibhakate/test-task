import React, { Component } from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles'


class CountryDetails extends Component {
    render() {
        const {Image,classes} = this.props
        return (
            <div className={classes.mainDiv}>
                {Image.map((Image,index) => (
                    <Box my={2} style={{minWidth:'500',background:'#f8F8FF'}}>
                        <Grid  container xs={12} style={{padding:'10'}}  component='main' maxWidth='xs'>
                            <Grid item xs={4}>
                <Typography>{Image.name}</Typography>
                <img className={classes.FlagImage} alt='thumbnail' src={Image.flag}/>
                <Typography>Capital:-{Image.capital}</Typography>
                <Typography>Population:-{Image.population}</Typography>

                        
            <Link
             to={{
                 pathname:'/Weather',
                 state:{
                     image:Image.capital
                 },
             }}>
            <Button
            variant='contained'
            color='primary'
            >Capital Weather
        </Button>
        </Link>
        </Grid>
                </Grid>
                </Box>
                ))}
            </div>
        )
    }
}
export default withStyles({ 
    mainDiv:{
        marginRight:'50%'
    },
    FlagImage:{
        width:'30ch'
    }
})
    (CountryDetails);