import { useDispatch } from 'react-redux';
import { register } from '../redux/slices/authSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ fullname : '', username: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
    navigate('/login');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto">
      <input
        className="border px-3 py-2 w-full"
        type="text"
        name='fullname'
        placeholder="Fullname"
        onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
      />
      <input
        className="border px-3 py-2 w-full"
        type="text"
        name='email'
        placeholder="Username"
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        className="border px-3 py-2 w-full"
        type="password"
        name='password'
        placeholder="Password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded" type="submit">
        Register
      </button>
    </form>
  );
}
