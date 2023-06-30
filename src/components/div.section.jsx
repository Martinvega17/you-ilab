import React from 'react';

const Div_section = () => {
    return (
        <div className="text-white div_container" style={{  display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <div className="container-fluid bg-div-azul h-[60px] -mt-8 flex items-center justify-between">
                <small className="ml-5">© 2023 Youth Innovation Laboratory. All rights reserved</small>
                <div className="flex gap-5 mr-5">
                    <small>Privacy Policy</small>
                    <small>Terms & Conditions</small>
                </div>
            </div>
        </div>
    );
};

export default Div_section;
