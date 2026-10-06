const STACK_DATA = [
  {
    category: "Core Backend",
    items: ["Python (FastAPI, AsyncIO)", "PHP"]
  },
  {
    category: "Infrastructure", 
    items: ["Supabase", "PostgreSQL", "Docker"]
  },
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Vite", "Tailwind CSS"]
  },
  {
    category: "Integrations",
    items: ["REST APIs", "Webhooks", "amoCRM", "LLM APIs"]
  }
];

export default function Stack() {
  return (
    <section 
      id="stack" 
      className="mx-auto w-full max-w-5xl scroll-mt-8 px-6 py-32 sm:px-8 sm:py-40"
    >
      <h2 className="mb-16 text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">
        System Architecture & Stack
      </h2>
      
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {STACK_DATA.map(({ category, items }) => (
          <div key={category} className="space-y-4">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
              {category}
            </h3>
            <ul className="space-y-2">
              {items.map((item) => (
                <li 
                  key={item}
                  className="font-mono text-sm text-gray-600 dark:text-gray-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}