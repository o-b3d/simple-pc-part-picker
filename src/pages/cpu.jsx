export default function CPU() {
  return (
    <>
      <AddCPU />
    </>
  );
}

 HEAD
export function AddCPU() {
  const addCPUToBuild = () => {
    // Logic to add CPU to build. Need to create array of CPU models or maybe use an API of CPU's?
    const cpuModels = [
      {
        partnumber: "BX8071514900K",
        brand: "Intel",
        model: "i9-14900K",
      },
    ];
  };

  return (
    <div>
      <h2>CPU</h2>
      {/* Display CPU information? */}
      <button className="btn btn-primary" onClick={addCPUToBuild}>
        Add to Build
      </button>
    </div>
  );
}

 
const cpuModels = [
  {
    partNumber: "BX8071513900KS",
    brand: "Intel",
    model: "Core i9-13900KS",
  },
];
