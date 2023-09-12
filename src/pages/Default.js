import React from 'react';

const Default = () => {
    const imageStyles = {
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '60vh',
        borderRadius: '50%',
        marginBottom: '50px',
    };

    return (
        <div>
            <img src="https://img.freepik.com/premium-vector/oops-neon-signs-style-text_118419-2285.jpg" alt="Descripción de la imagen" style={imageStyles} />
        </div>
    );
}

export default Default;