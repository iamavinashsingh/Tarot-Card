import React, { useEffect, useState , useRef, use } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import gsap from 'gsap';
import Sparkle from './Sparkle';

const Dashboard = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('Atul');
    const [selectedCard, setSelectedCard] = useState(null);

    const bgRef = useRef(null);
    const h1Ref = useRef(null);
    const modRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power1.out", duration: 1 } });  
        tl.from(bgRef.current, { opacity: 0 })                  
        .from(h1Ref.current, { y: -50, opacity: 0 }, "-=0.3")  
        .from(modRef.current, { scale: 0.8, opacity: 0 }, "-=0.2") 
        .from(gridRef.current, { y: 50, opacity: 0 }, "-=0.4")
    }, []);
    
    useEffect(() => {
    if (!localStorage.getItem('auth')) {
    navigate('/signin');
    }
    const storedName = localStorage.getItem('username');
    if (storedName) setUserName(storedName);
    }, [navigate]);
    
    const tarotCards = [
    { name: "The Fool", meaning: "New beginnings, optimism, trust in life." },
    { name: "The Magician", meaning: "Action, the power to manifest." },
    { name: "The High Priestess", meaning: "Intuition, mystery, spiritual insight." },
    { name: "The Lovers", meaning: "Love, harmony, relationships." },
    { name: "The Tower", meaning: "Sudden upheaval, chaos, revelation." },
    { name: "The Star", meaning: "Hope, inspiration, serenity." },
    { name: "Death", meaning: "Endings, transformation, letting go." },
    { name: "The Empress", meaning: "Abundance, femininity, nature." }
    ];

  
    const drawRandomCard = () => {
    const random = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    console.log("You drew: ", random); 
    setSelectedCard(random);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden text-white font-sans">
            <Sparkle />
            <img ref={bgRef} className="absolute left-0 top-0 z-0 w-full h-screen object-cover" src="./bg.png" alt="Background Image" />
            <div className="absolute top-0 left-0 z-10 w-full h-screen backdrop-blur-sm bg-black/30">
                <Navbar />
                <div className='w-full h-full flex flex-col items-center justify-start pt-20'> 
                    <div className="flex flex-col gap-20 justify-start items-center mt-20 px-4">
                        <h1 ref={h1Ref} className="text-3xl translate-y-10 font-bold mb-6">Welcome back, {userName} ✨</h1>
                        <div ref={modRef}  className="w-full mb-20 h-80 flex flex-col justify-center items-center bg-black/50 p-6 rounded-xl shadow-[0_0_20px_gold]">
                            <h2 className="text-xl font-semibold mb-4 text-yellow-300">Tarot Module</h2>
                            {selectedCard ? (<p className="text-yellow-200 text-2xl"> Your reading: <strong>{selectedCard.name}</strong> - {selectedCard.meaning}</p>) :
                            (<p className="text-gray-400 italic">Click "Draw Cards" to reveal your tarot ✨</p>)}
                        </div>
                        <div ref={gridRef} className="mt-8 w-200 max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                            <div onClick={drawRandomCard} className="bg-black/60 h-35 flex flex-col justify-center items-center hover:bg-yellow-700 transition-all p-4 rounded-lg shadow-lg cursor-pointer">
                            <h3 className="text-lg font-semibold text-yellow-200">🔮 Draw Cards</h3>
                            <p className="text-sm text-gray-300">Click me & Reveal your destiny</p>
                            </div>
                            <div className="bg-black/60 h-35 flex flex-col gap-2 justify-center items-center hover:bg-yellow-700 transition-all p-4 rounded-lg shadow-lg cursor-pointer">
                            <h3 className="text-lg font-semibold text-yellow-200">📜 Previous Readings</h3>
                            <p className="text-sm text-gray-300">See your past spreads</p>
                            <div className='flex gap-4 justify-center items-center mt-4'>
                                <img className='w-10 h-15 hover:border-2 hover:border-amber-400' src="https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/0.jpg" alt="" />
                                <img className='w-10 h-15 hover:border-2 hover:border-amber-400' src="https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/1.jpg" alt="" />
                                <img className='w-10 h-15 hover:border-2 hover:border-amber-400' src="https://gfx.tarot.com/images/site/decks/universal-waite/mid_size/5.jpg" alt="" />
                            </div>
                            </div>
                            <div  onClick={() => window.location.href = 'https://labyrinthos.co/blogs/tarot-card-meanings-list'} className="bg-black/60 h-35 flex flex-col justify-center items-center hover:bg-yellow-700 transition-all p-4 rounded-lg shadow-lg cursor-pointer">
                            <h3 className="text-lg font-semibold text-yellow-200">📖 About Tarot</h3>
                            <p className="text-sm text-gray-300">Learn the magic</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

