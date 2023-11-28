export default function Motherboard() {
  return (
    <>
      <AddMotherboard />
    </>
  );
}

export function AddMotherboard() {
  const addMotherboardToBuild = () => {};

  return (
    <div>
      <h2>Motherboard</h2>
      <button onClick={addMotherboardToBuild}>Add to Build</button>
    </div>
  );
}