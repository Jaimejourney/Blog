import React, {Component} from 'react';
import './App.css';
import Header from './public/Header/Header';
import blogList from './components/blogList';
import {Route, Switch} from 'react-router-dom';
import resumeContent from './components/resumeContent';
import contact from './components/contact';
import BlogPage from './components/BlogPage';
import Article from './components/Article';
import MainMenu from './components/MainMenu';
import postPage from './components/postPage';


class App extends Component {
    render() {
        return (
            <main>
                <Header/>
                <Switch>
                    <Route exact path="/" component={MainMenu}/>
                    <Route exact path="/blogList" component={blogList}/>
                    <Route exact path="/about" component={resumeContent}/>
                    <Route exact path="/contact" component={contact}/>
                    <Route
                        exact
                        path="/blogList/:name"
                        render={routerProps => {
                        const name = routerProps.match.params.name;
                        return (<Article name={name}/>);
                    }}/>
                    <Route
                        exact
                        path="/page/:id"
                        render={routerProps => {
                        const id = routerProps.match.params.id;
                        return (<BlogPage id={id}/>);
                    }}/>
                    <Route exact path="/post" component={postPage}/>
                </Switch>
            </main>
        );
    }
}

export default App;
