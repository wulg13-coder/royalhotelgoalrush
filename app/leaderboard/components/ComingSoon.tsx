import Image from "next/image";
import Link from "next/link";

type ComingSoonProps = {
  title: string;
};

export default function ComingSoon({ title }: ComingSoonProps) {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      <Image
        src="/images/royal-hotel-logo-cropped.jpg"
        alt="Royal Hotel"
        width={220}
        height={220}
        priority
        className="mb-8 w-[180px] h-auto"
      />

      <h1 className="text-4xl font-bold text-yellow-400 mb-6">
        ⚽ Under Development
      </h1>

      <h2 className="text-2xl font-semibold mb-6">
        {title}
      </h2>

      <p className="max-w-md text-gray-300 leading-7">
        This section is currently under development.
      </p>

      <p className="max-w-md text-gray-300 leading-7 mt-4">
        We're adding new features throughout the season as Goal Rush continues to evolve.
      </p>

      <p className="mt-6 text-gray-400">
        Please check back soon.
      </p>

      <Link
        href="/"
        className="mt-10 bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition"
      >
        ← Return to Home
      </Link>

      <p className="text-gray-500 text-sm mt-12">
        Last updated: August 2026
      </p>
    </main>
  );
}