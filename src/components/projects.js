import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    {/* Project 1*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F1200px-React-icon.svg.png&f=1&nofb=1) center / cover'}}>React Project #1</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{colr: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 2*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F1200px-React-icon.svg.png&f=1&nofb=1) center / cover'}}>React Project #2</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{colr: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 3*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F1200px-React-icon.svg.png&f=1&nofb=1) center / cover'}}>React Project #3</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{colr: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                    {/* Project 1*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Flogos-and-brands-adobe%2F512%2F21_Angular-512.png&f=1&nofb=1) center / cover'}}>Angular Project #1</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{colr: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 2*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Flogos-and-brands-adobe%2F512%2F21_Angular-512.png&f=1&nofb=1) center / cover'}}>Angular Project #2</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{colr: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 3*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Flogos-and-brands-adobe%2F512%2F21_Angular-512.png&f=1&nofb=1) center / cover'}}>Angular Project #3</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{colr: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                    {/* Project 1*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', fontWeight: 'bold', background: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*OrjCKmou1jT4It5so5gvOA.jpeg&f=1&nofb=1) center / cover'}}>VueJS Project #1</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{colr: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 2*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*OrjCKmou1jT4It5so5gvOA.jpeg&f=1&nofb=1) center / cover'}}>VueJS Project #2</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{colr: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 3*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*OrjCKmou1jT4It5so5gvOA.jpeg&f=1&nofb=1) center / cover'}}>VueJS Project #3</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{colr: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 3){
            return(
                <div className="projects-grid">
                    {/* Project 1*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsmyl.es%2Fwurdp%2Fassets%2Fmongodb.png&f=1&nofb=1) center / cover'}}>MongoDB Project #1</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{colr: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 2*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsmyl.es%2Fwurdp%2Fassets%2Fmongodb.png&f=1&nofb=1) center / cover'}}>MongoDB Project #2</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{colr: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 3*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsmyl.es%2Fwurdp%2Fassets%2Fmongodb.png&f=1&nofb=1) center / cover'}}>MongoDB Project #3</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{colr: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }

    

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab>
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