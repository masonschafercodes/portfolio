import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import bounceIn from 'react-animations/lib/bounce-in'
import styled, {keyframes} from 'styled-components';
import FadeIn from "react-animations/lib/fade-in";


const bounceInAnimation = keyframes`${bounceIn}`;
const BounceInDiv = styled.div`animation: 1.5s ${bounceInAnimation};`

const FadeInAnimation = keyframes`${FadeIn}`;
const FadeInDiv = styled.div`
  animation: 5s ${FadeInAnimation};
`;


class AboutMe extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                    <div  style={{textAlign: 'center'}}>
                            <img 
                            src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.iconfinder.com%2Fdata%2Ficons%2Fuser-pictures%2F101%2Fmalecostume-512.png&f=1&nofb=1"
                            alt="avatar"
                            style={{height: '200px', textAlign: 'center'}}
                            className="about-me-left"
                            />
                            <a href="https://www.github.com/masonschafercodes"><i className="fa fa-github-square fa-3x" style={{marginTop: "10px", padding: "10px", color: "#0099ff"}}></i></a>
                            <a href="https://www.linkedin.com/in/masonschafer"><i className="fa fa-linkedin-square fa-3x" style={{color: "#0099ff"}}></i></a>
                        </div>
                    </Cell>
                    <Cell col={8} className="about-me-right">
                        <BounceInDiv><h1>What you should know about me.</h1></BounceInDiv>
                        <FadeInDiv><p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?""Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p></FadeInDiv>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default AboutMe;