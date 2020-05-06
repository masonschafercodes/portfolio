import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import TypeWriter from 'react-typewriter';

class LandingPage extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="banner-text">
                            <h1><TypeWriter typing={.5}>Mason Schafer</TypeWriter></h1>
                            <hr/>
                            <p>CSS | Bootstrap | Javascript | React | React Native | Flask | D3JS | Python</p>

                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="http://www.linkedin.com/in/masonschafer" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Google */}
                                <a href="https://github.com/masonschafercodes" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* FreecodeCamp */}
                                <a href="https://www.freecodecamp.org/masonschafercodes" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                                </a>
                            </div>
                        </div>                   
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;