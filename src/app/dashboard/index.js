import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Link href="/dashboard" className="text-lg text-blue-600 underline">
        Go to Dashboard
      </Link>
    </div>
  );
}
