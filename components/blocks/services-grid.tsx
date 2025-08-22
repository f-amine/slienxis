import {
	Briefcase,
	Globe,
	HandshakeIcon,
	Shield,
	TrendingUp,
} from "lucide-react";
import { GridItem } from "../ui/grid-item";

export default function ServicesGrid() {
	return (
		<div className="max-w-7xl mx-auto px-6 py-20">
			<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
				Nos Expertises
			</h2>
			<ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
				<GridItem
					area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
					icon={<Shield className="h-4 w-4" />}
					title="Support France / Europe"
					description="Sécurisation juridique, fiscale et institutionnelle depuis la France et l'UE. Appui auprès des autorités."
				/>
				<GridItem
					area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
					icon={<Globe className="h-4 w-4" />}
					title="Support Pays"
					description="Accompagnement local, cartographie des acteurs publics et privés, négociation de partenariats fiables."
				/>
				<GridItem
					area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
					icon={<Briefcase className="h-4 w-4" />}
					title="Support Zones Économiques"
					description="Cohérence régionale, dialogue intergouvernemental et harmonisation transfrontalière."
				/>
				<GridItem
					area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
					icon={<TrendingUp className="h-4 w-4" />}
					title="Structuration Financière"
					description="Ingénierie financière, levées de fonds et reporting international adapté à vos besoins."
				/>
				<GridItem
					area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
					icon={<HandshakeIcon className="h-4 w-4" />}
					title="Diplomatie Économique"
					description="Relations institutionnelles, représentation stratégique et influence auprès des décideurs."
				/>
			</ul>
		</div>
	);
}
