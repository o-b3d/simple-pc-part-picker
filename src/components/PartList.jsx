import { useSelector } from 'react-redux'

export function PartList({ action, partType }) {
    const build = useSelector((state) => state.build)

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Model</th>
                        <th>Color</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {build.slectPartFrom.map((part, index) => (
                        <tr key={part.name + index}>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="mask w-12 h-12">
                                        {/* <img src={part.image} alt={'PC Part Image'} /> */}
                                    </div>
                                </div>
                            </td>
                            <td>{part.name}</td>
                            <td className="font-bold">{part.color}</td>
                            <td>${part.price}</td>
                            <td>
                                <button
                                    className="btn btn-ghost"
                                    onClick={() => action(part, partType)}
                                >
                                    Add to Build
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Model</th>
                        <th>Color</th>
                        <th>Price</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
