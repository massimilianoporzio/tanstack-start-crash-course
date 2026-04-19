/*
 *   Copyright (c) 2026 Massimiliano Porzio
 *   All rights reserved.
 */
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/skills/$skillId")({
	component: RouteComponent,
});

function RouteComponent() {
	const { skillId } = Route.useParams();
	return <div>Hello "/skills/{skillId}"!</div>;
}
