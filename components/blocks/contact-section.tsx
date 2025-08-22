"use client";

import { ContactCard } from "@/components/ui/contact-card";
import { MailIcon, PhoneIcon, MapPinIcon, Shield } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendContactForm } from "@/app/actions/contact";
import { useFormStatus } from "react-dom";
import { useState } from "react";

function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<Button className="w-full" type="submit" disabled={pending}>
			{pending ? "Envoi en cours..." : "Envoyer ma demande"}
		</Button>
	);
}

export default function ContactSection() {
	const [message, setMessage] = useState<{
		type: "success" | "error";
		text: string;
	} | null>(null);

	async function handleSubmit(formData: FormData) {
		const result = await sendContactForm(formData);

		if (result.success) {
			setMessage({ type: "success", text: result.message });
			const form = document.getElementById("contact-form") as HTMLFormElement;
			form?.reset();
		} else {
			setMessage({ type: "error", text: result.message });
		}

		// Clear message after 5 seconds
		setTimeout(() => setMessage(null), 5000);
	}

	return (
		<div id="contact" className="py-20">
			<ContactCard
				title="Contactez-nous en toute confidentialité"
				description="Chaque collaboration débute par un accord de confidentialité (NDA) garantissant la sécurité et la confidentialité de vos informations stratégiques. Nos experts vous répondront sous 24h ouvrées."
				contactInfo={[
					{
						icon: MailIcon,
						label: "Email",
						value: "contact@silenxis.com",
					},
					{
						icon: PhoneIcon,
						label: "Téléphone",
						value: "+33 1 00 00 00 00",
					},
					{
						icon: MapPinIcon,
						label: "Siège",
						value: "Paris, France",
						className: "col-span-2",
					},
				]}
			>
				<form
					id="contact-form"
					action={handleSubmit}
					className="w-full space-y-4"
				>
					<div className="flex items-center gap-2 mb-4 text-sm text-primary">
						<Shield className="h-4 w-4" />
						<span className="font-medium">Communication sécurisée</span>
					</div>

					{message && (
						<div
							className={`p-3 rounded-md text-sm ${
								message.type === "success"
									? "bg-green-50 text-green-800 border border-green-200"
									: "bg-red-50 text-red-800 border border-red-200"
							}`}
						>
							{message.text}
						</div>
					)}

					<div className="flex flex-col gap-2">
						<Label htmlFor="name">Nom et Prénom *</Label>
						<Input id="name" name="name" type="text" required />
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="email">Email professionnel *</Label>
						<Input id="email" name="email" type="email" required />
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="company">Entreprise</Label>
						<Input id="company" name="company" type="text" />
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="phone">Téléphone</Label>
						<Input id="phone" name="phone" type="tel" />
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="message">Votre projet *</Label>
						<Textarea
							id="message"
							name="message"
							placeholder="Décrivez brièvement votre projet d'expansion internationale et vos besoins spécifiques..."
							rows={4}
							required
						/>
					</div>
					<div className="flex items-start gap-2">
						<input
							type="checkbox"
							id="requestNDA"
							name="requestNDA"
							className="mt-1"
						/>
						<label
							htmlFor="requestNDA"
							className="text-xs text-muted-foreground"
						>
							Je souhaite recevoir un accord de confidentialité (NDA) avant tout
							échange détaillé
						</label>
					</div>
					<SubmitButton />
				</form>
			</ContactCard>
		</div>
	);
}
