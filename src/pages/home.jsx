import { useNavigate } from 'react-router-dom'
import HeroLightPage from '../public/HeroLightPage.png'
import { uid } from 'uid'
import { useEffect, useState } from 'react'
// import { doc, setDoc } from 'firebase/firestore'
// import { db } from '../utils/firebase'
// import { createBuild } from '../utils/helpers'
import { useContext } from 'react'
import { AuthContext } from '../utils/context/auth-context'

export default function Home() {
    const { currentUser } =  useContext(AuthContext)
    const navigate = useNavigate()

    const handleButtonClick = async () => {
        navigate(`/build/${uid(16)}/${currentUser ? currentUser.id : ''}`)
    }

    const [userID, setUserID] = useState()
    useEffect(() => {
        setUserID(uid(16))
    }, [])

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
                    <button className="btn btn-primary" onClick={() => handleButtonClick(userID)}>
                        Start Your Build
                    </button>
                </div>
            </div>
        </div>
    )
}