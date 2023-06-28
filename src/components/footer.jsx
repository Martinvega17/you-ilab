import React from 'react';

const Footer = () => {
    return (
        <footer id="sticky-footer" className="flex-shrink-0 py-4 bg-dark-900 text-white">
            <div className="container-fluid text-center bg-azul-footer">
                <div className="grid grid-cols-3 gap-4 ml-5 mr-5">
                    <div className="col-span-1">
                        <h3 className="text-lg font-bold">YOUTH INNOVATION LABORATORY</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor faucibus mi, ut fermentum neque ultricies vitae. Ut eu tellus at purus scelerisque eleifend.</p>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-lg font-bold">USEFUL LINKS</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor faucibus mi, ut fermentum neque ultricies vitae. Ut eu tellus at purus scelerisque eleifend.</p>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-lg font-bold">CONTACT</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor faucibus mi, ut fermentum neque ultricies vitae. Ut eu tellus at purus scelerisque eleifend.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
