import React from 'react'

export default function Nav() {
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '12px 16px', background: '#f5f7fb', borderBottom: '1px solid #e5e7eb'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '36px', height: '36px', borderRadius: '50%',
          background: '#61dafb', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 700
        }}>L</div>
        <span style={{ fontSize: '18px', fontWeight: 600 }}>Home</span>
      </div>
      <span style={{ fontSize: '14px', color: '#6b7280' }}>Welcome our Hotels</span>
    </nav>
  )
}


