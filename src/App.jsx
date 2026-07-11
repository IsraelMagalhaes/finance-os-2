const sprintDeliverables = [
  'React + Vite configurados',
  'Tailwind CSS integrado',
  'ESLint e Prettier ativos',
  'Husky e lint-staged configurados',
  'Estrutura modular preparada',
  'Documentação inicial criada',
]

function App() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100">
      <section className="mx-auto max-w-5xl">
        <span className="inline-flex rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 text-sm font-semibold text-indigo-200">
          Finance OS · Sprint 0
        </span>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Fundação técnica
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              A base profissional do Finance OS está pronta.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Este incremento estabelece o ambiente, os padrões de qualidade e a
              organização que sustentarão as próximas sprints do produto.
            </p>
          </div>

          <aside className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 backdrop-blur">
            <h2 className="text-lg font-semibold">Entregas da sprint</h2>
            <ul className="mt-4 space-y-3">
              {sprintDeliverables.map((item) => (
                <li className="flex items-start gap-3 text-sm text-slate-300" key={item}>
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-400"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default App
