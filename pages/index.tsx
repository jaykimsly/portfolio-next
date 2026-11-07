import Head from "next/head";
import Header from "../components/Header";
import ErrorBoundary from "../components/ErrorBoundary";
import Identity from "../components/Identity";
import About from "../components/About";
import Experience from "../components/Experience";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Portfolios from "../components/Portfolios";
import { content } from "../lib/content";

const { person, services } = content;
const pageTitle = `${person.name} - ${person.title}`;

const sections = [
  { id: "identity", snap: "snap-start", Component: Identity },
  { id: "about", snap: "snap-start", Component: About },
  { id: "experience", snap: "snap-start", Component: Experience },
  { id: "services", snap: "snap-start", Component: Services },
  { id: "skills", snap: "snap-start", Component: Skills },
  { id: "projects", snap: "snap-start", Component: Projects },
  { id: "contact", snap: "snap-start", Component: Contact },
  { id: "portfolios", snap: "snap-start", Component: Portfolios },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${pageTitle} | Portfolio`}</title>
        <meta name="description" content={person.summary} />
        <meta
          name="keywords"
          content={`${person.name}, ${person.title}, ${services.map((s) => s.name).join(", ")}, Johannesburg`}
        />
        <meta name="author" content={person.name} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={person.summary} />
        <meta property="og:image" content={person.profileImage} />
        <meta property="og:url" content={person.siteUrl} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={person.summary} />
        <meta name="twitter:image" content={person.profileImage} />

        <link rel="icon" href={person.profileImage} />
        <link rel="canonical" href={person.siteUrl} />
      </Head>

      <div className="bg-surface text-white h-screen snap-y snap-proximity overflow-y-scroll overflow-x-hidden z-0 scroll-smooth">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:start-2 focus:z-50 focus:bg-brand focus:text-black focus:px-4 focus:py-2 rounded"
        >
          Skip to content
        </a>
        <Header />

        <main id="main">
          {sections.map(({ id, snap, Component }) => (
            <section key={id} id={id} className={snap}>
              <ErrorBoundary>
                <Component />
              </ErrorBoundary>
            </section>
          ))}
        </main>

        <footer className="py-8 text-center text-sm text-gray-500">
          <a href="#identity" className="hover:text-brand">
            Back to top
          </a>
        </footer>
      </div>
    </>
  );
}
