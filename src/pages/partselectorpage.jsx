import { useLoaderData } from "react-router-dom";
import { PartList } from "../components/PartList";
import { cpuModels, gpuModels } from "../utils/data";
import { addPartToBuild } from "../utils/helpers";

export const partLoader = async ({params}) => {
	console.log("partLoader", params.part);
	switch (params.part) {
		case "gpu":
			return gpuModels;
		case "cpu":
			return cpuModels;
		default:
			return null;
	}
};

export function PartsPage() {
	const parts = useLoaderData();
	console.log("PartsPage", parts);
	return (
		<>
			<PartList parts={parts} action={addPartToBuild} />
		</>
	);
}
