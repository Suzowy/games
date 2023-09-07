import React from 'react';

const Dashboard = () => {
    const imageStyles = {
        width: '100%',
        height: '100vh',
        objectFit: 'contain',
        position: 'fixed',
        top: '70%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: -1,
    };

    return (
        <div>
            <img src="https://img.freepik.com/vector-gratis/fondo-pantalla-neon-colorido-proximamente_23-2148881800.jpg" alt="Descripción de la imagen" style={imageStyles} />
        </div>
    );
}

export default Dashboard;