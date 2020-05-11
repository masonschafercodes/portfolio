import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0};

    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="font-main projects-grid">
                    {/* Project 1*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: 'url(https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F1418202%2Fimages%2Fo-MEDICINE-CABINET-facebook.jpg&f=1&nofb=1) center / cover'}}>Matplotlib Homework-The Power of Plots</CardTitle>
                        <CardText>
                        Deep Analysis on a drug regimen provided to mice, to see which regimen was for effective for stopping tumor growth.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://butler.bootcampcontent.com/masonschafer01/matplotlib-homework-the-power-of-plots-homework" target="_blank" rel="noopener noreferrer">GitLab</a></Button>
                        </CardActions>
                        <CardMenu style={{colr: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    {/* Project 2*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkwhs.wharton.upenn.edu%2Fwp-content%2Fuploads%2F2019%2F09%2Frecession-ahead.jpg&f=1&nofb=1) center / cover'}}>Economic Downturn Analysis</CardTitle>
                        <CardText>
                        Analysis on prior economic downturns in the economy vs. our current situation with COVID-19
                        </CardText>
                        <CardActions border>
                        <Button colored><a href="https://butler.bootcampcontent.com/masonschafer01/diseases_in_the_economy_are_we_doomed" target="_blank" rel="noopener noreferrer">GitLab</a></Button>
                        </CardActions>
                    </Card>

                    {/* Project 3*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnews.umanitoba.ca%2Fwp-content%2Fuploads%2F2019%2F03%2FBusiness-Analysis-program-1200x800.jpg&f=1&nofb=1) center / cover'}}>SQL Data Engineering, Modeling, and Analysis </CardTitle>
                        <CardText>
                        Project to test my Data Engineering, Modeling, and Analysis skills (data is a large employees database that was provided to us from our instructor) 
                        </CardText>
                        <CardActions border>
                        <Button colored><a href="https://butler.bootcampcontent.com/masonschafer01/sql-challenge" target="_blank" rel="noopener noreferrer">GitLab</a></Button>
                        </CardActions>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                    {/* Project 1*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: 'url(https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wallpaperup.com%2Fuploads%2Fwallpapers%2F2015%2F04%2F01%2F651648%2F1be6bb566b11add52d9716c4aa51dffe.jpg&f=1&nofb=1) center / cover'}}>Portfolio Page</CardTitle>
                        <CardText>
                        Portfolio Page built with React. Use of React-mdl, React-router-dom, and some other styling Components to help build the current site you're looking at.
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/masonschafercodes/portfolio" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
                        </CardActions>
                    </Card>

                </div>
            )
        } else if (this.state.activeTab === 2){
            return(
                <div className="font-main projects-grid">
                    {/* Project 1*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', fontWeight: 'bold', background: 'url(https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcbsnews1.cbsistatic.com%2Fhub%2Fi%2F2014%2F01%2F06%2Fdd59caea-2766-4a92-ac71-aa345ec0e77f%2F001_king%2520kamehameha_2100.jpg&f=1&nofb=1) center / cover'}}>Surfs Up!</CardTitle>
                        <CardText>
                        Use of Python and SQLAlchemy to do climate analysis and data exploration of a Hawaii  climate database. All of the following were used in the project: SQLAlchemy ORM queries, Pandas, and Matplotlib.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://butler.bootcampcontent.com/masonschafer01/sqlalchemy-challenge" rel="noopener noreferrer" target="_blank">GitLab</a></Button>
                        </CardActions>
                    </Card>
                </div>
            )
        }
    }

    

    render(){
        return(
            <div className="font-main category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab style={{color: "white"}}>Data Analysis</Tab>
                    <Tab style={{color: "white"}}>Web Dev</Tab>
                    <Tab style={{color: "white"}}>Flask</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        );
    }
}

export default Projects;