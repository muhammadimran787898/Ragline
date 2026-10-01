type FeaturePipProps = {
  variant?: 'fire' | 'green';
};

export const FeaturePip = (props?: FeaturePipProps) => {
  const isGreen = props?.variant === 'green';
  return (
    <span
      aria-hidden="true"
      className="inline-block size-2.5 shrink-0 rounded-[2px]"
      style={
        isGreen
          ? {
              background: 'radial-gradient(circle at 55% 55%, #74FFFF 0%, #36C183 50%, #176637 100%)',
              boxShadow: '0 0 8px 1.5px rgba(54, 193, 131, 0.75), 0 0 14px 3px rgba(44, 197, 105, 0.45)',
            }
          : {
              background: `
                radial-gradient(circle at 25% 78%, #FFFFFF 0%, #FFEBF2 20%, #F472B6 40%, transparent 65%),
                radial-gradient(circle at 75% 25%, #FB923C 0%, #EF4444 48%, transparent 75%),
                linear-gradient(135deg, #E11D48 0%, #9333EA 50%, #4F46E5 100%)
              `,
              boxShadow: '0 0 6px 1.5px rgba(244, 114, 182, 0.65), 0 0 10px 2px rgba(239, 68, 68, 0.45)',
            }
      }
    />
  );
};

export const GreenFeaturePip = () => <FeaturePip variant="green" />;


