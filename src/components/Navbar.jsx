import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('Atul');

    useEffect(() => {
        const storedName = localStorage.getItem('username');
        if (storedName) setUserName(storedName);
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        navigate('/signin');
    };

    return (
        <nav className="w-full h-15 flex items-center justify-around bg-transparent backdrop-blur-xs shadow-lg shadow-black/20 border-2  border-white/10 rounded-2xl">
        <div className="text-2xl font-bold tracking-wider text-white">TarotVerse</div>

        <div className="flex w-1/2 justify-between items-center gap-6">
            <span className="text-lg translate-x-120 text-white">Hello, {userName} 😊</span>
            <button
            onClick={handleLogout}
            className="bg-gradient-to-b from-amber-200 to-yellow-600 shadow-[0_2px_30px_rgba(255,_215,_0,_0.9)] w-20 h-10 rounded-3xl uppercase  px-5 py-4 active:scale-[0.97] hover:border-2 hover:border-amber-400"
            >
            Logout
            </button>
        </div>
        </nav>
    );
};

export default Navbar;
