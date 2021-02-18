import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//pages
// import BlogPostFetch from './pages/BlogPost/BlogPostFetch';
import BlogPostAxios from  './pages/BlogPost/BlogPostAxios'

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Route path='/' component={BlogPostAxios} />
        <Route path='/blogpost' component={BlogPostAxios} />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
