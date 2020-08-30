import React from 'react'
import BlogPost from '../Components/BlogPost'
import '../App.css';

const Blog = () => {
    return (
        <div>
            <div className="nav-container">
                <a href="/" className="font-main"><p>Projects</p><br/></a>
                <a href="/" className="font-main"><p>Home</p></a>
            </div>
            <BlogPost />
            <footer>
                <div className="footer-container">
                <div className="socials-container">
                    <a href="https://github.com/masonschafercodes" rel="noopener noreferrer" target="_blank"><p className="font-main color1"><span className="hash-color">#</span> GitHub</p></a>
                    <a href="https://linkedin.com/in/masonschafer/" rel="noopener noreferrer" target="_blank"><p className="font-main color1"><span className="hash-color">#</span> LinkedIn</p></a>
                </div>
                <div className="cpyright-container">
                <p className="font-main color1">2020 Mason Schafer</p>
                </div>
                </div>
            </footer>
        </div>
    );
}

export default Blog