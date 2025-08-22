"use client";
import React from "react";
import type { ComponentProps, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { LinkedinIcon, MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: "Nos Services",
		links: [
			{ title: "Support France/Europe", href: "#support-france" },
			{ title: "Support Pays", href: "#support-pays" },
			{ title: "Support Zones Économiques", href: "#support-zones" },
			{ title: "Structuration Financière", href: "#structuration" },
		],
	},
	{
		label: "Zones d'Intervention",
		links: [
			{ title: "Afrique de l'Ouest (CEDEAO)", href: "#cedeao" },
			{ title: "Afrique Centrale (CEMAC)", href: "#cemac" },
			{ title: "Afrique de l'Est (COMESA)", href: "#comesa" },
			{ title: "Afrique Australe (SADC)", href: "#sadc" },
			{ title: "Maghreb (UMA)", href: "#uma" },
		],
	},
	{
		label: "À Propos",
		links: [
			{ title: "Notre Équipe", href: "#equipe" },
			{ title: "Méthodologie", href: "#methodologie" },
			{ title: "Confidentialité (NDA)", href: "#nda" },
			{ title: "Contact", href: "#contact" },
		],
	},
	{
		label: "Contact",
		links: [
			{ title: "Email", href: "mailto:contact@silenxis.com", icon: MailIcon },
			{ title: "Téléphone", href: "tel:+33100000000", icon: PhoneIcon },
			{ title: "Paris, France", href: "#", icon: MapPinIcon },
			{ title: "LinkedIn", href: "#", icon: LinkedinIcon },
		],
	},
];

export function Footer() {
	return (
		<footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
			<div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			<div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
				<AnimatedContainer className="space-y-4">
					<div className="text-2xl font-bold">SILENXIS</div>
					<p className="text-muted-foreground mt-4 text-sm max-w-xs">
						Votre partenaire stratégique pour sécuriser et accélérer votre
						expansion internationale avec expertise et confidentialité.
					</p>
					<p className="text-muted-foreground mt-8 text-xs">
						© {new Date().getFullYear()} SILENXIS. Tous droits réservés.
					</p>
				</AnimatedContainer>

				<div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="mb-10 md:mb-0">
								<h3 className="text-xs font-semibold">{section.label}</h3>
								<ul className="text-muted-foreground mt-4 space-y-2 text-sm">
									{section.links.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												className="hover:text-foreground inline-flex items-center transition-all duration-300"
											>
												{link.icon && <link.icon className="me-1 size-4" />}
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>
		</footer>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>["className"];
	children: ReactNode;
};

function AnimatedContainer({
	className,
	delay = 0.1,
	children,
}: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
			whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

