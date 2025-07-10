import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-8">
      <main className="max-w-4xl text-center">
        <Image
          className="mx-auto mb-8 dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-5xl font-extrabold mb-6">Bienvenue sur mon Portfolio</h1>
        <p className="text-lg mb-8">
          Découvrez mes projets, compétences, et comment me contacter.
        </p>
        <div className="flex justify-center gap-6">
          {"."}
          <a
            href="/about"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            À propos
          </a><br /> {"."}
          <a
            href="/projects"
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            Projets
          </a><br /> {"."}
          <a
            href="/contact"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
          >
            Contact
          </a>
        </div>
      </main>
    </div>
  );
}
