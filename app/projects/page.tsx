// app/projects/page.tsx
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Mes projets</h1>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        <li style={{ marginBottom: '2rem' }}>
          <h2>Projet 1 : Portfolio Next.js</h2>
          <p>Un site web portfolio réalisé avec Next.js et Tailwind CSS.</p>
          <Image src="https://repository-images.githubusercontent.com/398471444/a46577ea-a5fc-43ce-aa3e-1af608b09f58" alt="Capture du portfolio" width={600} height={400} />
          <p><a href="https://github.com/tonprofil/mon-portfolio" target="_blank" rel="noopener noreferrer">Voir le code sur GitHub</a></p>
        </li>
        <li>
          <h2>Projet 2 : Application React</h2>
          <p>Une application interactive avec React, gestion d’état et API.</p>
          {/* Ajouter une image et un lien si disponible */}
        </li>
        {/* Ajouter d’autres projets si besoin */}
      </ul>
    </main>
  );
}
