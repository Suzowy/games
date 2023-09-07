import React from 'react';

const Default = () => {
    const imageStyles = {
        width: '100%',
        height: '100vh',
        objectFit: 'cover',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
    };

    return (
        <div>
            <img src="https://img.freepik.com/premium-vector/oops-neon-signs-style-text_118419-2285.jpg" alt="Descripción de la imagen" style={imageStyles} />
        </div>
    );
}

export default Default;