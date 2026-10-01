'use client';

export default function GlobalError(props: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <h2 className="mb-4 text-xl font-bold">Something went wrong!</h2>
          <button
            type="button"
            onClick={() => props.reset()}
            className="rounded bg-white px-4 py-2 text-black hover:bg-neutral-200"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
