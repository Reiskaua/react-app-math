import React from 'react';
import './styles.css';

function MainSection(){
    return (
        <div className="main-container">
            <div className="main-data-container">
                <h1>xMath API</h1>
                <p>A API fornece a capacidade de obter uma expressão aleatória com operações matemáticas, como adição, subtração, multiplicação ou divisão. Você obtém um objeto que contém dois números, um sinal de operação e o resultado de uma expressão.</p>
                <a href="https://x-math.herokuapp.com/">Veja mais</a>
            </div>
            <img
                src="https://pt-static.z-dn.net/files/d54/83a50f7db589a45d7f6a7f4a39e727af.jpg"
                alt="Quadro negro com fórmulas"
            />            
        </div>
    );
}

export default MainSection;