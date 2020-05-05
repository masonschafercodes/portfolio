import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>

                        <h2>Mason Schafer</h2>
                        <img 
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    </Cell>
                    <Cell col={6}>
                        
                        <h2>Contact Me</h2>
                        <hr />

                        <div className="contact-list">

                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (317)853-0416
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-fax" aria-hidden="true"/>
                                        (317)853-0416
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope-square" aria-hidden="true"/>
                                        mason.schafer1@gmail.com
                                    </ListItemContent>
                                </ListItem>

                            </List>

                        </div>

                        

                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;