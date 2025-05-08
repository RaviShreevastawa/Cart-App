import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
    navigate('/');
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4 p-4 max-w-md mx-auto">
      <input
        className="border px-3 py-2 w-full"
        type="text"
        name='email'
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="border px-3 py-2 w-full"
        type="password"
        placeholder="Password"
        name='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
        Login
      </button>
    </form>
  );
}
