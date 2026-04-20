/*
 *   Copyright (c) 2026 Massimiliano Porzio
 *   All rights reserved.
 */

import { createFileRoute, notFound, useRouter } from "@tanstack/react-router";
import SkillCard from "#/components/SkillCard";

// import SkillCard from "#/components/SkillCard";
const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon";

const loader = async () => {
	console.log("Loading home page data...('/' route)");
	const response = await fetch(POKE_API_URL);
	const data = await response.json();
	console.log("Home page data loaded:", data);
	//throw new Error("Simulated error in loader"); // Simulate an error to test the error component
	if (!data.results || data.results.length === 0) {
		throw notFound(); // Simulate a not found error to test the not found component
	}
	return data;
};
export const Route = createFileRoute("/")({
	component: App,
	loader: loader,
	pendingComponent: () => (
		<div className="p-14 text-center">Loading Pokemons...</div>
	),
	pendingMinMs: 300, //wait at least 300ms before showing the pending component
	errorComponent: ({ error }) => {
		const router = useRouter();
		return (
			<div className="p-14 text-center">
				<p>{error.message}</p>
				<button type="button" onClick={() => router.invalidate()}>
					Try Again
				</button>
			</div>
		);
	},
	notFoundComponent: () => (
		<div className="p-14 text-center text-gray-500">
			<p>Not Found</p>
		</div>
	),
});

function App() {
	const data = Route.useLoaderData();
	return (
		<main className="page-wrap px-4 pb-8 pt-14">
			<h1>Hello World from Tanstack</h1>
			<ul className="mt-6 list-none p-0 space-y-5">
				{data.results.map((pokemon: { name: string }) => (
					<li key={pokemon.name}>
						<SkillCard name={pokemon.name} />
					</li>
				))}
			</ul>
			{/* <ul className="mt-6 list-none p-0 space-y-5">
				<li>
					<SkillCard name="Tanstack Start" />
				</li>
				<li>
					<SkillCard name="TypeScript" />
				</li>
				<li>
					<SkillCard name="MongoDB" />
				</li>
			</ul> */}
		</main>
	);
}
