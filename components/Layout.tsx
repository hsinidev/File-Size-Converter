
import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
    onModalOpen: (modal: 'about' | 'contact' | 'guide' | 'privacy' | 'terms' | 'dmca') => void;
}

const GalaxyBackground: React.FC = () => {
    const stars = Array.from({ length: 150 }).map((_, i) => {
        const style = {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${3 + Math.random() * 5}s`,
            width: `${1 + Math.random() * 1.5}px`,
            height: `${1 + Math.random() * 1.5}px`,
        };
        return <div key={i} className="star" style={style}></div>;
    });

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-black">
            <style>{`
                @keyframes twinkle {
                    0%, 100% { opacity: 0; transform: scale(0.8); }
                    50% { opacity: 1; transform: scale(1); }
                }
                @keyframes drift {
                    0% { transform: translate(-10%, -10%); }
                    50% { transform: translate(10%, 10%); }
                    100% { transform: translate(-10%, -10%); }
                }
                .star {
                    position: absolute;
                    background-color: white;
                    border-radius: 50%;
                    animation: twinkle linear infinite;
                    box-shadow: 0 0 6px #fff, 0 0 10px #fff, 0 0 15px #60a5fa;
                }
                .nebula {
                    position: absolute;
                    width: 200%;
                    height: 200%;
                    top: -50%;
                    left: -50%;
                    background-image: radial-gradient(ellipse at center, rgba(168, 85, 247, 0.2) 0%, rgba(236, 72, 153, 0.1) 35%, rgba(0,0,0,0) 70%);
                    animation: drift 70s ease-in-out infinite;
                }
            `}</style>
            <div className="nebula"></div>
            {stars}
        </div>
    );
};

const Layout: React.FC<LayoutProps> = ({ children, onModalOpen }) => {
    const navLinks = [
        { name: 'Guide', modal: 'guide' as const },
        { name: 'About', modal: 'about' as const },
        { name: 'Contact', modal: 'contact' as const },
        { name: 'Privacy Policy', modal: 'privacy' as const },
        { name: 'Terms of Service', modal: 'terms' as const },
        { name: 'DMCA', modal: 'dmca' as const },
    ];
    
    return (
        <div className="relative min-h-screen font-sans text-white bg-gray-900/50">
            <GalaxyBackground />
            <header className="fixed top-0 left-0 right-0 z-10 p-4 bg-black/10 backdrop-blur-sm">
                 <nav className="container mx-auto flex justify-center items-center flex-wrap gap-x-6 gap-y-2">
                    {navLinks.map(link => (
                         <button
                            key={link.name}
                            onClick={() => onModalOpen(link.modal)}
                            className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                        >
                            {link.name}
                        </button>
                    ))}
                </nav>
            </header>
            
            <main className="pt-24 pb-20">
                {children}
            </main>

            <footer className="absolute bottom-0 left-0 right-0 p-4 text-center text-gray-400 text-sm">
                <div className="container mx-auto">
                    <p className="mb-1">
                        Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" style={{ color: '#FFD700' }} className="hover:underline">HSINI MOHAMED</a>
                    </p>
                    <p>
                        <a href="http://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:underline">doodax.com</a> | <a href="mailto:hsini.web@gmail.com" className="hover:underline">hsini.web@gmail.com</a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
