import '../styles/App.css';
import axios from 'axios';
import React, { FC, useState, useEffect } from "react";

const App: FC = () => {

  const baseURL = 'https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0'

  const [posts, setPosts] = useState<any[]>([]);
  const [newsType, setNewsType] = useState<string>('angular');

  useEffect(() => {
    axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${newsType}&page=0`).then((response) => {
      setPosts(response.data.hits);
    });
  }, [newsType]);

  const handleLike = () => {
    console.log('Liked')
  }

  return (
    <div className='container'>
      <div className='header'>
        <span className='title'>
          HACKER NEWS
        </span>
      </div>

      <div className='body'>
        
        <select className='dropdown-select' onChange={ (e) => setNewsType(e.target.value) }>
          <option value="angular">Angular</option>
          <option value="reactjs">React</option>
          <option value="vuejs">Vuejs</option>
        </select>

        <div className='grid'>
          {posts.map((post, index) => (
            <div className='grid-element'>
              <div className='content' onClick={ () => window.open(post.story_url, "_blank") }>
                <span className='post-date'>{ post.created_at }</span>
                <span className='post-title'>{ post.story_title }</span>
              </div>
              <div className='like-button' onClick={ handleLike }>
                <span>Like</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
