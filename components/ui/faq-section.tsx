import { Shield, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqData = [
	{
		question: "Qu'est-ce que SILENXIS apporte de différent ?",
		answer:
			"SILENXIS combine expertise en diplomatie économique, intelligence stratégique et structuration financière. Nous ne sommes pas simplement des consultants, mais votre bouclier stratégique et accélérateur de croissance en Afrique et en Europe. Notre approche unique intègre sécurisation institutionnelle, influence politique et ingénierie financière.",
	},
	{
		question: "Comment garantissez-vous la confidentialité de nos projets ?",
		answer:
			"Chaque collaboration débute systématiquement par la signature d'un accord de confidentialité (NDA) adapté à votre juridiction. Nos processus internes respectent les normes les plus strictes de protection des données. Nous travaillons en mode 'stealth' sur demande, sans jamais compromettre vos informations stratégiques.",
	},
	{
		question: "Quelles sont vos zones d'intervention prioritaires ?",
		answer:
			"Nous opérons principalement dans 5 zones économiques stratégiques : Afrique de l'Ouest (CEDEAO), Afrique Centrale (CEMAC), Afrique de l'Est/Océan Indien (COMESA), Afrique Australe (SADC) et Maghreb (UMA). Nous avons également une forte présence en France et dans l'Union Européenne pour le support institutionnel.",
	},
	{
		question: "Quelle est votre méthodologie d'intervention ?",
		answer:
			"Notre approche en 3 phases : 1) Analyse stratégique approfondie avec cartographie des risques et opportunités, 2) Sécurisation juridique, fiscale et institutionnelle avec structuration financière adaptée, 3) Déploiement opérationnel avec suivi continu et tableaux de bord d'influence. Chaque phase est documentée avec des livrables clairs.",
	},
	{
		question: "Quels types d'entreprises accompagnez-vous ?",
		answer:
			"Nous accompagnons les entreprises ambitieuses de toutes tailles qui cherchent à sécuriser leur expansion internationale, particulièrement en Afrique. Nos clients incluent des PME en phase d'internationalisation, des ETI cherchant à consolider leur présence, et des grands groupes nécessitant une expertise pointue en diplomatie économique.",
	},
	{
		question: "Comment mesurez-vous le succès de vos interventions ?",
		answer:
			"Nous établissons des KPIs spécifiques à chaque projet : sécurisation des autorisations administratives, qualité des partenariats établis, optimisation fiscale réalisée, niveau d'ancrage institutionnel atteint, et retour sur investissement. Un reporting mensuel détaillé vous permet de suivre nos avancées.",
	},
	{
		question: "Quelle est la durée moyenne d'un accompagnement ?",
		answer:
			"Cela dépend de la complexité du projet. Un diagnostic initial prend 2-4 semaines. Une mission de sécurisation complète s'étend sur 3-6 mois. L'accompagnement stratégique long terme peut durer 12-24 mois. Nous proposons aussi des interventions ponctuelles pour des besoins spécifiques.",
	},
	{
		question: "Comment travaillez-vous avec les autorités locales ?",
		answer:
			"Notre équipe combine diplomates de carrière et experts en relations institutionnelles. Nous avons développé un réseau solide auprès des décideurs publics et privés. Notre approche respecte scrupuleusement les réglementations locales tout en optimisant votre positionnement stratégique.",
	},
];

function FAQ() {
	return (
		<div className="w-full py-20 lg:py-40">
			<div className="container mx-auto">
				<div className="grid lg:grid-cols-2 gap-10">
					<div className="flex gap-10 flex-col">
						<div className="flex gap-4 flex-col">
							<div>
								<Badge variant="outline">Questions Fréquentes</Badge>
							</div>
							<div className="flex gap-2 flex-col">
								<h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
									Comprendre notre approche unique
								</h4>
								<p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
									Chez SILENXIS, nous croyons qu'aucune entreprise
									internationale ne peut réussir sans une stratégie d'influence
									et de sécurisation solide. Découvrez comment nous pouvons être
									votre avantage stratégique en Afrique et en Europe.
								</p>
							</div>
							<div className="">
								<Button className="gap-4" variant="outline" asChild>
									<a href="#contact">
										Des questions spécifiques ? Contactez-nous{" "}
										<PhoneCall className="w-4 h-4" />
									</a>
								</Button>
							</div>
						</div>
					</div>
					<Accordion type="single" collapsible className="w-full">
						{faqData.map((item, index) => (
							<AccordionItem key={index} value={"index-" + index}>
								<AccordionTrigger>{item.question}</AccordionTrigger>
								<AccordionContent>{item.answer}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</div>
	);
}

export { FAQ };
