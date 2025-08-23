import { ChartBar, FileText, Globe, Shield, Target } from "lucide-react";
import RadialOrbitalTimeline from "../ui/radial-orbital-timeline";
export function Methodology() {
	return (
		<div className="">
			<div className="max-w-7xl mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div>
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
							Une Méthodologie Éprouvée
						</h2>
						<p className="text-lg text-muted-foreground mb-8">
							Notre approche combine anticipation des risques, sécurisation des
							partenariats et veille stratégique continue. Chaque étape est
							documentée avec des livrables clairs et des résultats mesurables.
						</p>
						<div className="space-y-4">
							<div className="flex items-start gap-3">
								<Shield className="w-5 h-5 text-primary mt-1" />
								<div>
									<h3 className="font-semibold">Sécurisation Maximale</h3>
									<p className="text-sm text-muted-foreground">
										Chaque collaboration débute par un accord de confidentialité
										(NDA) garantissant la protection de vos informations
										stratégiques.
									</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<Target className="w-5 h-5 text-primary mt-1" />
								<div>
									<h3 className="font-semibold">Résultats Mesurables</h3>
									<p className="text-sm text-muted-foreground">
										Des KPIs clairs et un reporting régulier pour suivre
										l'impact de nos actions sur votre développement
										international.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div>
						<RadialOrbitalTimeline timelineData={timelineData} />
					</div>
				</div>
			</div>
		</div>
	);
}

const timelineData = [
	{
		id: 1,
		title: "Diagnostic Initial",
		date: "Semaine 1-2",
		content:
			"Analyse approfondie de votre situation et de vos objectifs internationaux.",
		category: "Analyse",
		icon: FileText,
		relatedIds: [2],
		status: "completed" as const,
		energy: 100,
	},
	{
		id: 2,
		title: "Cartographie des Risques",
		date: "Semaine 3-4",
		content:
			"Identification et évaluation des risques juridiques, fiscaux et politiques.",
		category: "Sécurisation",
		icon: Shield,
		relatedIds: [1, 3],
		status: "completed" as const,
		energy: 90,
	},
	{
		id: 3,
		title: "Stratégie d'Influence",
		date: "Mois 2",
		content:
			"Élaboration de votre stratégie de diplomatie économique et d'ancrage institutionnel.",
		category: "Stratégie",
		icon: Target,
		relatedIds: [2, 4],
		status: "in-progress" as const,
		energy: 75,
	},
	{
		id: 4,
		title: "Mise en Œuvre",
		date: "Mois 3-4",
		content:
			"Déploiement opérationnel avec nos experts terrain et partenaires locaux.",
		category: "Exécution",
		icon: Globe,
		relatedIds: [3, 5],
		status: "pending" as const,
		energy: 50,
	},
	{
		id: 5,
		title: "Suivi & Optimisation",
		date: "Continu",
		content:
			"Reporting régulier et ajustements stratégiques pour maximiser votre impact.",
		category: "Monitoring",
		icon: ChartBar,
		relatedIds: [4],
		status: "pending" as const,
		energy: 30,
	},
];
