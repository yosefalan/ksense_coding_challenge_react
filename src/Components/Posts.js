import React from 'react'
import Card from 'react-bootstrap/Card';

const Posts = ({ posts, userId }) => {
  return (
    <div id="posts_container">
        {posts?.filter((p) => p.userId === userId)?.map(post => {
          return (
            <Card className="card">
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
              </Card.Body>
            </Card>
          )
        })}
    </div>
  )
}
 export default Posts
