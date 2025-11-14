
import React, { useState } from 'react';
import Layout from './components/Layout';
import FileSizeConverterTool from './components/FileSizeConverterTool';
import Modal from './components/Modal';
import SeoArticle from './components/SeoArticle';

type ModalType = 'about' | 'contact' | 'guide' | 'privacy' | 'terms' | 'dmca' | null;

const App: React.FC = () => {
    const [activeModal, setActiveModal] = useState<ModalType>(null);

    const openModal = (modal: ModalType) => setActiveModal(modal);
    const closeModal = () => setActiveModal(null);

    const getModalContent = () => {
        switch (activeModal) {
            case 'about':
                return (
                    <div>
                        <h3 className="text-lg font-semibold text-gray-100 mb-2">About File Size Converter</h3>
                        <p className="text-gray-300">This tool provides a simple and efficient way to convert between various units of digital information. Built with React, TypeScript, and Tailwind CSS, it offers both binary (1024-based) and decimal (1000-based) conversion standards to meet different needs, from software development to hardware specifications.</p>
                    </div>
                );
            case 'contact':
                return (
                    <div>
                        <h3 className="text-lg font-semibold text-gray-100 mb-2">Contact Us</h3>
                        <p className="text-gray-300">For inquiries, please contact us at:</p>
                        <p className="text-gold-400 mt-2"><a href="mailto:hsini.web@gmail.com" className="hover:underline">hsini.web@gmail.com</a></p>
                        <p className="text-gold-400"><a href="http://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:underline">doodax.com</a></p>
                    </div>
                );
            case 'guide':
                return <SeoArticle />;
            case 'privacy':
                return (
                     <div>
                        <h3 className="text-lg font-semibold text-gray-100 mb-2">Privacy Policy</h3>
                        <p className="text-gray-300">This application is a client-side tool. All calculations are performed within your browser. No data is collected, stored, or transmitted to any server. Your privacy is fully respected as we do not track any of your activities or inputs.</p>
                    </div>
                );
            case 'terms':
                return (
                    <div>
                        <h3 className="text-lg font-semibold text-gray-100 mb-2">Terms of Service</h3>
                        <p className="text-gray-300">This File Size Converter is provided "as is" for informational purposes only. The developer makes no warranties regarding the accuracy of the conversions and shall not be liable for any damages resulting from its use. By using this tool, you agree to these terms.</p>
                    </div>
                );
            case 'dmca':
                return (
                     <div>
                        <h3 className="text-lg font-semibold text-gray-100 mb-2">DMCA</h3>
                        <p className="text-gray-300">All content and code are original. If you believe any material on this site infringes upon your copyright, please contact us with a valid DMCA complaint, and we will address the issue promptly.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    const getModalTitle = () => {
        switch(activeModal) {
            case 'about': return 'About';
            case 'contact': return 'Contact';
            case 'guide': return 'Guide to Digital Storage Units';
            case 'privacy': return 'Privacy Policy';
            case 'terms': return 'Terms of Service';
            case 'dmca': return 'DMCA Policy';
            default: return '';
        }
    }

    return (
        <Layout onModalOpen={openModal}>
            <div className="flex justify-center items-center min-h-screen p-4">
                <FileSizeConverterTool />
            </div>
            <Modal isOpen={activeModal !== null} onClose={closeModal} title={getModalTitle()}>
                {getModalContent()}
            </Modal>
        </Layout>
    );
};

export default App;
