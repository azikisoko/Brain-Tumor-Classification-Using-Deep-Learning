import Link from "next/link";
import { BrainCircuit } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <BrainCircuit className="h-7 w-7 text-sky-500" />
          <span className="text-xl font-bold text-slate-900">
            Brain Tumor Classification
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-slate-600 transition hover:text-sky-500"
          >
            Home
          </Link>

          <Link
            href="/classifier"
            className="text-slate-600 transition hover:text-sky-500"
          >
            Classifier
          </Link>

          <Link
            href="/about"
            className="text-slate-600 transition hover:text-sky-500"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}