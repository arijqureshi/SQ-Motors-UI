type LastUpdatedProps = {
  className?: string;
  contextLabel: string;
};

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'America/Chicago',
});

const LastUpdated = ({ className = '', contextLabel }: LastUpdatedProps) => {
  const todayDate = dateFormatter.format(new Date());

  return (
    <p className={`text-sm text-gray-600 ${className}`.trim()}>
      {contextLabel} updated regularly based on latest availability. Last updated {todayDate}.
    </p>
  );
};

export default LastUpdated;
