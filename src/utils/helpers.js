import { addDoc, doc, getDoc } from 'firebase/firestore'
import { db } from './firebase'

export const addPartToBuild = (part) => {
    alert(`Added ${part.name} to Build!`)
}

export const createBuild = async (buildID, userID) => {
    const docRef = doc(db, 'user_builds', buildID)

    await addDoc(docRef, {
        parts: [
            {
                cpu: {
                    name: 'AMD Ryzen 7 7800X3D',
                    price: 389,
                    core_count: 8,
                    core_clock: 4.2,
                    boost_clock: 5,
                    tdp: 120,
                    graphics: 'Radeon',
                    smt: true,
                },
            },
            {
                gpu: {
                    name: 'Gigabyte RTX 4090 24GB Gaming OC',
                    price: 2499,
                    image: 'https://m.media-amazon.com/images/I/711vU2IrEuL.jpg',
                },
            },

            {
                motherboard: {
                    name: 'ASUS ROG Strix X570-E Gaming ATX',
                    price: 299,
                    socket: 'AM4',
                    form_factor: 'ATX',
                    memory_max: 128,
                    memory_slots: 4,
                    memory_type: 'DDR4',
                    chipset: 'AMD X570',
                    sli_crossfire: true,
                },
            },
            {
                ram: {
                    name: '16GB DDR4 3200MHz',
                    price: 99,
                    boost_clock: 3200,
                },
            },
        ],
        user_id: userID,
    })
    return docRef.id
}

export const buildLoader = async ({ params }) => {
    console.log(params)
    const docRef = doc(db, 'user_builds', params.buildId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        return []
    }
}
