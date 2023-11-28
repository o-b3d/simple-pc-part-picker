export default function GPU() {
    return (
      <>
        <AddGPU />
      </>
    );
  }
  
  export function AddGPU() {
    const addGPUToBuild = () => {};
  
    return (
      <div>
        <h2>GPU</h2>
        <button onClick={addGPUToBuild}>Add to Build</button>
      </div>
    );
  }