import Link from 'next/link';
import { NavBar } from '@/components/NavBar';

export default function CatchAllPage() {
  return (
    <>
      <NavBar />
      <main className="h-[calc(100vh-4.5rem)] w-full flex flex-col justify-center items-center">
        <h1 className="text-9xl font-extrabold tracking-widest">404</h1>
        <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <button className="mt-5">
          <div className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 bg-background border border-current">
              <Link href="/">Go Home</Link>
            </span>
          </div>
        </button>
      </main>
    </>
  );
}
