import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//pages
import BlogPostFetch from './pages/BlogPost/basic and get method/BlogPostFetch';
import BlogPostAxios from  './pages/BlogPost/basic and get method/BlogPostAxios'
import BlogPostFakeServer from './pages/BlogPost/fake server/BlogPostFakeServer'
import BlogPostDeleteMethod from './pages/BlogPost/delete method/BlogPostDeleteMethod'

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Route path='/' component={BlogPostDeleteMethod} />
        <Route path='/blogpost' component={BlogPostDeleteMethod} />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
