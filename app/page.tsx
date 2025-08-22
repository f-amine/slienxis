"use client";
import { FeatureSteps } from "@/components/blocks/feature-section";
import { HeroSection } from "@/components/blocks/hero-section-4";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { WorldMap } from "@/components/ui/world-map";
import {
	Box,
	Calendar,
	Clock,
	Code,
	FileText,
	Lock,
	Search,
	Settings,
	Sparkles,
	User,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GridItem } from "@/components/ui/grid-item";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import { FAQ } from "@/components/ui/faq-section";
import ContactSection from "@/components/blocks/contact-section";
import { Newsletter } from "@/components/blocks/newsletter";

const features = [
	{
		step: "Step 1",
		title: "Learn the Basics",
		content: "Start your Web3 journey by learning the basics of blockchain.",
		image:
			"https://images.unsplash.com/photo-1723958929247-ef054b525153?q=80&w=2070&auto=format&fit=crop",
	},
	{
		step: "Step 2",
		title: "Deep Dive",
		content:
			"Dive deep into blockchain fundamentals and smart contract development.",
		image:
			"https://images.unsplash.com/photo-1723931464622-b7df7c71e380?q=80&w=2070&auto=format&fit=crop",
	},
	{
		step: "Step 3",
		title: "Build Projects",
		content:
			"Graduate with hands-on Web3 experience through building decentralized applications.",
		image:
			"https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop",
	},
];

const timelineData = [
	{
		id: 1,

		title: "Planning",

		date: "Jan 2024",

		content: "Project planning and requirements gathering phase.",

		category: "Planning",

		icon: Calendar,

		relatedIds: [2],

		status: "completed" as const,

		energy: 100,
	},

	{
		id: 2,

		title: "Design",

		date: "Feb 2024",

		content: "UI/UX design and system architecture.",

		category: "Design",

		icon: FileText,

		relatedIds: [1, 3],

		status: "completed" as const,

		energy: 90,
	},

	{
		id: 3,

		title: "Development",

		date: "Mar 2024",

		content: "Core features implementation and testing.",

		category: "Development",

		icon: Code,

		relatedIds: [2, 4],

		status: "in-progress" as const,

		energy: 60,
	},

	{
		id: 4,

		title: "Testing",

		date: "Apr 2024",

		content: "User testing and bug fixes.",

		category: "Testing",

		icon: User,

		relatedIds: [3, 5],

		status: "pending" as const,

		energy: 30,
	},

	{
		id: 5,

		title: "Release",

		date: "May 2024",

		content: "Final deployment and release.",

		category: "Release",

		icon: Clock,

		relatedIds: [4],

		status: "pending" as const,

		energy: 10,
	},
];

export default function Home() {
	return (
		//add containter here for all so everythign is centered correctly
		<div className="">
			<HeroSection />
			<FeatureSteps
				features={features}
				title="Your Journey Starts Here"
				autoPlayInterval={4000}
				imageHeight="h-[500px]"
			/>

			{/* this shouldnt be alone we need to add some text or something on the right or left */}
			<RadialOrbitalTimeline timelineData={timelineData} />

			{/* this should be contained */}
			<div className=" py-40 dark:bg-black bg-white w-full">
				<div className="max-w-7xl mx-auto text-center">
					<p className="font-bold text-xl md:text-4xl dark:text-white text-black">
						Remote{" "}
						<span className="text-neutral-400">
							{"Connectivity".split("").map((word, idx) => (
								<motion.span
									key={idx}
									className="inline-block"
									initial={{ x: -10, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.5, delay: idx * 0.04 }}
								>
									{word}
								</motion.span>
							))}
						</span>
					</p>
					<p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
						Break free from traditional boundaries. Work from anywhere, at the
						comfort of your own studio apartment. Perfect for Nomads and
						Travellers.
					</p>
				</div>
				<WorldMap
					dots={[
						{
							start: {
								lat: 64.2008,
								lng: -149.4937,
							}, // Alaska (Fairbanks)
							end: {
								lat: 34.0522,
								lng: -118.2437,
							}, // Los Angeles
						},
						{
							start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
							end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
						},
						{
							start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
							end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
						},
						{
							start: { lat: 51.5074, lng: -0.1278 }, // London
							end: { lat: 28.6139, lng: 77.209 }, // New Delhi
						},
						{
							start: { lat: 28.6139, lng: 77.209 }, // New Delhi
							end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
						},
						{
							start: { lat: 28.6139, lng: 77.209 }, // New Delhi
							end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
						},
					]}
				/>
			</div>
			<ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
				<GridItem
					area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
					icon={<Box className="h-4 w-4" />}
					title="Do things the right way"
					description="Running out of copy so I'll write anything."
				/>
				<GridItem
					area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
					icon={<Settings className="h-4 w-4" />}
					title="The best AI code editor ever."
					description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
				/>
				<GridItem
					area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
					icon={<Lock className="h-4 w-4" />}
					title="You should buy Aceternity UI Pro"
					description="It's the best money you'll ever spend"
				/>
				<GridItem
					area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
					icon={<Sparkles className="h-4 w-4" />}
					title="This card is also built by Cursor"
					description="I'm not even kidding. Ask my mom if you don't believe me."
				/>
				<GridItem
					area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
					icon={<Search className="h-4 w-4" />}
					title="Coming soon on Aceternity UI"
					description="I'm writing the code as I record this, no shit."
				/>
			</ul>
			<StaggerTestimonials />
			<FAQ />
			<ContactSection />
			<Newsletter />
		</div>
	);
}
