import { doc, setDoc } from "firebase/firestore"
import { db } from "./firebase"

export const addPartToBuild = (part) => {
    alert(`Added ${part.name} to Build!`)
}

export const createBuild = async (buildID, userID) => {
    const build = await setDoc(doc(db, 'user_builds', buildID), {
        parts: {
            name: 'Intel Core i7-13700K',
            price: 364.99,
            core_count: 16,
            core_clock: 3.4,
            boost_clock: 5.4,
            tdp: 125,
            graphics: 'Intel UHD Graphics 770',
            smt: true,
        },
        user_id: userID
    })
    console.log(build)
}