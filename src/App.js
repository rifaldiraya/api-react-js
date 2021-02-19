import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//pages
// import BlogPostFetch from './pages/BlogPost/BlogPostFetch';
import BlogPostAxios from  './pages/BlogPost/BlogPostAxios'
import BlogPostFakeServer from './pages/BlogPost/BlogPostFakeServer'

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Route path='/' component={BlogPostFakeServer} />
        <Route path='/blogpost' component={BlogPostFakeServer} />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
