import { BUSINESS_TYPE_LINE, SERVICE_AREA_LINE } from '../../config/seo';

type ServiceAreaBlockProps = {
  className?: string;
  showBusinessType?: boolean;
};

const ServiceAreaBlock = ({ className = '', showBusinessType = false }: ServiceAreaBlockProps) => {
  return (
    <section className={`rounded-lg border border-red-200 bg-red-50 p-5 ${className}`.trim()}>
      {showBusinessType && <p className="text-sm text-gray-700 mb-2">{BUSINESS_TYPE_LINE}</p>}
      <p className="text-sm font-medium text-gray-900">{SERVICE_AREA_LINE}</p>
    </section>
  );
};

export default ServiceAreaBlock;
