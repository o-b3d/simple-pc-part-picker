import './App.css'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'

function Private() {
    return (
        <>
            <Navbar />
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">You Logged In!</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Private
