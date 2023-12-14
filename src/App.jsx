import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import { useState } from 'react';
import { PickedPartContext } from './components/PickedPartContext';

export default function App() {
    const [selectedPart, setSelectedPart] = useState(null);

    return (
        <PickedPartContext.Provider value={{ selectedPart, setSelectedPart }}>
                <Navbar />
                <Outlet />
                <Footer />
        </PickedPartContext.Provider>
    )
}

// const handleGPUAdded = (gpu) => {};
