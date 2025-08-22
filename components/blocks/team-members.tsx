// Team Section Component
import Link from "next/link";

const members = [
	{
		name: "Thierry Milouet",
		role: "Diplomatie économique & représentation stratégique",
		avatar:
			"https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
		link: "#",
	},
	{
		name: "Xavier Provost",
		role: "Analyse stratégique internationale, partenariats institutionnels",
		avatar:
			"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
		link: "#",
	},
	{
		name: "Jaafar Najidi",
		role: "Structuration financière & reporting international",
		avatar:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
		link: "#",
	},
];

export default function TeamSection() {
	return (
		<section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
			<div className="mx-auto max-w-5xl border-t px-6">
				<span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">
					Notre Équipe
				</span>
				<div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
					<div className="sm:w-2/5">
						<h2 className="text-3xl font-bold sm:text-4xl">
							Une Équipe d'Experts Pluridisciplinaire
						</h2>
					</div>
					<div className="mt-6 sm:mt-0">
						<p>
							Une équipe qui combine diplomatie, expertise institutionnelle et
							ingénierie financière pour accompagner vos projets dans les
							environnements les plus complexes d'Afrique et d'Europe.
						</p>
					</div>
				</div>
				<div className="mt-12 md:mt-24">
					<div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
						{members.map((member, index) => (
							<div key={index} className="group overflow-hidden">
								<img
									className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
									src={member.avatar}
									alt={member.name}
									width="826"
									height="1239"
								/>
								<div className="px-2 pt-2 sm:pb-0 sm:pt-4">
									<div className="flex justify-between">
										<h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">
											{member.name}
										</h3>
										<span className="text-xs">_0{index + 1}</span>
									</div>
									<div className="mt-1 flex items-center justify-between">
										<span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
											{member.role}
										</span>
										<Link
											href={member.link}
											className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
										>
											LinkedIn
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
