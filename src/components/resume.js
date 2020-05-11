import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import ResumeProject from './resumeProject';
import { Button } from 'reactstrap';
import TypeWriter from 'react-typewriter';

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
                        <h2 style={{paddingTop: '2em'}} className="font-main">Mason Schafer</h2>
                        <TypeWriter typing={.5}><h4 style={{color: 'lightgrey'}} className="font-main">Developer</h4></TypeWriter>
                        <hr style={{borderTop: '3px solid #fff', width: '50%'}}/>
                        <p className="font-main">My name is Mason Schafer and I love being a developer. I have been learning different languages since I was 13 years old. I always remember when I would be on break from school I would go to my Mom’s work and would very often just build random web games with Javascript and fun little websites.</p>
                        <hr style={{borderTop: '3px solid #fff', width: '50%'}}/>
                        <h5 className="font-main">Address</h5>
                        <p className="font-main">4838 E 64th St, 46220</p>
                        <h5 className="font-main">Phone</h5>
                        <p className="font-main">(317)853-0416</p>
                        <h5 className="font-main">Email</h5>
                        <a href="mailto:mason.schafer1@gmail.com" style={{textDecorationColor: "white", color: "white"}} className="font-main"><p>mason.schafer1@gmail.com</p></a>
                        <h5 className="font-main">Website</h5>
                        <a href="/" style={{textDecorationColor: "white", color: "white"}} className="font-main"><p>masonschafer.tech</p></a>
                        <hr style={{borderTop: '3px solid #fff', width: '50%'}}/>
                        <a href="https://cdn-22.anonfile.com/V4O389waoa/bbf7766e-1588802234/MasonSchaferResume.pdf" ><Button color="primary"  style={{marginTop:  '15px', fontSize: '20px', backgroundColor: 'white', color:  'black'}} className="font-main">Download Resume</Button></a>
                    </Cell>
                    <Cell col={8} className="resume-right-col">
                        <h2 style={{color: "#fff"}} className="font-main">Education</h2>
                        <Education 
                            startYear={'Febuary, 2020'}
                            endYear={ 'August, 2020'}
                            schoolName={'Butler University Data Analysis Bootcamp'}
                            schoolDescription={'Bootcamp certificate for data analytics and visualization'}
                        />

                        <Education 
                            startYear={2015}
                            endYear={2019}
                            schoolName={'North Central High School'}
                            schoolDescription={'Secondary Education'}
                        />
                        <hr style={{borderTop: '3px solid #fff'}}/>

                        <h2 style={{color: "#fff"}} className="font-main">Experience</h2>
                        <Experience 
                            startYear={2015}
                            endYear={2016}
                            jobName="Best Buy"
                            jobDescription="Sales Associate in the computer department. Helping customers find the products that best fit their needs."
                        />
                        <Experience 
                            startYear={2017}
                            endYear={2019}
                            jobName="iMechanic iPhone &amp; Computer Repair"
                            jobDescription="Diagnose and repair iPhones and Computer for customer"
                        />
                        <hr style={{borderTop: '3px solid #efff'}}/>

                        <h2 style={{color: "#fff"}} className="font-main">Personal Projects</h2>

                        <ResumeProject 
                            projectName="SQL Data Engineering, Modeling, and Analysis"
                            projectDescription="Clean a set of six CSV files and create an ERD and
                            database schema to preform data analysis on the database."

                        />
                        <ResumeProject 
                            projectName="Analysis on prior economic downturns in the economy vs. the economic situation with COVID19"
                            projectDescription="Collect data from the internet and use of APIs on past economic downfalls (GDP Data, Average Salary,
                                Dow Jones Data) to make a prediction on how long it will take to recover from COVID-19"

                        />
                        <ResumeProject 
                            projectName="Facial Detection with open-cv and machine learning"
                            projectDescription="Used Python to create a supervised learning
                            model that could with roughly 85% accuracy, detect popular faces including Elon Musk and Jeff Bezos."

                        />
                        <ResumeProject 
                            projectName="PassHold - A lightweight password manager written completely in Python"
                            projectDescription="PassHold is a open-source
                            lightweight password manager that is written complete in Python and uses an active database to store
                            passwords, currently only written for use in terminal but planning on impementing flask and react to create
                            a front end for the manager."

                        />

                        <hr style={{borderTop: '3px solid #efff'}}/>
                        <h2 style={{color: "#fff"}} className="font-main">Skills</h2>
                        <Skills 
                            skill="Javascript"
                            progress={75}
                            className="font-main"
                        />
                        <Skills 
                            skill="React"
                            progress={55}
                            className="font-main"
                        />
                        <Skills 
                            skill="Python"
                            progress={80}
                            className="font-main"
                        />
                        <Skills 
                            skill="MongoDB"
                            progress={85}
                            className="font-main"
                        />

                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;