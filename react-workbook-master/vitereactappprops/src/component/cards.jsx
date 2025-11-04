import React, { useState } from 'react'

function CardItem({ title, price }) {
  const [quantity, setQuantity] = useState(0)

  const decrement = () => setQuantity(q => Math.max(0, q - 1))
  const increment = () => setQuantity(q => q + 1)

  return (
    <div style={{
      border: '1px solid #e5e7eb', borderRadius: '10px', padding: '14px', width: '220px',
      background: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'
    }}>
      <div style={{
        width: '100%', height: '120px', borderRadius: '8px', background: '#f3f4f6',
        display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af'
      }}>
        {title} image
      </div>
      <div style={{ fontWeight: 600 }}>{title}</div>
      <div style={{ color: '#374151' }}>₹{price}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button onClick={decrement} style={btnStyle}>−</button>
        <span style={{ minWidth: '24px', textAlign: 'center' }}>{quantity}</span>
        <button onClick={increment} style={btnStyle}>+</button>
      </div>
    </div>
  )
}

const btnStyle = {
  width: '36px', height: '32px', borderRadius: '6px', border: '1px solid #e5e7eb',
  background: '#f9fafb', cursor: 'pointer'
}

export default function Cards() {
  return (
    <section style={{ padding: '24px 16px' }}>
      <h3 style={{ margin: 0, marginBottom: '16px' }}>Our menu</h3>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <CardItem title="Pizza" price={199} />
        <CardItem title="Burger" price={149} />
        <CardItem title="Coke" price={49} />
      </div>
    </section>
  )
}


