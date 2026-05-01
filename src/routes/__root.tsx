import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import React from "react";

export const Route = createRootRoute({
  component: () => (
    <div className="bg-linear-to-b from-gray-600 to-gray-900 text-white min-h-screen font-proLight">
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});
