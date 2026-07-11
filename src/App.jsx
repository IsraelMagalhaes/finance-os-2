import PropTypes from 'prop-types'
import { useTheme } from './hooks/useTheme.js'

const colorGroups = [
  {
    title: 'Marca',
    colors: [
      ['Indigo 500', 'var(--color-brand-500)'],
      ['Indigo 600', 'var(--color-brand-600)'],
      ['Cyan 400', 'var(--color-accent-400)'],
    ],
  },
  {
    title: 'Semânticas',
    colors: [
      ['Sucesso', 'var(--color-success)'],
      ['Aviso', 'var(--color-warning)'],
      ['Perigo', 'var(--color-danger)'],
      ['Informação', 'var(--color-info)'],
    ],
  },
]

const foundations = [
  ['Espaçamento', 'Escala modular de 4 px'],
  ['Raios', '6, 10, 14 e 18 px'],
  ['Movimento', '80 a 320 ms'],
  ['Tipografia', 'Inter e fontes do sistema'],
]

function ThemeOption({ active, children, onClick }) {
  return (
    <button
      aria-pressed={active}
      className={`rounded-md border px-3 py-2 text-sm font-semibold transition duration-150 ${
        active
          ? 'border-brand-400 bg-brand-500 text-white shadow-md'
          : 'border-border-subtle bg-surface-secondary text-text-secondary hover:border-border-strong hover:text-text-primary'
      }`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}

ThemeOption.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

function App() {
  const { resolvedTheme, setTheme, theme } = useTheme()

  return (
    <main className="min-h-screen bg-background px-5 py-8 text-text-primary sm:px-8 lg:px-12">
      <section className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-6 border-b border-border-subtle pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1 text-sm font-semibold text-brand-300">
              Finance OS · Sprint 1.1
            </span>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.22em] text-accent-400">
              Design System Foundations
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              A identidade visual agora possui uma fonte única da verdade.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
              Cores, tema, espaçamento, raios, sombras, movimento e camadas foram
              centralizados em tokens reutilizáveis para todas as próximas telas.
            </p>
          </div>

          <div className="rounded-lg border border-border-subtle bg-surface-primary p-3 shadow-[var(--shadow-low)]">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-text-muted">
              Tema · {resolvedTheme}
            </p>
            <div className="flex flex-wrap gap-2">
              <ThemeOption active={theme === 'dark'} onClick={() => setTheme('dark')}>
                Escuro
              </ThemeOption>
              <ThemeOption active={theme === 'light'} onClick={() => setTheme('light')}>
                Claro
              </ThemeOption>
              <ThemeOption active={theme === 'system'} onClick={() => setTheme('system')}>
                Sistema
              </ThemeOption>
            </div>
          </div>
        </header>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-lg border border-border-subtle bg-surface-primary p-6 shadow-[var(--shadow-low)] sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-text-muted">Paleta oficial</p>
                <h2 className="mt-1 text-2xl font-bold">Tokens de cor</h2>
              </div>
              <span className="rounded-full bg-success/15 px-3 py-1 text-xs font-bold text-[var(--color-success-text)]">
                Dark + Light
              </span>
            </div>

            <div className="mt-7 space-y-7">
              {colorGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm font-semibold text-text-secondary">
                    {group.title}
                  </h3>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {group.colors.map(([name, color]) => (
                      <div
                        className="overflow-hidden rounded-md border border-border-subtle bg-surface-secondary"
                        key={name}
                      >
                        <div className="h-16" style={{ background: color }} />
                        <p className="px-3 py-2 text-xs font-semibold text-text-secondary">
                          {name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <aside className="space-y-6">
            <section className="rounded-lg border border-border-subtle bg-surface-primary p-6 shadow-[var(--shadow-low)]">
              <p className="text-sm font-semibold text-text-muted">Fundações</p>
              <h2 className="mt-1 text-xl font-bold">Regras compartilhadas</h2>
              <dl className="mt-5 divide-y divide-border-subtle">
                {foundations.map(([term, description]) => (
                  <div
                    className="flex items-start justify-between gap-5 py-4 first:pt-0 last:pb-0"
                    key={term}
                  >
                    <dt className="font-semibold">{term}</dt>
                    <dd className="text-right text-sm text-text-secondary">
                      {description}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="rounded-lg border border-brand-400/30 bg-brand-500/10 p-6">
              <p className="text-sm font-semibold text-brand-300">Próxima entrega</p>
              <h2 className="mt-2 text-xl font-bold">Sprint 1.2 · Componentes base</h2>
              <p className="mt-3 text-sm leading-6 text-text-secondary">
                Button, Card, Input, Select, Badge, Modal, Toast, Skeleton e estados de
                feedback serão construídos sobre estes tokens.
              </p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default App
