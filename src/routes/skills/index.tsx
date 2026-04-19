/*
 *   Copyright (c) 2026 Massimiliano Porzio
 *   All rights reserved.
 */
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/skills/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/skills/"!</div>;
}
