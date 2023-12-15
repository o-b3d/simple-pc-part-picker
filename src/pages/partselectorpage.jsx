import { useLoaderData, useParams } from 'react-router-dom'
import { PartList } from '../components/PartList'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { selectPart, slectPartFrom } from '../utils/buildSlice'
import { useNavigate } from 'react-router-dom'

export function PartsPage() {
    const navigate = useNavigate()

    const { partType, buildId } = useParams()
    const {parts, type} = useLoaderData(partType)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(slectPartFrom(parts))
    }, [dispatch, parts])

    return (
        <>
            <PartList
                action={(part, type) => {
                    dispatch(selectPart({part, type}))
                    navigate(`/build/${buildId}`)
                }}
                partType={type}
            />
        </>
    )
}
