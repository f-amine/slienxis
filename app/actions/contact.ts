"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);
const contactSchema = z.object({
	name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
	email: z.string().email("Email invalide"),
	company: z.string().optional(),
	phone: z.string().optional(),
	message: z
		.string()
		.min(10, "Le message doit contenir au moins 10 caractères"),
	requestNDA: z.boolean().optional(),
});

export async function sendContactForm(formData: FormData) {
	try {
		const validatedData = contactSchema.parse({
			name: formData.get("name"),
			email: formData.get("email"),
			company: formData.get("company") || undefined,
			phone: formData.get("phone") || undefined,
			message: formData.get("message"),
			requestNDA: formData.get("requestNDA") === "on",
		});

		await resend.emails.send({
			from: "SILENXIS <contact@pinkerai.xyz>",
			to: ["aminefrira@gmail.com"],
			subject: `Nouvelle demande de contact de ${validatedData.name}`,
			html: `
		    <h2>Nouvelle demande de contact</h2>
		    <p><strong>Nom:</strong> ${validatedData.name}</p>
		    <p><strong>Email:</strong> ${validatedData.email}</p>
		    <p><strong>Entreprise:</strong> ${validatedData.company || "Non renseigné"}</p>
		    <p><strong>Téléphone:</strong> ${validatedData.phone || "Non renseigné"}</p>
		    <p><strong>Demande NDA:</strong> ${validatedData.requestNDA ? "Oui" : "Non"}</p>
		    <p><strong>Message:</strong></p>
		    <p>${validatedData.message}</p>
		  `,
		});

		return {
			success: true,
			message:
				"Votre message a été envoyé avec succès. Nous vous répondrons sous 24h.",
		};
	} catch (error) {
		console.error("Contact form error:", error);

		if (error instanceof z.ZodError) {
			return {
				success: false,
				message: "Veuillez vérifier les informations saisies.",
				errors: error.errors,
			};
		}

		return {
			success: false,
			message: "Une erreur est survenue. Veuillez réessayer plus tard.",
		};
	}
}
