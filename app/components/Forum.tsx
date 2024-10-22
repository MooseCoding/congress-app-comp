import { useState, useEffect } from 'react';
import { Input } from './ui/input'; // Using ShadCN components
import { Button } from './ui/Button'; 

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token') || "");

  // Load users and posts from local JSON
  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await fetch('./users.json');
        const postsResponse = await fetch('./posts.json');
        
        if (!usersResponse.ok || !postsResponse.ok) {
          throw new Error('Network response was not ok');
        }

        const usersData = await usersResponse.json();
        const postsData = await postsResponse.json();

        setUsers(usersData);
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Submit a new post
  const handlePostSubmit = (title, content) => {
    if (!token) {
      alert('You must be logged in to create a post.');
      return;
    }

    const newPost = {
      id: posts.length + 1, // Simple ID generation
      title,
      content,
      username: token // Assuming token contains username
    };

    // Update posts state and reset local JSON (in a real app, you'd save this)
    setPosts(prevPosts => [...prevPosts, newPost]);
    alert('Post created successfully!');
  };

  return (
    <div className="forum-container" style={{ padding: '20px' }}>
      {/* Sign-on/Sign-up form */}
      <div className="auth-section flex flex-col items-center" style={{ marginBottom: '20px' }}>
        <SignOnSignUpForm setToken={setToken} users={users} />
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
            <CommentSection postId={post.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Sign-on/Sign-up form component
const SignOnSignUpForm = ({ setToken, users }) => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Sign-in and Sign-up
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // State for success message

  // Handle Sign-In
  const handleSignIn = () => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem('token', user.username);
      setToken(user.username);
      setMessage(`Welcome back, ${username}! You are now signed in.`);
    } else {
      setMessage("Sign-in failed, please try again.");
    }
  };

  // Handle Sign-Up
  const handleSignUp = () => {
    const userExists = users.some(u => u.username === username);
    if (userExists) {
      setMessage("Username already taken.");
      return;
    }

    const newUser = {
      id: users.length + 1, // Simple ID generation
      username,
      password
    };

    // Update users state and reset local JSON (in a real app, you'd save this)
    users.push(newUser);
    localStorage.setItem('token', newUser.username);
    setToken(newUser.username);
    setMessage(`Welcome, ${username}! You are now signed up.`);
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
const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]); // Simulating comments with local data
  const [content, setContent] = useState("");

  // Load comments for the post (you can also add a comments.json if needed)
  useEffect(() => {
    // For simplicity, you can define comments directly or pull from a comments JSON file.
    const postComments = [
      { id: 1, postId: 1, username: 'Gerald1221', content: 'I\'m on my way to help you out!' },
    ];

    setComments(postComments.filter(comment => comment.postId === postId));
  }, [postId]);

  // Submit a new comment
  const handleCommentSubmit = () => {
    const newComment = {
      id: comments.length + 1, // Simple ID generation
      postId,
      username: 'user1', // Hardcoded username for demo purposes, should be dynamic
      content
    };

    // Update comments state (in a real app, you'd save this)
    setComments(prevComments => [...prevComments, newComment]);
    setContent(""); // Reset input
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
      <div className="comment-form" style={formStyle}>
      <Input
          placeholder="Add a comment..."
          value={content}
          onChange={e => setContent(e.target.value)}
          style={inputStyle}
        />
        <Button onClick={handleCommentSubmit} style={buttonStyle}>
          Submit Comment
        </Button>
      </div>
    </div>
  );
};

// Styles (you can customize these as needed)
const formStyle = {
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  margin: '10px 0'
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  margin: '5px 0',
  border: '1px solid #ccc',
  borderRadius: '4px'
};

const buttonStyle = {
  backgroundColor: '#28a745',
  color: 'white',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

const postCardStyle = {
  border: '1px solid #ccc',
  padding: '15px',
  borderRadius: '5px',
  margin: '10px 0',
};

const commentStyle = {
  border: '1px solid #eee',
  padding: '8px',
  borderRadius: '4px',
  margin: '5px 0'
};

export default Forum;