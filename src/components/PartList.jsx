export function PartList({ parts, action }) {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Model</th>
                        <th>Brand</th>
                        <th>Part No.</th>
                    </tr>
                </thead>
                <tbody>
                    {parts.map((part) => (
                        <tr key={part.partNumber}>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="mask w-12 h-12">
                                        <img src={part.image} alt={'Graphics Card'} />
                                    </div>
                                </div>
                            </td>
                            <td>{part.name}</td>
                            <td className="font-bold">{part.brand}</td>
                            <td>{part.partNumber}</td>
                            <td>
                                <button className="btn btn-ghost" onClick={() => action(part)}>
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
                        <th>Brand</th>
                        <th>Part No.</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
