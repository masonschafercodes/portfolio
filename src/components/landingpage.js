import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.iconfinder.com%2Fdata%2Ficons%2Fuser-pictures%2F101%2Fmalecostume-512.png&f=1&nofb=1"
                            alt="avatar"
                            className="avatar-img"
                        /> 
                        <div className="banner-text">
                            <h1>Mason Schafer</h1>
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