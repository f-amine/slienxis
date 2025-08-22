"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Newsletter() {
	return (
		<div className="h-[40rem] w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
			<div className="max-w-2xl mx-auto p-4">
				<h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-bold">
					Prêt à sécuriser vos ambitions internationales ?
				</h1>
				<p></p>
				<p className="text-muted-foreground max-w-lg mx-auto my-2 text-sm text-center relative z-10">
					Recevez nos analyses stratégiques exclusives sur les opportunités
					d'investissement en Afrique et en Europe. Insights mensuels sur la
					diplomatie économique, les zones économiques stratégiques et les
					meilleures pratiques de sécurisation internationale.
				</p>
				<div className="flex gap-2 mt-4 relative z-10">
					<Input
						type="email"
						placeholder="votre.email@entreprise.com"
						className="flex-1"
					/>
					<Button>S'inscrire</Button>
				</div>
				<p className="text-xs text-muted-foreground text-center mt-4 relative z-10">
					Vos données sont protégées conformément à notre politique de
					confidentialité.
				</p>
			</div>
			<BackgroundBeams />
		</div>
	);
}
