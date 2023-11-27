export default function CPU() {
  return <>
  <AddCPU />
  </>;
}

export function AddCPU() {
    const addCPUToBuild = () => {
        // Logic to add CPU to build
    };

    return (
        <div>
            <h2>CPU</h2>
            {/* Display CPU information? */}
            <button onClick={addCPUToBuild}>Add to Build</button>
        </div>
    );
}