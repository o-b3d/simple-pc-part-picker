import { useNavigate } from 'react-router-dom'
import HeroLightPage from '../public/HeroLightPage.png'

export default function Home() {
    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate('/pcbuild')
    }

    return (
        <div
            className="hero min-h-[74.8vh]"
            style={{
                backgroundImage: `url(${HeroLightPage})`,
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">
                        Pick Parts Simpler. Build Your PC Easier.
                    </h1>
                    <p className="mb-5"> Welcome to your Simple PC Part Picker!</p>
                    <button className="btn btn-primary" onClick={handleButtonClick}>
                        Start Your Build
                    </button>
                </div>
            </div>
        </div>
    )
}
