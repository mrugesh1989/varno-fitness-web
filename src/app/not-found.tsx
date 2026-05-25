import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <h1 className="font-display text-4xl font-bold uppercase text-white">404</h1>
      <p className="mt-4 text-stone-400">That page does not exist.</p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-md bg-brand-accent px-6 py-3 text-sm font-semibold text-white hover:bg-brand-accentHover"
      >
        Back home
      </Link>
    </div>
  );
}
