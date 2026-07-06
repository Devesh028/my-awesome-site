import { useState } from 'react';
import './App.css';

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [isPopping, setIsPopping] = useState(false);

  const handleClick = () => {
    setClickCount(clickCount + 1);
    setIsPopping(true);
    // Reset the pop animation after 300ms
    setTimeout(() => setIsPopping(false), 300);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#0f172a',
      fontFamily: 'sans-serif',
      color: '#fff'
    }}>
      <h1 style={{ marginBottom: '20px' }}>My Interactive Site</h1>
      
      <button 
        onClick={handleClick}
        className={`magic-button ${isPopping ? 'pop' : ''}`}
      >
        Click Me! ✨
      </button>

      <p style={{ marginTop: '20px', fontSize: '1.2rem', color: '#94a3b8' }}>
        Button Clicks: <span style={{ color: '#38bdf8', fontWeight: 'bold' }}>{clickCount}</span>
      </p>
    </div>
  );
}

export default App;