import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    render(){
        return(

            <div>
                <Grid>
                    <Cell col={4}>
                        <p style={{color: "#fff"}} className="font-main">{this.props.startYear} - {this.props.endYear}</p>
                    </Cell>
                    <Cell col={8}>
                        <h4 style={{marginTop: '0px', color: '#fff'}} className="font-main">{this.props.schoolName}</h4>
                        <p style={{color: "#fff"}} className="font-main">{this.props.schoolDescription}</p>
                        <p style={{color: "#fff", marginLeft: '20px'}} className='font-main'>{this.props.subActivities !== undefined ? "- " + this.props.subActivities : ''}</p>
                        <p style={{color: "#fff", marginLeft: '20px'}} className='font-main'>{this.props.anothersubActivities !== undefined ? "- " + this.props.anothersubActivities : ''}</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Education;