import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PickedPartContext } from '../components/PickedPartContext'

export function PartSelector({ selector, part }) {
    const { selectedPart } = useContext(PickedPartContext)
    return (
        <Link to={`part/${selector.link}`}>
            <span>{selector.label}</span>
            <p>
                {/*I replcaed from "part" to selectedPart to get context from PickedPart */}
                <strong>{selectedPart ? selectedPart.model : 'Please Select a Part'}</strong>
            </p>
            <p>Price: ${part ? part.model : 0}</p>
        </Link>
    )
}
