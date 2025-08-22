"use client";
import { FeatureSteps } from "@/components/blocks/feature-section";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import { FAQ } from "@/components/ui/faq-section";
import ContactSection from "@/components/blocks/contact-section";
import { Newsletter } from "@/components/blocks/newsletter";
import { HeroSection } from "@/components/blocks/hero-section-4";
import TeamSection from "@/components/blocks/team-members";
import ServicesGrid from "@/components/blocks/services-grid";
import InternationalPresence from "@/components/blocks/international-presence";
import { Methodology } from "@/components/blocks/methodology";

const features = [
	{
		step: "Étape 1",
		title: "Analyse Stratégique",
		content:
			"Cartographie complète de votre environnement institutionnel et identification des opportunités stratégiques.",
		image:
			"https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
	},
	{
		step: "Étape 2",
		title: "Sécurisation & Structuration",
		content:
			"Mise en place d'une architecture juridique, fiscale et financière robuste pour vos opérations internationales.",
		image:
			"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
	},
	{
		step: "Étape 3",
		title: "Déploiement & Suivi",
		content:
			"Accompagnement opérationnel sur le terrain avec reporting continu et optimisation de votre stratégie d'influence.",
		image:
			"https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
	},
];

export default function Home() {
	return (
		<div className="">
			<HeroSection />

			<section className="py-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					<FeatureSteps
						features={features}
						title="Notre Approche en 3 Étapes"
						autoPlayInterval={5000}
						imageHeight="h-[500px]"
					/>
				</div>
			</section>

			<section className="py-20 bg-muted/30">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					<Methodology />
				</div>
			</section>

			<InternationalPresence />

			<section className="py-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					<ServicesGrid />
				</div>
			</section>

			<TeamSection />

			<section className="py-20 bg-muted/30">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
						Témoignages Clients
					</h2>
					<StaggerTestimonials />
				</div>
			</section>

			<FAQ />

			<section className="py-20 bg-muted/30">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
					<ContactSection />
				</div>
			</section>

			<Newsletter />
		</div>
	);
}
