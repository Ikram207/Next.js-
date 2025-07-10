// app/layout.tsx
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
          <Link href="/">Accueil</Link> |{" "}
          <Link href="/about">À propos</Link> |{" "}
          <Link href="/projects">Projets</Link> |{" "}
          <Link href="/contact">Contact</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
