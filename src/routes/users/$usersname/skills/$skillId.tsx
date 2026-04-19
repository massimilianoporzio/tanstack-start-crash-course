/*
 *   Copyright (c) 2026 Massimiliano Porzio
 *   All rights reserved.
 */
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/users/$usersname/skills/$skillId")({
	component: RouteComponent,
});

function RouteComponent() {
	const { usersname, skillId } = Route.useParams();
	return (
		<div>
			{usersname}'s skill: {skillId}
		</div>
	);
}
