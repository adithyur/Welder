import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import LoadingComponent from './components/LoadingComponent';
import 'tailwindcss/tailwind.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
}, []);

if (isLoading) {
    return <LoadingComponent />;
}

  return (
    <div className="App">
      {isLoading ? <LoadingComponent /> : <Home/>}
    </div>
  );
}

export default App;
