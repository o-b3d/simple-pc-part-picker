import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export function PartSelector({ data }) {
    
    return (
        <Link to={`part/${data.type}`}>
            <span>{data.label}</span>
            <p>
                {/*I replcaed from "part" to selectedPart to get context from PickedPart */}
                <strong>{data.selected ? data.selected.name : 'Please Select a Part'}</strong>
            </p>
            <p>Price: ${data.selected ? data.selected.price : 0}</p>
        </Link>
    )
}
