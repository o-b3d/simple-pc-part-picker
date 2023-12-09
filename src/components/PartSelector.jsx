import { Link } from 'react-router-dom'

export function PartSelector({ selector, part }) {
    return (
        <Link to={`part/${selector.link}`}>
            <span>{selector.label}</span>
            <p>
                <strong>{part ? part.model : 'Please Select a Part'}</strong>
            </p>
            <p>Price: ${part ? part.model : 0}</p>
        </Link>
    )
}
