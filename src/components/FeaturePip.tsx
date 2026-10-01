type FeaturePipProps = {
  variant?: 'fire' | 'green' | 'red';
};

export const FeaturePip = (props?: FeaturePipProps) => {
  const isGreen = props?.variant === 'green';
  return (
    <span
      aria-hidden="true"
      className={`inline-block size-2.5 shrink-0 ${isGreen || props?.variant === 'red' ? 'rounded-[2px]' : 'rounded-none'}`}
      style={
        isGreen
          ? {
              background: 'radial-gradient(circle at 55% 55%, #74FFFF 0%, #36C183 50%, #176637 100%)',
              boxShadow: '0 0 8px 1.5px rgba(54, 193, 131, 0.75), 0 0 14px 3px rgba(44, 197, 105, 0.45)',
            }
          : props?.variant === 'red'
            ? {
                background: 'radial-gradient(circle at 30% 30%, #FF8A8C 0%, #FD1C20 45%, #8C0A0D 100%)',
                boxShadow: '0 0 6px 1.5px rgba(253, 28, 32, 0.65), 0 0 10px 2px rgba(253, 28, 32, 0.45)',
              }
            : {
              background: `
                radial-gradient(ellipse at 68% 100%, #FFFFFF 0%, #FFFFFF 24%, #FFE5F2 38%, transparent 68%),
                radial-gradient(ellipse at 95% 5%, #FFAF64 0%, #FF6653 35%, transparent 75%),
                linear-gradient(135deg, #9D3F92 0%, #F278C9 55%, #FFFFFF 100%)
              `,
              boxShadow: '0 0 6px 1.5px rgba(255, 175, 150, 0.55), 0 0 12px 3px rgba(244, 114, 182, 0.4)',
            }
      }
    />
  );
};

export const GreenFeaturePip = () => <FeaturePip variant="green" />;
