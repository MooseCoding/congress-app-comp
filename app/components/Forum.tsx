import { useState, useEffect } from 'react';
import { Input } from './ui/input'; // Using ShadCN components
import { Button } from './ui/Button'; 

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token') || "");

  // Load posts from backend
  useEffect(() => {
    fetch("http://172.16.31.135:8000/api/posts")
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  // Submit a new post
  const handlePostSubmit = (title, content) => {
    if (!token) {
      alert('You must be logged in to create a post.');
      return;
    }

    fetch('http://172.16.31.135:8000/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ title, content })
    }).then(() => {
      // Optionally re-fetch posts after creating a new post
      fetch("http://172.16.31.135:8000/api/posts")
        .then(response => response.json())
        .then(data => setPosts(data));
    });
  };

  return (
    <div className="forum-container" style={{ padding: '20px' }}>
      {/* Sign-on/Sign-up form */}
      <div className="auth-section flex flex-col items-center" style={{ marginBottom: '20px' }}>
        <SignOnSignUpForm setToken={setToken} />
      </div>

      {/* Create a post form */}
      {token && (
        <div className="post-creation-section" style={{ marginBottom: '20px' }}>
          <h2>Create a New Post</h2>
          <PostForm handlePostSubmit={handlePostSubmit} />
        </div>
      )}

      {/* Display posts */}
      <div className="posts-section">
        {posts.map(post => (
          <div key={post.id} className="post-card" style={postCardStyle}>
            <h3>{post.title}</h3>
            <p><em>by {post.username}</em></p>
            <p>{post.content}</p>
            {/* Comments Section */}
            <CommentSection postId={post.id} token={token} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Sign-on/Sign-up form component
const SignOnSignUpForm = ({ setToken }) => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Sign-in and Sign-up
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // State for success message

  // Handle Sign-In
  const handleSignIn = () => {
    console.log('calling api/login'); 
    fetch("http://172.16.31.135:8000/api/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('token', data.token);
      setToken(data.token);
      setMessage(`Welcome back, ${username}! You are now signed in.`);
    })
    .catch(() => setMessage("Sign-in failed, please try again."));
  };

  // Handle Sign-Up
  const handleSignUp = () => {
    console.log('signup called'); 
    
    fetch("http://172.16.31.135:8000/api/signup", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    }).then(response => {
          // Check if the response is OK
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          console.log(data); 
          // Assuming the test endpoint does not return a token, adjust accordingly
          // If it does, replace the line below with how the token is returned
          localStorage.setItem('token', data.token);
          setToken(data.token);
          setMessage(`Response from server: ${data.message}`); // Changed to reflect the test response
      })
      .catch(error => {
          console.error('Fetch error:', error);
          setMessage("Sign-up failed, please try again.");
      });
    };

  return (
    <div className="auth-form" style={formStyle}>
      <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
      <Input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={e => setUsername(e.target.value)} 
        style={inputStyle}
      />
      <Input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={e => setPassword(e.target.value)} 
        style={inputStyle}
      />
      <Button onClick={isSignUp ? handleSignUp : handleSignIn} style={buttonStyle}>
        {isSignUp ? "Sign Up" : "Sign In"}
      </Button>
      <Button onClick={() => setIsSignUp(!isSignUp)} style={{ marginTop: '10px', backgroundColor: '#007BFF' }}>
        {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
      </Button>
      
      {/* Display success message */}
      {message && (
        <p style={{ marginTop: '20px', color: 'green', fontWeight: 'bold' }}>{message}</p>
      )}
    </div>
  );
};

// Form to create a new post
const PostForm = ({ handlePostSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="post-form" style={formStyle}>
      <Input 
        placeholder="Post Title" 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        style={inputStyle}
      />
      <Input 
        placeholder="Post Content" 
        value={content} 
        onChange={e => setContent(e.target.value)} 
        style={inputStyle}
      />
      <Button onClick={() => handlePostSubmit(title, content)} style={buttonStyle}>
        Create Post
      </Button>
    </div>
  );
};

// Comment section with the ability to add a comment
const CommentSection = ({ postId, token }) => {
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");

  // Load comments for the post
  useEffect(() => {
    fetch(`http://172.16.31.135:8000/api/posts/${postId}/comments`)
      .then(response => response.json())
      .then(data => setComments(data));
  }, [postId]);

  // Submit a new comment
  const handleCommentSubmit = () => {
    if (!token) {
      alert('You must be logged in to comment.');
      return;
    }

    fetch(`http://172.16.31.135:8000/api/posts/${postId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ content })
    }).then(() => {
      // Optionally re-fetch comments after adding a new comment
      fetch(`http://172.16.31.135:8000/api/posts/${postId}/comments`)
        .then(response => response.json())
        .then(data => setComments(data));
    });
  };

  return (
    <div className="comment-section" style={{ marginTop: '20px' }}>
      <h4>Comments</h4>
      {comments.map(comment => (
        <div key={comment.id} className="comment" style={commentStyle}>
          <strong>{comment.username}:</strong> {comment.content}
        </div>
      ))}
      {/* Comment input form */}
      {token && (
        <div className="comment-form" style={formStyle}>
          <Input 
            placeholder="Add a comment" 
            value={content} 
            onChange={e => setContent(e.target.value)} 
            style={inputStyle}
          />
          <Button onClick={handleCommentSubmit} style={buttonStyle}>Submit</Button>
        </div>
      )}
    </div>
  );
};

// Styles
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  width: '300px',
  marginBottom: '20px'
};

const postCardStyle = {
  border: '1px solid #ddd',
  padding: '15px',
  borderRadius: '8px',
  marginBottom: '20px',
  backgroundColor: '#f9f9f9'
};

const commentStyle = {
  padding: '8px',
  border: '1px solid #eee',
  borderRadius: '4px',
  marginTop: '10px',
  backgroundColor: '#fafafa'
};

const inputStyle = {
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  width: '100%'
};

const buttonStyle = {
  padding: '10px 15px',
  backgroundColor: '#4CAF50',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default Forum;