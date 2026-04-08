import Breadcrumbs from '../components/seo/Breadcrumbs';
import SeoHead from '../components/seo/SeoHead';
import { CORE_PAGES, HOME_BREADCRUMB, LOCAL_PAGES, canonicalUrlForPath, getCorePageById } from '../config/seo';

const sitemapMeta = getCorePageById('sitemap');

const SitemapPage = () => {
  const corePages = CORE_PAGES.filter((page) => page.id !== 'home').filter((page) => page.id !== 'sitemap');

  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoHead
        title={sitemapMeta.title}
        description={sitemapMeta.description}
        path={sitemapMeta.path}
        breadcrumbs={[HOME_BREADCRUMB, { label: 'Sitemap', path: '/sitemap' }]}
      />

      <div className="max-w-5xl mx-auto">
        <Breadcrumbs items={[HOME_BREADCRUMB, { label: 'Sitemap', path: '/sitemap' }]} />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">SQ Motors Sitemap</h1>
        <p className="text-lg text-gray-600 mb-10">Use this page to navigate every major section of the website.</p>

        <section className="rounded-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Core Pages</h2>
          <ul className="grid md:grid-cols-2 gap-3 text-sm">
            <li><a className="text-red-600 hover:text-red-700" href={canonicalUrlForPath('/')}>Home</a></li>
            {corePages.map((page) => (
              <li key={page.id}>
                <a className="text-red-600 hover:text-red-700" href={canonicalUrlForPath(page.path)}>{page.title}</a>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Area Pages</h2>
          <ul className="grid md:grid-cols-2 gap-3 text-sm">
            {LOCAL_PAGES.map((page) => (
              <li key={page.id}>
                <a className="text-red-600 hover:text-red-700" href={canonicalUrlForPath(page.path)}>
                  {page.city}, Missouri
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-lg border border-gray-200 p-6">
          <details>
            <summary className="cursor-pointer text-sm font-semibold text-gray-900">
              Technical Resources
            </summary>
            <ul className="space-y-2 text-sm mt-4">
              <li><a className="text-red-600 hover:text-red-700" href={canonicalUrlForPath('/sitemap.xml')}>XML Sitemap</a></li>
              <li><a className="text-red-600 hover:text-red-700" href={canonicalUrlForPath('/llms.txt')}>LLMs.txt</a></li>
              <li><a className="text-red-600 hover:text-red-700" href={canonicalUrlForPath('/.well-known/llms.txt')}>Well-Known LLMs.txt</a></li>
              <li><a className="text-red-600 hover:text-red-700" href={canonicalUrlForPath('/llm/index.md')}>Markdown Index</a></li>
            </ul>
          </details>
        </section>
      </div>
    </div>
  );
};

export default SitemapPage;
