import { Link } from 'react-router-dom';

export type InternalLinkItem = {
  to: string;
  label: string;
  description?: string;
};

type InternalLinksPanelProps = {
  title: string;
  links: InternalLinkItem[];
  className?: string;
};

const InternalLinksPanel = ({ title, links, className = '' }: InternalLinksPanelProps) => {
  return (
    <section className={`rounded-lg border border-gray-200 bg-white p-6 ${className}`.trim()}>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">{title}</h2>
      <ul className="grid md:grid-cols-2 gap-4">
        {links.map((link) => (
          <li key={link.to} className="rounded-md border border-gray-100 p-4 hover:border-red-200 transition-colors">
            <Link to={link.to} className="font-semibold text-red-600 hover:text-red-700">
              {link.label}
            </Link>
            {link.description && <p className="text-sm text-gray-600 mt-2">{link.description}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InternalLinksPanel;
