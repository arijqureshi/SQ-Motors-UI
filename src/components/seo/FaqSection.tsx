import type { FaqItem } from '../../config/seo';

type FaqSectionProps = {
  title: string;
  items: FaqItem[];
  className?: string;
};

const FaqSection = ({ title, items, className = '' }: FaqSectionProps) => {
  if (!items.length) {
    return null;
  }

  return (
    <section className={`rounded-lg border border-gray-200 bg-white p-6 ${className}`.trim()}>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <article key={item.question} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
            <p className="text-gray-600">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
