import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-y">
      <div className="container-x max-w-xl text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="h-display">Page not found.</h1>
        <p className="mt-4">
          The page you were looking for doesn&apos;t exist or has moved.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
