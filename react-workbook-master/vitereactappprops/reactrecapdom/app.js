const parent=document.getElementById("parent");
console.log(parent);
const root=ReactDOM.createRoot(parent);
const h2=React.createElement("h2",{style:{color:"blue",fontSize:"24px"} },"welome to react DOM");
root.render(h2);
const h21=<h2>using jsx</h2>;
const card = (
    <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '15px',
        width: '300px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
        <img 
            src="https://imgs.search.brave.com/rXWKC3cg1Mdt0Bn2hbfwLHzu4cJX1QV-JJMZcXCWGM4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGVjaGFkdmlz/b3IuY29tL2Ntc2Rh/dGEvcmV2aWV3cy8z/NjExNzcxL0JsYWNr/QmVycnlfQ2xhc3Np/Y19zaWRlX29uLmpw/Zz9xdWFsaXR5PTUw/JnN0cmlwPWFsbA"  
            alt="Smartphone"
            style={{ width: '100%', borderRadius: '4px' }}
        />
        <h3>iPhone 14 Pro</h3>
        <p>Model: IP14-256GB</p>
        <p>Price: $999</p>
        <p>High-end smartphone with advanced camera system and powerful A16 chip.</p>
        <button style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '8px 16px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
        }}>
            Add to Cart
        </button>
    </div>
);

root.render(card);