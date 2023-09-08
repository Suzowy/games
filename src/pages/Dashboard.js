import React from 'react';

const Dashboard = () => {
    const imageStyles = {
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '60vh',
    };

    return (
        <div>
            <img src="https://img.freepik.com/vector-gratis/fondo-pantalla-neon-colorido-proximamente_23-2148881800.jpg" alt="Descripción de la imagen" style={imageStyles} />
        </div>
    );
}

export default Dashboard;