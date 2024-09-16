<<<<<<< Updated upstream
'use client';

import { formatDate } from '@/lib/format';
import LikeButton from './like-icon';
import { togglePostLikeStatus } from '@/actions/posts';
import { useOptimistic } from 'react';

function Post({ post, action}) {
=======
import { formatDate } from '@/lib/format';
import LikeButton from './like-icon';

function Post({ post }) {
>>>>>>> Stashed changes
  return (
    <article className="post">
      <div className="post-image">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{' '}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
<<<<<<< Updated upstream
            <form
              action={action.bind(null,post.id)}
              className={post.isLiked ? 'liked' : ''}>
              <LikeButton />
            </form>
=======
            <LikeButton />
>>>>>>> Stashed changes
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }) {
<<<<<<< Updated upstream
  //This function changes this post array on the client side, until the change has been processed on the server side. So that we can change it immediately then only sync it back with the server side state once that server side update has been performed.
  const [optimisticPosts, updateOptimisticPosts] =  useOptimistic(posts, (prevPosts, updatedPostId) => {
    const updatedPostIndex = prevPosts.findIndex(post => post.id === updatedPostId);

    if (updatedPostIndex === -1) return prevPosts;

    const updatedPost = { ...prevPosts[updatedPostIndex] };
    updatedPost.likes = updatedPost.likes + (updatedPost.isLiked ? -1 : 1);
    updatedPost.isLiked = !updatedPost.isLiked;

    const newPosts = [...prevPosts];
    newPosts[updatedPostIndex] = updatedPost;

    return newPosts;
  })


  if (!optimisticPosts || optimisticPosts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  async function updatePost(postId){
    updateOptimisticPosts(postId);
    await togglePostLikeStatus(postId);
  }

  return (
    <ul className="posts">
      {optimisticPosts.map((post) => (
        <li key={post.id}>
          <Post post={post} action={updatePost}/>
=======
  if (!posts || posts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  return (
    <ul className="posts">
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
>>>>>>> Stashed changes
        </li>
      ))}
    </ul>
  );
}
