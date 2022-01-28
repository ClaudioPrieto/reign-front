import '../styles/App.css';
import axios from 'axios';
import React, { FC, useState, useEffect } from "react";

const PostList: FC = () => {

  const baseURL = 'https://hn.algolia.com/api/v1/search_by_date';
  const pages = Array.from(Array(9).keys());

  const [posts, setPosts] = useState<any[]>([]);
  const [newsType, setNewsType] = useState<string>('angular');
  const [page, setPage] = useState<number>(0);
  const [likes, setLikes] = useState<any[]>([]);

  useEffect(() => {
    axios.get(`${baseURL}?query=${newsType}&page=${page}`).then((response) => {
      setPosts(response.data.hits);
    });
  }, [newsType, page]);

  const handleUnlike = (id: number) => {
    setLikes(likes.filter(item => item !== id))
}
  return (
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
                <div className='post-info-container'>
                  <img src="/iconmonstr-time-2.svg" alt=''/>  
                  <span className='post-date'>{ new Date(post.created_at).toDateString() }</span>
                  <span className='post-author'>by { post.author }</span>
                  <span className='post-author'>--- { post.story_id }</span>
                </div>
                <span className='post-title'>{ post.story_title }</span>
              </div>
              { likes.includes(post.story_id) ? 
                <div className='like-button' onClick={() => handleUnlike(post.story_id) }>
                  <img src="/iconmonstr-favorite-3.svg" alt=''/>
                </div> 
                : 
                <div className='like-button' onClick={() => setLikes([...likes, post.story_id]) }>
                  <img src="/iconmonstr-favorite-2.svg" alt=''/>
                </div> }
            </div>
          ))}
        </div>

        <div className='pagination-container'>
          <button className="btn prev-btn" onClick={() => { page !== 0 ? setPage(page - 1) : setPage(page) }}>
            &lt;
          </button>

          {pages.map((item) => {
            return (
              <button
                key={item}
                className={`page-btn ${
                  item === page ? "active-btn" : null
                }`}
                onClick={() => {
                  setPage(item);
                }}
              >
                <span className='page-number'>{ item + 1}</span>
              </button>
            );
          })}
          <button className="btn next-btn" onClick={() => { page !== 8 ? setPage(page + 1) : setPage(page) }}>
            &gt;
          </button>
        </div>
      </div>
  );
}

export default PostList;
