import { useState } from 'react';
function ImageManipulation(){
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const [height, setHeight] = useState(300);
    const [width, setWidth] = useState(200);
    const [imgRotate, setImgRotate] = useState(0);

    function handleHeight(){
        setHeight(Math.floor(Math.random() * 400) + 100);
    }
    
    function handleWidth(){
        setWidth(Math.floor(Math.random() * 400) + 100);
    }
    
    function changeColor(){
        setRed(Math.floor(Math.random() * 256));
        setGreen(Math.floor(Math.random() * 256));
        setBlue(Math.floor(Math.random() * 256));
    }

    function handleRotate(){
        setImgRotate(prev => (prev + 90) % 360);
    }

    const imageStyle = {
        height: `${height}px`,
        width: `${width}px`,
        transform: `rotate(${imgRotate}deg)`,
        transition: 'all 0.3s ease',
        display: 'block'
    };

    const wrapperStyle = {
        position: 'relative',
        display: 'inline-block'
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: `rgba(${red}, ${green}, ${blue}, 0.5)`,
        mixBlendMode: 'multiply',
        pointerEvents: 'none',
        transition: 'all 0.3s ease'
    };

    return(
        <div>
            <div style={wrapperStyle}>
                <img 
                    src="https://picsum.photos/200/300" 
                    alt="Image" 
                    style={imageStyle}
                />
                <div style={overlayStyle}></div>
            </div>
            <div style={{ marginTop: '10px' }}>
                <button onClick={handleHeight}>Change Height</button>
                <button onClick={handleWidth}>Change Width</button>
                <button onClick={changeColor}>Change Color</button>
                <button onClick={handleRotate}>Rotate</button>
            </div>
        </div>
    )
}

export default ImageManipulation;