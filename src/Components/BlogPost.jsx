import React, { Component } from 'react';
import '../App.css';
import { client } from '../contentful/client';
import Posts from './Posts'

class BlogPost extends Component {
    state = {
        articles: []
    }

    componentDidMount() {
        client.getEntries()
        .then((response) => {
            this.setState({
                articles: response.items
            })
        })
        .catch(console.error)
    }
    render() {
    return (
        <div className="container">
            <header>
                <div className="wrapper">
                    <span className="font-main color1 pb-10">Blog Posts</span>
                    <hr className="w-30" />
                </div>
            </header>
            <main>
            <div className="wrapper">
                <Posts posts={this.state.articles} />
            </div>
            </main>
        </div>
    );
    }
}

export default BlogPost;