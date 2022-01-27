import '../styles/App.css';
import axios from 'axios';
import PostList from '../components/PostList'
import FavPostList from '../components/FavPostList'
import React, { FC, useState, useEffect } from "react";

const App: FC = () => {

  const [showLiked, setShowLiked] = useState<boolean>(false);

  return (
    <div className='container'>
      <div className='header'>
        <span className='title'>
          HACKER NEWS
        </span>
      </div>

      <div className='show-liked-btns'>
        <button className={`btn-posts ${
                  !showLiked ? "active-btn-posts" : null
                }`} onClick={() => setShowLiked(false)}>
          <span>All</span>
        </button>
        <button className={`btn-posts ${
                  showLiked ? "active-btn-posts" : null
                }`} onClick={() => setShowLiked(true)}>
          <span>My faves</span>
        </button>

        { showLiked ? <FavPostList/> : <PostList/> }
      </div>
    </div>
  );
}

export default App;
