import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//pages
import BlogPostFetch from './pages/BlogPost/basic and get method/BlogPostFetch';
import BlogPostAxios from  './pages/BlogPost/basic and get method/BlogPostAxios'
import BlogPostFakeServer from './pages/BlogPost/fake server/BlogPostFakeServer'
import BlogPostDeleteMethod from './pages/BlogPost/delete method/BlogPostDeleteMethod'
import BlogPostPostMethod from './pages/BlogPost/post method/BlogPostPostMethod'
import BlogPostPutMethod from './pages/BlogPost/put method/BlogPostPutMethod'

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Route path='/' component={BlogPostPutMethod} />
        <Route path='/blogpost' component={BlogPostPutMethod} />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
