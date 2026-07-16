import {
  Outlet,
  Link,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="d-flex min-vh-100 align-items-center justify-content-center px-4">
      <div className="text-center" style={{ maxWidth: "28rem" }}>
        <h1 className="display-1 fw-bold text-primary">404</h1>
        <h2 className="h4 fw-semibold mt-3">Page not found</h2>
        <p className="text-muted mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-4">
          <Link to="/" className="btn btn-primary">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yousef Maitah",
  url: "https://yousefmaitah.com",
  image: "https://yousefmaitah.com/og-image.png",
  jobTitle: "Virtual Propulsion Engineer",
  worksFor: { "@type": "Organization", name: "General Motors" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Michigan" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ann Arbor",
    addressRegion: "MI",
  },
  sameAs: [
    "https://linkedin.com/in/yousef-maitah/",
    "https://github.com/ymaitah",
  ],
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32.png",
      },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

// Runs before first paint so the saved/system theme applies without a flash.
const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}document.documentElement.setAttribute("data-bs-theme",t);}catch(e){}})();`;

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-bs-theme="light" suppressHydrationWarning>
      <head>
        <HeadContent />
        {/* Rendered here rather than via head() meta, which dedupes by name. */}
        <meta
          name="theme-color"
          content="#f4f6f8"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#0d1827"
          media="(prefers-color-scheme: dark)"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
