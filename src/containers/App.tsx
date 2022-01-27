import '../styles/App.css';
import axios from 'axios';
import React, { FC, useState, useEffect } from "react";

const App: FC = () => {

  const baseURL = 'https://hn.algolia.com/api/v1/search_by_date'

  const [posts, setPosts] = useState<any[]>([]);
  const [newsType, setNewsType] = useState<string>('angular');
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    axios.get(`${baseURL}?query=${newsType}&page=${page}`).then((response) => {
      setPosts(response.data.hits);
    });
  }, [newsType, page]);

  const handleLike = () => {
    console.log('Liked')
  }

  const nextPage = () => {
    if (page !== 9) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page !== 0) {
      setPage(page - 1);
    }
  };

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
            <div key={ index } className='grid-element'>
              <div className='content' onClick={ () => window.open(post.story_url, "_blank") }>
                <div className='date-container'>
                  <img src="/iconmonstr-time-2.svg" alt=''/>
                  <span className='post-date'>{ new Date(post.created_at).toString() }</span>
                  <span className='post-author'>by { post.author }</span>
                </div>
                <span className='post-title'>{ post.story_title }</span>
              </div>
              <div className='like-button' onClick={ handleLike }>
                <img src="/iconmonstr-favorite-2.svg" alt=''/>
              </div>
            </div>
          ))}
        </div>

        <div className='pagination'>
          <button className="btn next-btn" onClick={() => prevPage()}>
            Previous
          </button>
          <span>{ page }</span>
          <button className="btn next-btn" onClick={() => nextPage()}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
