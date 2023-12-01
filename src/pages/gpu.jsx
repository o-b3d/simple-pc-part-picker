export default function GPU() {
  return (
    <>
      <AddGPU />
    </>
  );
}

export function AddGPU() {
  const gpuModels = [
    {
      PartNumber: "GV-N4090GAMING OC-24GD",
      Brand: "Gigabyte",
      Model: "Gigabyte RTX 4090 24GB Gaming OC",
      Image: "https://m.media-amazon.com/images/I/711vU2IrEuL.jpg",
    },
    {
      PartNumber: "TUF-RTX4090-24G-GAMING",
      Brand: "Asus",
      Model: "Asus RTX 4090 24GB TUF Gaming OC",
      Image:
        "https://m.media-amazon.com/images/I/81-Q4kEcj5L._AC_UF894,1000_QL80_.jpg",
    },
    {
      PartNumber: "GeForce RTX 4090 GAMING X TRIO 24G",
      Brand: "MSI",
      Model: "MSI RTX 4090 24GB Gaming X Trio",
    },
    {
      PartNumber: "GV-N4080GAMING OC-16GD",
      Brand: "Gigabyte",
      Model: "Gigabyte RTX 4080 16GB Gaming OC",
    },
    {
      PartNumber: "ZT-D40810B-10P",
      Brand: "Zotac",
      Model: "Zotac RTX 4080 16GB AMP Extreme",
    },
    {
      PartNumber: "G408016SX",
      Brand: "MSI",
      Model: "MSI RTX 4080 16GB Suprim X",
    },
    {
      PartNumber: "TUF-RTX4080-O16G-GAMING",
      Brand: "Asus",
      Model: "Asus RTX 4080 16GB TUF Gaming OC",
    },
    {
      PartNumber: "RTX 4070 Ti GAMING X TRIO 12G",
      Brand: "MSI",
      Model: "MSI RTX 4070 Ti 12GB Gaming X Trio",
    },
    {
      PartNumber: "ZT-D40710D-10P",
      Brand: "Zotac",
      Model: "Zotac RTX 4070 Ti 12GB Trinity",
    },
    {
      PartNumber: "TUF-RTX4070TI-O12G-GAMING",
      Brand: "Asus",
      Model: "Asus RTX 4070 Ti 12GB TUF Gaming OC",
    },
    {
      PartNumber: "GV-N407TEAGLE OC-12GD",
      Brand: "Gigabyte",
      Model: "Gigabyte RTX 4070 Ti 12GB Eagle OC",
    },
    {
      PartNumber: "TUF-RTX4070TI-12G-GAMING",
      Brand: "Asus",
      Model: "Asus RTX 4070 Ti 12GB TUF Gaming",
    },
    {
      PartNumber: "GV-N407TGAMING OC-12GD",
      Brand: "Gigabyte",
      Model: "Gigabyte RTX 4070 Ti 12GB 3X OC",
    },
    {
      PartNumber: "GeForce RTX 4070 Ti GAMING X SLIM 12G",
      Brand: "MSI",
      Model: "MSI RTX 4070 Ti 12GB Gaming X Slim",
    },
    {
      PartNumber: "24G-P5-3987-KR",
      Brand: "EVGA",
      Model: "EVGA RTX 3090 24GB XC3 Ultra Gaming",
    },
    {
      PartNumber: "GeForce RTX 3090 VENTUS 3X 24G OC",
      Brand: "MSI",
      Model: "MSI RTX 3090 24GB Ventus 3X OC",
    },
    {
      PartNumber: "12G-P5-3967-KR",
      Brand: "EVGA",
      Model: "EVGA RTX 3080 Ti 12GB FTW3 Ultra Gaming",
    },
    {
      PartNumber: "TUF-RTX3080TI-O12G-GAMING",
      Brand: "Asus",
      Model: "Asus RTX 3080 Ti 12GB Tuf OC",
    },
    {
      PartNumber: "GV-N308TGAMING OC-12GD",
      Brand: "Gigabyte",
      Model: "Gigabyte RTX 3080 Ti 12GB Gaming OC",
    },
    {
      PartNumber: "12G-P5-3955-KR",
      Brand: "EVGA",
      Model: "EVGA RTX 3080 Ti 12GB XC3 Ultra Gaming",
    },
    {
      PartNumber: "GV-N308TVISION OC-12GD",
      Brand: "Gigabyte",
      Model: "Gigabyte RTX 3080 Ti 12GB Vision OC",
    },
    {
      PartNumber: "GeForce RTX 3080 Ti SUPRIM X 12G",
      Brand: "MSI",
      Model: "MSI RTX 3080 Ti 12GB Suprim X",
    },
    {
      PartNumber: "GV-N308TAORUS M-12GD",
      Brand: "Gigabyte",
      Model: "Gigabyte RTX 3080 Ti 12GB Aorus Master",
    },
    {
      PartNumber: "GV-N308TEAGLE-12GD",
      Brand: "Gigabyte",
      Model: "Gigabyte RTX 3080 Ti 12GB Eagle",
    },
    {
      PartNumber: "GeForce RTX 4070 VENTUS 3X 12G OC",
      Brand: "MSI",
      Model: "MSI RTX 4070 12GB Ventus 3X OC",
    },
    {
      PartNumber: "GV-N4070WF3OC-12GD",
      Brand: "Gigabyte",
      Model: "Gigabyte RTX 4070 12GB 3X Windforce",
    },
    {
      PartNumber: "DUAL-RTX4070-12G",
      Brand: "Asus",
      Model: "Asus RTX 4070 12GB Dual",
    },
    {
      PartNumber: "GeForce RTX 4070 VENTUS 2X 12G OC",
      Brand: "MSI",
      Model: "MSI RTX 4070 12GB Ventus 2X",
    },
    {
      PartNumber: "DUAL-RTX4070-O12G",
      Brand: "Asus",
      Model: "Asus RTX 4070 12GB Dual OC",
    },
    {
      PartNumber: "GeForce RTX 4070 GAMING X TRIO 12G",
      Brand: "MSI",
      Model: "MSI RTX 4070 12GB Gaming X Trio",
    },
    {
      PartNumber: "GV-N4070GAMING OC-12GD",
      Brand: "Gigabyte",
      Model: "Gigabyte RTX 4070 12GB Gaming OC",
    },
    {
      PartNumber: "GV-N4070EAGLE OC-12GD",
      Brand: "Gigabyte",
      Model: "Gigabyte RTX 4070 12GB 3X Eagle OC",
    },
    {
      PartNumber: "GV-N4070AERO OC-12GD",
      Brand: "Gigabyte",
      Model: "Gigabyte RTX 4070 12GB 3X Aero OC",
    },
    {
      PartNumber: "RTX 3080 Ventus 3X Plus 10G OC LHR",
      Brand: "MSI",
      Model: "MSI RTX 3080 10GB Ventus 3X OC",
    },
    {
      PartNumber: "GV-N3080GAMING OC-10GD-V2",
      Brand: "Gigabyte",
      Model: "Gigabyte RTX 3080 10GB Gaming OC",
    },
    {
      PartNumber: "GV-N3080AORUS X-10GD REV2.0",
      Brand: "Gigabyte",
      Model: "Gigabyte RTX 3080 10GB Aorus Master",
    },
    {
      PartNumber: "RTX 3080 Gaming Z Trio 10G LHR",
      Brand: "MSI",
      Model: "MSI RTX 3080 10GB Gaming Z Trio",
    },
  ];

  return (
    <div className="">
      {gpuModels.map((gpu, index) => (
        <div className="" key={index}>
          <img
            src={gpu.Image}
            alt={"Graphics Card"}
            style={{ width: "320px", height: "auto", objectFit: "cover" }}
          />
          <h2 className="">{gpu.Model}</h2>
          <p>{gpu.PartNumber}</p>
          <p>{gpu.Brand}</p>
          <div className="">
            <button
              className="btn btn-primary"
              onClick={() => addGPUToBuild(gpu)}
            >
              Add to Build
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

const addGPUToBuild = (gpu) => {
  console.log(gpu);
  alert(`Added ${gpu.Model} to Build!`);
};