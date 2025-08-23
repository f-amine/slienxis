"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { Shield, Lock, TrendingUp, Globe } from "lucide-react";

export function HeroSection() {
	return (
		<>
			<main className="overflow-x-hidden">
				<section>
					<div className="pb-14 pt-12 md:pb-18 lg:pb-22 lg:pt-24">
						<div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block gap-10">
							<div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
								<h1 className="mt-8 max-w-2xl text-balance text-4xl font-bold md:text-5xl lg:mt-16 xl:text-6xl">
									SILENXIS – Stratégie, Finance & Sécurisation Internationale
								</h1>
								<p className="mt-8 max-w-2xl text-pretty text-lg text-muted-foreground">
									Nous aidons les entreprises ambitieuses à sécuriser leurs
									projets, accélérer leur déploiement international et bâtir des
									partenariats solides grâce à notre expertise en diplomatie
									économique, intelligence stratégique et structuration
									financière.
								</p>

								<div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
									<Button asChild size="lg" className="px-5 text-base">
										<Link href="#contact">
											<span className="text-nowrap">Contactez-nous</span>
										</Link>
									</Button>
									<Button
										asChild
										size="lg"
										variant="ghost"
										className="px-5 text-base"
									>
										<Link href="#contact">
											<span className="text-nowrap">
												Demander un rendez-vous
											</span>
										</Link>
									</Button>
								</div>

								{/* Key value propositions */}
								<div className="mt-12 grid grid-cols-2 gap-4">
									<div className="flex items-center gap-2 text-sm">
										<Shield className="h-4 w-4 text-primary flex-shrink-0" />
										<span>Stratégie proactive</span>
									</div>
									<div className="flex items-center gap-2 text-sm">
										<Lock className="h-4 w-4 text-primary flex-shrink-0" />
										<span>Sécurisation institutionnelle</span>
									</div>
									<div className="flex items-center gap-2 text-sm">
										<Globe className="h-4 w-4 text-primary flex-shrink-0" />
										<span>Influence et ancrage durable</span>
									</div>
									<div className="flex items-center gap-2 text-sm">
										<TrendingUp className="h-4 w-4 text-primary flex-shrink-0" />
										<span>Résultats mesurables</span>
									</div>
								</div>
							</div>
							<div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 overflow-hidden">
								<img
									className="pointer-events-none h-56 w-full object-cover opacity-60 sm:h-96 lg:h-full lg:w-full lg:object-contain dark:opacity-40"
									src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
									alt="SILENXIS International Strategy"
									height="4000"
									width="3000"
								/>
							</div>
						</div>
					</div>
				</section>
				<section className="bg-background pb-8 md:pb-10">
					<div className="group relative m-auto max-w-6xl px-6">
						<div className="flex flex-col items-center md:flex-row">
							<div className="md:max-w-44 md:border-r md:pr-6">
								<p className="text-end text-sm font-semibold">
									Partenaires de confiance
								</p>
							</div>
							<div className="relative py-6 md:w-[calc(100%-11rem)]">
								<InfiniteSlider speed={30} gap={80}>
									<div className="flex items-center">
										<span className="text-sm font-medium text-muted-foreground">
											CEDEAO
										</span>
									</div>
									<div className="flex items-center">
										<span className="text-sm font-medium text-muted-foreground">
											CEMAC
										</span>
									</div>
									<div className="flex items-center">
										<span className="text-sm font-medium text-muted-foreground">
											COMESA
										</span>
									</div>
									<div className="flex items-center">
										<span className="text-sm font-medium text-muted-foreground">
											SADC
										</span>
									</div>
									<div className="flex items-center">
										<span className="text-sm font-medium text-muted-foreground">
											UMA
										</span>
									</div>
									<div className="flex items-center">
										<span className="text-sm font-medium text-muted-foreground">
											Union Européenne
										</span>
									</div>
									<div className="flex items-center">
										<span className="text-sm font-medium text-muted-foreground">
											France
										</span>
									</div>
									<div className="flex items-center">
										<span className="text-sm font-medium text-muted-foreground">
											Afrique
										</span>
									</div>
								</InfiniteSlider>

								<ProgressiveBlur
									className="pointer-events-none absolute left-0 top-0 h-full w-20"
									direction="left"
									blurIntensity={1}
								/>
								<ProgressiveBlur
									className="pointer-events-none absolute right-0 top-0 h-full w-20"
									direction="right"
									blurIntensity={1}
								/>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
