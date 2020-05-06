import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render(){
        return(
            <div>
                <Grid className="resume-grid">
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                            src = "https://i.ibb.co/sQSjNTP/icon.png"
                            alt="avatar"
                            style={{height: '250px'}}
                            />


                        </div>
                        <h2 style={{paddingTop: '2em'}}>Mason Schafer</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>4838 E 64th St, 46220</p>
                        <h5>Phone</h5>
                        <p>(317)853-0416</p>
                        <h5>Email</h5>
                        <a href="mailto:mason.schafer1@gmail.com" style={{textDecorationColor: "white", color: "white"}}><p>mason.schafer1@gmail.com</p></a>
                        <h5>Website</h5>
                        <a href="/" style={{textDecorationColor: "white", color: "white"}}><p>masonschafer.tech</p></a>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell col={8} className="resume-right-col">
                        <h2 style={{color: "#fff"}}>Education</h2>
                        <Education 
                            startYear={'Febuary, 2020'}
                            endYear={ 'August, 2020'}
                            schoolName={'Butler University Data Analysis Bootcamp'}
                            schoolDescription={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
                        />

                        <Education 
                            startYear={2015}
                            endYear={2019}
                            schoolName={'North Central High School'}
                            schoolDescription={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2 style={{color: "#fff"}}>Experience</h2>
                        <Experience 
                            startYear={2015}
                            endYear={2016}
                            jobName="Habig's Garden Shop"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        />
                        <Experience 
                            startYear={2017}
                            endYear={2019}
                            jobName="Restraunt"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2 style={{color: "#fff"}}>Skills</h2>
                        <Skills 
                            skill="Javascript"
                            progress={75}
                        />
                        <Skills 
                        skill="React"
                        progress={55}
                        />
                        <Skills 
                        skill="Python"
                        progress={80}
                        />
                        <Skills 
                        skill="MongoDB"
                        progress={85}
                        />

                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;