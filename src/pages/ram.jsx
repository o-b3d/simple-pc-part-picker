export default function Ram() {
  return (
    <>
      <AddRAM />
    </>
  );
}

export function AddRAM() {
  const addRAMToBuild = () => {};

  return (
    <div>
      <h2>RAM</h2>
      <button onClick={addRAMToBuild}>Add to Build</button>
    </div>
  );
}