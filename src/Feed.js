import React, { useState, useEffect } from 'react';
import "./Feed.css";
import Post from "./Post";
import StoryReel from './StoryReel';
import db from "./firebase";
import MessageSender from './MessageSender';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => 
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    )
  }, [])

  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender />

        {posts.map((post) => (
          <Post 
            key={post.data.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
           />
        ))}
        {/* <Post  
          profilePic="https://cdn.codechef.com/sites/default/files/uploads/pictures/487a521907c444de8d23258ea5aa4baa.JPG"
          message="Wow this works!"
          timestamp="This is a timestamp"
          username="Juhaib Khan"
          image="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" /> */}
    </div>
  );
}

export default Feed;
