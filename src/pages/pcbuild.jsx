import { useSelector } from 'react-redux'
import { PartSelector } from '../components/PartSelector'

const PCBuilder = () => {
    const build = useSelector((state) => state.build)

    return (
        <div className="overflow-x-auto bg-base-100">
            <ul className="flex flex-col">
                {build.parts.map((selector) => (
                    <li key={selector.label} className="hover:bg-slate-200 border-y p-2 py-6">
                        <PartSelector data={selector} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PCBuilder
