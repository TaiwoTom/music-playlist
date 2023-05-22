import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './component/header.js';
import CreatePlaylist from './component/create-playlist.js';
import TrendingSongs from './component/trending-songs.js'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='body'>
  <Header/>
  <CreatePlaylist/>
  <TrendingSongs/>
  </div>
);


