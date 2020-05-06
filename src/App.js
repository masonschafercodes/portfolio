import React from "react";
import "./App.css";
import  { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from "./components/main";
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none'}} to="/"></Link>} scroll>
            <Navigation className="link-nav">
                <Link to="/"><span className="header-color-link">Home</span></Link>
                <Link to="/resume"><span className="header-color-link">Resume</span></Link>
                <Link to="/projects"><span className="header-color-link">Projects</span></Link>
                <Link to="/contact"><span className="header-color-link">Contact</span></Link>
                <Link to="/about"><span className="header-color-link">About</span></Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none'}} to="/"></Link>}>
            <Navigation>
                <Link to="/"><span className="header-color-link-1">Home</span></Link>
                <Link to="/resume"><span className="header-color-link-1">Resume</span></Link>
                <Link to="/projects"><span className="header-color-link-1">Projects</span></Link>
                <Link to="/contact"><span className="header-color-link-1">Contact</span></Link>
                <Link to="/about"><span className="header-color-link-1">About</span></Link>
            </Navigation>
        </Drawer>
        <Content style={{background: '#181818', color: '#fff'}}>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
