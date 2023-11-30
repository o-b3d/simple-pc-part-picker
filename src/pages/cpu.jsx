export default function CPU() {
  return <>
  <AddCPU />
  </>;
}

export function AddCPU() {
    const addCPUToBuild = () => {
        // Logic to add CPU to build. Need to create array of CPU models or maybe use an API of CPU's?
    };

    return (
        <div>
            <h2>CPU</h2>
            {/* Display CPU information? */}
            <button className="btn btn-primary" onClick={addCPUToBuild}>Add to Build</button>
        </div>
    );
}