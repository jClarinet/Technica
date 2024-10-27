'use client';
import React, { useState } from 'react';
import '../styles/globals.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className='flex align-items justify-center text-3xl m-20 text-bluegrotto'>Streak: {count}</h1>
      <div className='flex align-items justify-center' >
        <button className='text-3xl text-bluegrotto m-10 bg-navy rounded-md p-5' onClick={() => setCount(count + 1)}>+</button>
        <button className='text-3xl text-bluegrotto m-10 bg-navy rounded-md p-5' onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
}