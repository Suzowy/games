import React from 'react';

const Default = () => {
    const imageStyles = {
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '50vh',
        marginBottom: '50px',
    };

    return (
        <div>
            <img src="https://t3.ftcdn.net/jpg/02/78/91/74/360_F_278917446_WBT0ERUXdgltzvCSHIaWPZCPWoFAk1w7.jpg" alt="comming soon" style={imageStyles} />
        </div>
    );
}

export default Default;