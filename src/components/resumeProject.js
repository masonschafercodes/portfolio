import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class ResumeProject extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={12}>
                        <h4 style={{marginTop: '0px', color: "#fff"}} className="font-main">{this.props.projectName}</h4>
                        <p style={{color: "#fff"}} className="font-main">- {this.props.projectDescription}</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default ResumeProject;