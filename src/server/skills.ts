/*
 *   Copyright (c) 2026 Massimiliano Porzio
 *   All rights reserved.
 */

export type Skill = {
	id: string;
	name: string;
	shortSummary: string;
	coverImageUrl: string;
};

const skills: Skill[] = [
	{
		id: "react-router",
		name: "React Router",
		shortSummary:
			"Routing moderno per applicazioni React con data loading integrato.",
		coverImageUrl:
			"https://images.unsplash.com/photo-1633356122544-f134324a6cee",
	},
	{
		id: "typescript",
		name: "TypeScript",
		shortSummary: "Tipizzazione statica per JavaScript su larga scala.",
		coverImageUrl:
			"https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
	},
	{
		id: "tanstack-router",
		name: "TanStack Router",
		shortSummary: "File-based routing e data APIs type-safe per app React.",
		coverImageUrl:
			"https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
	},
];

export async function getSkillById({ data }: { data: string }) {
	return skills.find((skill) => skill.id === data);
}
