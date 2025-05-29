import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = (e) => {
        e.preventDefault();
        // Mock check
        if(email === 'user@example.com' && password === '123456'){
        localStorage.setItem('auth', 'true');  // simple login flag
        navigate('/dashboard');
        } else {
        alert('Invalid Credentials');
        }
    }

    return (
        <div className='relative w-full h-screen overflow-hidden'>
            <img className=' absolute left-0 top-0 z-0 w-full h-screen' src="./bg.png" alt="" />
            <div className='absolute top-0 left-0 z-10 w-full h-screen flex flex-col justify-center items-center'>
                <div className='w-1/2 h-2/3 px-44 flex items-center justify-center bg-transparent backdrop-blur-2xl shadow-lg shadow-black/20  border-white/10 rounded-2xl'>
                    <form onSubmit={handleLogin} className="signIn w-120 h-100 p-10 flex flex-col justify-center items-center gap-10 ">
                    <input
                    type="email"
                    placeholder="Email"
                    className="px-8 py-2 w-full h-15 rounded-xl text-white text-xl border-1 border-amber-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                    <input
                    type="password"
                    placeholder="Password"
                    className="px-8 py-2 w-full h-15 rounded-xl text-white text-xl border-1 border-amber-400"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                    <button className="bg-gradient-to-b from-amber-200 to-yellow-600 shadow-[0_2px_30px_rgba(255,_215,_0,_0.9)] w-30 h-10 rounded-3xl uppercase  px-5 py-4 active:scale-[0.97] hover:border-2 hover:border-amber-400">
                    Sign In
                    </button>
                    <p className="text-sm">
                    Don't have an account? <Link to="/signup" className="underline">Sign Up</Link>
                    </p>
                </form>
                </div>
                
            </div>
            <img className='absolute bottom-0 left-0 w-full ' src="./table.jpg" alt="" />        
        </div>
  )
}

export default Signin;
