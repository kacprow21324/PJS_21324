import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import RegisterPanel from './components/RegisterPanel';
import NewPostForm from './components/NewPostForm';
import PostList from './components/PostList';

const STORAGE_KEY = 'redditBlogData';

export default function App() {
  const [users, setUsers] = useState({
    Admin: 'Admin123',
    Testownik: 'Testownik123'
  });
  const [currentUser, setCurrentUser] = useState(null);
  const [posts, setPosts] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  const handleLogin = ({ user, pass }) => {
    if (users[user] === pass) {
      setCurrentUser(user);
    } else {
      alert('Niepoprawne dane logowania');
    }
  };

  const handleRegister = ({ username, password }) => {
    if (users[username]) {
      alert('Taki użytkownik już istnieje');
      return;
    }
    setUsers(prev => ({ ...prev, [username]: password }));
    alert(`Użytkownik ${username} został zarejestrowany`);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  const addPost = ({ title, text }) => {
    const newPost = {
      id: Date.now(),
      user: currentUser,
      title,
      text,
      score: 0,
      upvotes: [],
      downvotes: [],
      replies: []
    };
    setPosts(prev => [newPost, ...prev]);
  };

  const deletePost = postId => {
    setPosts(prev => prev.filter(p => p.id !== postId));
  };

  const votePost = (postId, type) => {
    setPosts(prev =>
      prev.map(p => {
        if (p.id !== postId) return p;
        const up = p.upvotes.filter(u => u !== currentUser);
        const down = p.downvotes.filter(u => u !== currentUser);
        if (type === 'up') up.push(currentUser);
        if (type === 'down') down.push(currentUser);
        return { ...p, upvotes: up, downvotes: down, score: up.length - down.length };
      })
    );
  };

  const voteReply = (postId, replyId, type) => {
    setPosts(prev =>
      prev.map(p => {
        if (p.id !== postId) return p;
        const replies = p.replies.map(r => {
          if (r.id !== replyId) return r;
          const up = r.upvotes.filter(u => u !== currentUser);
          const down = r.downvotes.filter(u => u !== currentUser);
          if (type === 'up') up.push(currentUser);
          if (type === 'down') down.push(currentUser);
          return { ...r, upvotes: up, downvotes: down, score: up.length - down.length };
        });
        return { ...p, replies };
      })
    );
  };

  const addReply = (postId, parentId, text) => {
    setPosts(prev =>
      prev.map(p => {
        if (p.id !== postId) return p;
        const reply = {
          id: Date.now(),
          user: currentUser,
          text,
          parentId,
          upvotes: [],
          downvotes: [],
          score: 0
        };
        return { ...p, replies: [...p.replies, reply] };
      })
    );
  };

  return (
    <div className="App">
      {!currentUser ? (
        <div className="auth-container">
          <h1 className="blog-title">Wypasiony Blog</h1>
          <div className="auth-panels">
            <Login onLogin={handleLogin} />
            <RegisterPanel onRegister={handleRegister} />
          </div>
        </div>
      ) : (
        <div className="container">
          <header>
            <h1>Witaj, {currentUser}</h1>
            <button className="btn logout" onClick={handleLogout}>
              Wyloguj
            </button>
          </header>
          <NewPostForm onPost={addPost} />
          <PostList
            posts={posts}
            user={currentUser}
            onVote={votePost}
            onVoteReply={voteReply}
            onReply={addReply}
            onDelete={deletePost}
          />
        </div>
      )}
    </div>
  );
}
