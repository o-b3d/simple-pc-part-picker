export default function CPU() {
  return (
    <>
      <AddCPU />
    </>
  );
}

 
export function AddCPU() {
  const addCPUToBuild = () => {
    // Logic to add CPU to build. Need to create array of CPU models or maybe use an API of CPU's?
    const cpuModels = [
      {
        partNumber: "BX8071514900K",
        brand: "Intel",
        model: "i9-14900K",
      },
      {
        partNumber: "BX8071513900KS",
        brand: "Intel",
        model: "Core i9-13900KS",
      },
     
      {
        partNumber: "BX8071514700KF",
        brand: "Intel",
        model: "Core i7-14700KF",
      },
     
      {
        partNumber: "BX8071514700K",
        brand: "Intel",
        model: "Core i7-14700K",
      },
     
      {
        partNumber: "BX8071513900KF",
        brand: "Intel",
        model: "Core i9-13900KF",
      },
     
      {
        partNumber: "BX8071513900K",
        brand: "Intel",
        model: "Core i9-13900K",
      },
     
      {
        partNumber: "BX8071513700KF",
        brand: "Intel",
        model: "Core i7-13700KF",
      },
     
      {
        partNumber: "BX8071514600K",
        brand: "Intel",
        model: "Core i5-14600K",
      },
     
      {
        partNumber: "BX8071513900F",
        brand: "Intel",
        model: "Core i9-13900F",
      },
     
      {
        partNumber: "BX8071513600K",
        brand: "Intel",
        model: "Core i5-13600K",
      },
     
      {
        partNumber: "BX8071513600KF",
        brand: "Intel",
        model: "BX8071513600KF",
      },
     
      {
        partNumber: "BX8071513700F",
        brand: "Intel",
        model: "Core i7-13700F",
      },
     
      {
        partNumber: "BX8071513700",
        brand: "Intel",
        model: "Core i7-13700",
      },
     
      {
        partNumber: "BX8071512900KS",
        brand: "Intel",
        model: "Core i9-12900KS",
      },
     
      {
        partNumber: "BX8071512900KF",
        brand: "Intel",
        model: "Core i9-12900KF",
      },
     
      {
        partNumber: "BX8071512900K",
        brand: "Intel",
        model: "Core i9-12900K",
      },
     
      {
        partNumber: "BX8071513600",
        brand: "Intel",
        model: "Core i5-13600",
      },
     
      {
        partNumber: "BX8071512700K",
        brand: "Intel",
        model: "Core i7-12700K",
      },
      {
        partNumber: "BX8071512700KF",
        brand: "Intel",
        model: "Core i7-12700KF",
      },
      {
        partNumber: "BX8071512900F",
        brand: "Intel",
        model: "Core i9-12900F",
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

 
 

