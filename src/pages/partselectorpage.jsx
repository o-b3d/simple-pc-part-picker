import { useLoaderData, useParams } from 'react-router-dom'
import { PartList } from '../components/PartList'
import { addPartToBuild } from '../utils/helpers'
import { useContext } from 'react'
import { AuthContext } from '../utils/context/auth-context'

export function PartsPage() {
    //The below varible gets the user's data (e.g. email, name)
    const { currentUser } = useContext(AuthContext)

    const { partType } = useParams()
    const parts = useLoaderData(partType)
    return (
        <>
            <PartList parts={parts}/>
        </>
    )
}