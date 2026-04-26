/*
 *   Copyright (c) 2026 Massimiliano Porzio
 *   All rights reserved.
 */

import { createFileRoute, notFound } from "@tanstack/react-router";
import { getSkillById } from "#/server/skills";

export const Route = createFileRoute("/skills/$skillId")({
	loader: async ({ params }) => {
		console.log(`Loading data for skillId: ${params.skillId}...`);

		const skill = await getSkillById({ data: params.skillId });

		if (!skill) throw notFound(); // Simulate a not found error if skill is not found
		console.log(`Data loaded for skillId: ${params.skillId}`);
		return { skill };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Skill Not Found" }] };

		const { skill } = loaderData;
		return {
			meta: [
				//SEO standard meta tags
				{ title: `Skill: ${skill.name} | Agent Skills` },
				{
					name: "description",
					content: `Details about skill ${skill.shortSummary}`,
				},
				//OpenGraph meta tags
				{
					property: "og:title",
					content: `Skill: ${skill.name} | Agent Skills`,
				},
				{
					property: "og:description",
					content: ` ${skill.shortSummary}`,
				},
				{ property: "og:type", content: "article" },
				{ property: "og:image", content: skill.coverImageUrl },
			],
		};
	},
	component: RouteComponent,
});

function RouteComponent() {
	const { skill } = Route.useLoaderData() || {};
	return (
		<main>
			<h1>{skill.name}</h1>
		</main>
	);
}
