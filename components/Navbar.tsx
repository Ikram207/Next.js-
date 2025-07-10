'use client';
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-4 bg-gray-100 shadow">
      <Link href="/">Accueil</Link>
      <Link href="/about">À propos</Link>
      <Link href="/projects">Projets</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
