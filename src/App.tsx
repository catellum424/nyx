import React, { useState } from 'react';
import { plans } from './plans';

function App() {
  return (
    <div style={{ backgroundColor: '#0d0d1f', color: 'white', minHeight: '100vh', padding: '2rem' }}>
      <h1>Nyx Guard – Scegli il tuo piano</h1>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {plans.map(plan => (
          <div key={plan.id} style={{ background: '#1a1a2e', borderRadius: '12px', padding: '1.5rem', width: '300px' }}>
            <h2>{plan.name}</h2>
            <p>€{plan.price}</p>
            <ul>
              {plan.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <a href={plan.stripeLink} target="_blank">
              <button style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>Abbonati</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;