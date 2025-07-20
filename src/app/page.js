'use client'

import { useRouter } from 'next/navigation';
import React from 'react';

const HomePage = () => {
  const router = useRouter();
  const handelNavigate = () => {
    router.push('/dashboard')
  }
  return (
    <div>
      <h1 className="text-center">Home Page</h1>
      <h1 className="text-2xl">This is Home page</h1>


      <button onClick={handelNavigate}>Dashboard</button>

    </div>
  );
};

export default HomePage;