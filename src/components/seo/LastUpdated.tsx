import { SEO_BUILD_READABLE_DATE } from '../../generated/seoBuild';

type LastUpdatedProps = {
  className?: string;
  contextLabel: string;
};

const LastUpdated = ({ className = '', contextLabel }: LastUpdatedProps) => {
  return (
    <p className={`text-sm text-gray-600 ${className}`.trim()}>
      {contextLabel} updated regularly based on latest availability. Last updated {SEO_BUILD_READABLE_DATE}.
    </p>
  );
};

export default LastUpdated;
