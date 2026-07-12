import { useState } from 'react';
import { supabase } from './supabaseClient';

function AuthPanel() {
  const [mode, setMode] = useState('login');
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (message.text) {
      setMessage({ type: '', text: '' });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    const { error } =
      mode === 'login'
        ? await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
          })
        : await supabase.auth.signUp({
            email: formData.email,
            password: formData.password,
          });

    if (error) {
      setMessage({ type: 'error', text: error.message });
    } else {
      setMessage({
        type: 'success',
        text:
          mode === 'login'
            ? 'Welcome back — you are signed in.'
            : 'Account created. Please check your inbox to confirm your email.',
      });

      if (mode === 'signup') {
        setFormData({ email: '', password: '' });
      }
    }

    setLoading(false);
  };

  return (
    <section className="auth-card" aria-label="Authentication panel">
      <div className="auth-header">
        <p className="eyebrow eyebrow-inline">Member access</p>
        <div className="auth-tabs" role="tablist" aria-label="Authentication mode">
          <button
            type="button"
            className={mode === 'login' ? 'tab active' : 'tab'}
            onClick={() => {
              setMode('login');
              setMessage({ type: '', text: '' });
            }}
          >
            Log in
          </button>
          <button
            type="button"
            className={mode === 'signup' ? 'tab active' : 'tab'}
            onClick={() => {
              setMode('signup');
              setMessage({ type: '', text: '' });
            }}
          >
            Sign up
          </button>
        </div>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <label className="form-field">
          <span>Email</span>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </label>

        <label className="form-field">
          <span>Password</span>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="At least 6 characters"
            minLength="6"
            required
          />
        </label>

        <button type="submit" className="btn auth-submit" disabled={loading}>
          {loading ? 'Working…' : mode === 'login' ? 'Log in' : 'Create account'}
        </button>
      </form>

      {message.text ? <p className={`auth-message ${message.type}`}>{message.text}</p> : null}
    </section>
  );
}

export default AuthPanel;
