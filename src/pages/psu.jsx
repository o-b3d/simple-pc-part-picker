export default function PSU() {
  return (
    <>
      <AddPSU />
    </>
  );
}

export function AddPSU() {
  const addPSUToBuild = () => {};

  return (
    <div>
      <h2>PSU</h2>
      <button onClick={addPSUToBuild}>Add to Build</button>
    </div>
  );
}
