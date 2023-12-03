import { PartSelector } from "../components/PartSelector";
import { partSelectors } from "../utils/data";

export default function Home() {
	return (
		<div className="overflow-x-auto bg-base-100">
			{/*In a Table, need to add a tbody, or similar, tag as parents to tr tags -OG*/}
			<ul className="flex flex-col">
				{partSelectors.map((selector) => (
					<li key={selector.name} className="hover:bg-slate-200 border-y p-2">
						<PartSelector selector={selector} />
					</li>
				))}
			</ul>
		</div>
	);
}
