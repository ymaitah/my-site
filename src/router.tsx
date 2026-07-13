import { createRouter, useRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

function DefaultErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div className="d-flex min-vh-100 align-items-center justify-content-center px-4">
      <div className="text-center" style={{ maxWidth: "28rem" }}>
        <h1 className="h3 fw-bold">Something went wrong</h1>
        <p className="text-muted mt-2">
          An unexpected error occurred. Please try again.
        </p>
        {import.meta.env.DEV && error.message && (
          <pre
            className="mt-3 p-3 bg-light border rounded text-start text-danger small overflow-auto"
            style={{ maxHeight: "10rem" }}
          >
            {error.message}
          </pre>
        )}
        <div className="mt-4 d-flex justify-content-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn btn-outline-secondary">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent,
  });

  return router;
};
