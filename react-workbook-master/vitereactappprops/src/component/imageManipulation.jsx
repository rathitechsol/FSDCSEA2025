import React, { useState } from "react";
const cat = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=600&auto=format&fit=crop';

function ImageManipulation() {
    const [imageWidth, setImageWidth] = useState(200);
    const [imageHeight, setImageHeight] = useState(200);
    const [rotation, setRotation] = useState(0);
    const [opacity, setOpacity] = useState(1);
    const [borderRadius, setBorderRadius] = useState(0);

    const resetImage = () => {
        setImageWidth(200);
        setImageHeight(200);
        setRotation(0);
        setOpacity(1);
        setBorderRadius(0);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Image Manipulation in React</h2>
            
            {/* Controls */}
            <div style={{ marginBottom: '20px', display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                <div>
                    <label>Width: {imageWidth}px</label>
                    <input 
                        type="range" 
                        min="50" 
                        max="400" 
                        value={imageWidth}
                        onChange={(e) => setImageWidth(Number(e.target.value))}
                    />
                </div>
                
                <div>
                    <label>Height: {imageHeight}px</label>
                    <input 
                        type="range" 
                        min="50" 
                        max="400" 
                        value={imageHeight}
                        onChange={(e) => setImageHeight(Number(e.target.value))}
                    />
                </div>
                
                <div>
                    <label>Rotation: {rotation}°</label>
                    <input 
                        type="range" 
                        min="0" 
                        max="360" 
                        value={rotation}
                        onChange={(e) => setRotation(Number(e.target.value))}
                    />
                </div>
                
                <div>
                    <label>Opacity: {opacity}</label>
                    <input 
                        type="range" 
                        min="0.1" 
                        max="1" 
                        step="0.1"
                        value={opacity}
                        onChange={(e) => setOpacity(Number(e.target.value))}
                    />
                </div>
                
                <div>
                    <label>Border Radius: {borderRadius}px</label>
                    <input 
                        type="range" 
                        min="0" 
                        max="50" 
                        value={borderRadius}
                        onChange={(e) => setBorderRadius(Number(e.target.value))}
                    />
                </div>
                
                <button 
                    onClick={resetImage}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Reset
                </button>
            </div>

            {/* Image Display */}
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <img 
                    src={cat} 
                    alt="Cute Cat"
                    style={{ 
                        width: imageWidth,
                        height: imageHeight,
                        objectFit: 'cover',
                        transform: `rotate(${rotation}deg)`,
                        opacity: opacity,
                        borderRadius: borderRadius,
                        transition: 'all 0.3s ease',
                        border: '2px solid #ddd',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}
                />
            </div>
        </div>
    )
}

export default ImageManipulation