  import React from 'react'
  import Post from './Post'
  
  const Posts = ({ posts }) => {
      return (
          <div>
              {posts.map((post, index) => <Post article={post} key={index} />)}
          </div>
      )
  }
  export default Posts
  