import React from 'react';

const Default = () => {
    const imageStyles = {
        backgroundImage: 'url("https://t3.ftcdn.net/jpg/02/78/91/74/360_F_278917446_WBT0ERUXdgltzvCSHIaWPZCPWoFAk1w7.jpg")',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '70vh',
        
           animation: 'fadeInOut 5s linear 1 forwards',
        opacity: '0',
    };

    return (
        <div style={imageStyles}>
        </div>
    );
}

export default Default;