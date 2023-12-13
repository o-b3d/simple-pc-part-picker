import { collection, getDocs } from 'firebase/firestore'
import { PartSelector } from '../components/PartSelector'
import { partSelectors } from '../utils/partSelectors'
import { db } from '../utils/firebase'
import { useEffect, useState } from 'react'

const PCBuilder = () => {
    
    const [builds, setBuilds] = useState();

    useEffect(() => {
        const buildReference = collection(db, 'user_builds')
        const getData = async () => {
            const data = await getDocs(buildReference)
            const builds = data.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            setBuilds(builds)
        }
        getData()
    }, [])

    return (
        <div className="overflow-x-auto bg-base-100">
            <ul className="flex flex-col">
                {partSelectors.map((selector) => (
                    <li key={selector.name} className="hover:bg-slate-200 border-y p-2">
                        <PartSelector selector={selector} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PCBuilder
