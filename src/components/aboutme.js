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
                            src = "https://i.ibb.co/sQSjNTP/icon.png"
                            alt="avatar"
                            style={{height: '250px', textAlign: 'center', paddingLeft: '15px'}}
                            className="about-me-left"
                            />
                            <a href="https://www.github.com/masonschafercodes" rel="noopener noreferrer" target="_blank"><i className="fa fa-github-square fa-3x" style={{marginTop: "10px", padding: "10px", color: "#0099ff"}}></i></a>
                            <a href="https://www.linkedin.com/in/masonschafer" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin-square fa-3x" style={{color: "#0099ff"}}></i></a>
                        </div>
                    </Cell>
                    <Cell col={8} className="about-me-right font-main">
                        <BounceInDiv><h1 className="font-main">What you should know about me.</h1></BounceInDiv>
                        <FadeInDiv><p>My name is Mason Schafer and I love being a developer. I have been learning different languages since I was 13 years old. I always remember when I would be on break from school I would go to my Mom’s work and would very often just build random web games with Javascript and fun little websites. I didn’t get serious about actual development until I was in highschool, when I decided to join Business Professionals of America. Business Professionals of America is a program that lets young professionals come together and compete against each other. One other student and I competed in the Java competition, in this competition we had the freedom to create a chat program that had had some sort of Natural Language processing incorporated in it. We decided to take on auto completion, and when I say this was complicated I mean it. We had 2 months to finish the project (spoiler, we did finish it). We got second place in the competition, making our way on to the state finals. After highschool I decided to go to the Army, I enlisted as an IT Specialist because I thought that was appropriate. Getting back in October of 2019, I started the Butler University Data Analysis and Visualizations Bootcamp. My goals by the end of 2020 are to finish the boot camp with an A and have enough talent to get a job in either data analysis or front end web development. </p></FadeInDiv>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default AboutMe;