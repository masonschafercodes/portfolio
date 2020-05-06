import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    render(){
        return(

            <div>
                <Grid>
                    <Cell col={4}>
                        <p style={{color: "#fff"}}>{this.props.startYear} - {this.props.endYear}</p>
                    </Cell>
                    <Cell col={8}>
                        <h4 style={{marginTop: '0px', color: '#fff'}}>{this.props.schoolName}</h4>
                        <p style={{color: "#fff"}}>{this.props.schoolDescription}</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Education;