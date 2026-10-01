export default function MarketingLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <main className="w-full">
        {props.children}
      </main>
    </div>
  );
}
