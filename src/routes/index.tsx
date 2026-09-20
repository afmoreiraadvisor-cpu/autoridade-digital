import { createFileRoute } from "@tanstack/react-router";

import tipster from "@/assets/tipster.jpg";
import tipsterAvatar from "@/assets/tipster-avatar.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Modelo — Página demonstrativa para produto digital" },
      {
        name: "description",
        content:
          "Página demonstrativa com estrutura editorial para apresentar um produto digital de forma clara e profissional.",
      },
      { property: "og:title", content: "Modelo — Página demonstrativa para produto digital" },
      {
        property: "og:description",
        content:
          "Modelo demonstrativo de apresentação para um produto digital.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const alunos = [
  "Conteúdo organizado",
  "Aulas práticas",
  "Materiais de apoio",
  "Acompanhamento",
  "Comunidade",
];

const movimentos = [
  {
    numero: "01",
    titulo: "Fundamentos",
    texto:
      "Apresente aqui os conceitos essenciais do seu produto e a transformação proposta ao público.",
  },
  {
    numero: "02",
    titulo: "Aplicação",
    texto:
      "Explique como o conteúdo pode ser colocado em prática por meio de aulas, exercícios e materiais.",
  },
  {
    numero: "03",
    titulo: "Evolução",
    texto:
      "Mostre como a proposta acompanha o aluno na construção de um processo mais claro e consistente.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-cream font-sans text-brand">
      {/* Header */}
      <header className="border-b border-brand/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="font-display text-2xl font-semibold tracking-tight">
            Modelo<span className="text-accent">.</span>
          </div>
          <nav className="hidden items-center gap-10 text-[13px] font-medium tracking-wide text-ink md:flex">
            <a href="#metodo" className="transition hover:text-accent">
              Conteúdo
            </a>
            <a href="#resultados" className="transition hover:text-accent">
              Estrutura
            </a>
            <a href="#mentor" className="transition hover:text-accent">
              Especialista
            </a>
            <a href="#acesso" className="text-brand underline decoration-accent underline-offset-4">
              Acesso
            </a>
          </nav>
          <a
            href="#acesso"
            className="rounded-full bg-brand px-6 py-3 text-[13px] font-medium text-cream transition hover:bg-accent"
          >
            Ver exemplo
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-24">
          <div className="mb-8 flex items-center gap-3">
            <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-accent">
              Página demonstrativa · 2026
            </span>
            <span className="h-px w-16 bg-accent/50" />
          </div>
          <h1 className="max-w-4xl font-display text-5xl leading-[1.02] font-medium tracking-tight md:text-7xl">
            Uma apresentação clara transforma conhecimento em{" "}
            <span className="italic text-accent">valor percebido.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink">
            Este é um modelo neutro para demonstrar a apresentação de um produto digital, sem dados,
            promessas ou resultados comerciais reais.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#acesso"
              className="rounded-full bg-brand px-8 py-4 text-sm font-semibold text-cream transition hover:bg-accent"
            >
              Conhecer a estrutura
            </a>
            <a
              href="#metodo"
              className="text-sm font-medium text-ink underline decoration-accent underline-offset-4"
            >
              Ver conteúdo
            </a>
          </div>
          <div className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-brand/10 pt-8">
            <div>
              <div className="font-display text-4xl font-semibold">12</div>
              <div className="mt-1 text-[13px] text-ink/70">módulos ilustrativos</div>
            </div>
            <div>
              <div className="font-display text-4xl font-semibold">3</div>
              <div className="mt-1 text-[13px] text-ink/70">etapas de conteúdo</div>
            </div>
            <div>
              <div className="font-display text-4xl font-semibold">100%</div>
              <div className="mt-1 text-[13px] text-ink/70">conteúdo demonstrativo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-brand/10 bg-sand/40 py-4">
        <div className="marquee font-display text-lg italic text-ink/50">
          {[...alunos, ...alunos].map((c, i) => (
            <span key={i} className="flex items-center gap-12">
              <span>{c}</span>
              <span>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Método */}
      <section id="metodo" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="max-w-md font-display text-4xl leading-tight font-medium tracking-tight md:text-5xl">
            Uma estrutura em três etapas
          </h2>
          <span className="font-display text-lg italic text-accent">01 — 03</span>
        </div>
        <div className="grid gap-px border border-brand/10 bg-brand/10 md:grid-cols-3">
          {movimentos.map((m) => (
            <div key={m.numero} className="bg-cream p-10">
              <div className="font-display text-6xl font-semibold text-sand">{m.numero}</div>
              <h3 className="mt-6 font-display text-2xl font-medium">{m.titulo}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink">{m.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mentor */}
      <section id="mentor" className="bg-brand text-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <div>
              <div className="text-[11px] font-semibold tracking-[0.28em] uppercase text-accent">
                Especialista ilustrativo
              </div>
              <h2 className="mt-5 font-display text-4xl leading-tight font-medium tracking-tight md:text-5xl">
                Nome do especialista
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-cream/70">
                Use este espaço para apresentar a trajetória, a experiência e a abordagem de quem
                conduz o produto. O texto e as imagens desta página são apenas exemplos visuais.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={tipsterAvatar}
                  alt="Retrato ilustrativo do especialista"
                  loading="lazy"
                  width={816}
                  height={816}
                  className="size-14 rounded-full object-cover outline-1 -outline-offset-1 outline-cream/20"
                />
                <div>
                  <div className="font-display text-lg font-medium">Nome do especialista</div>
                  <div className="text-[13px] text-cream/60">Especialidade · Produto</div>
                </div>
              </div>
            </div>
            <img
              src={tipster}
              alt="Retrato editorial ilustrativo"
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-lg object-cover outline-1 -outline-offset-1 outline-cream/20"
            />
          </div>
        </div>
      </section>

      {/* Resultados / Oferta */}
      <section id="resultados" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-3">
          <figure className="md:col-span-2">
            <blockquote className="font-display text-3xl leading-snug font-medium tracking-tight italic md:text-4xl">
              “Este espaço pode apresentar uma percepção sobre a experiência, sempre usando um
              depoimento real e autorizado na versão final.”
            </blockquote>
            <figcaption className="mt-6 text-sm text-ink">
              Nome do cliente — depoimento demonstrativo
            </figcaption>
          </figure>
          <div id="acesso" className="rounded-2xl border border-brand/10 bg-sand/40 p-8">
            <div className="text-[11px] font-semibold tracking-[0.28em] uppercase text-accent">
              Acesso
            </div>
            <div className="mt-4 font-display text-4xl font-semibold">Valor ilustrativo</div>
            <p className="mt-3 text-[15px] text-ink">
              Descreva aqui o formato, a duração e o que estará incluído na oferta real.
            </p>
            <a
              href="#acesso"
              className="mt-6 block w-full rounded-full bg-brand py-4 text-center text-sm font-semibold text-cream transition hover:bg-accent"
            >
              Botão demonstrativo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
          <div className="font-display text-xl font-semibold">
            Modelo<span className="text-accent">.</span>
          </div>
          <div className="text-center md:text-left">
            <p className="text-[13px] text-ink/60">© 2026 Modelo demonstrativo.</p>
            <p className="mt-1 text-[11px] text-ink/50">
              +18 · Aposte com responsabilidade. Apostas envolvem risco de perda financeira.
            </p>
          </div>
          <div className="flex gap-6 text-[13px] text-ink">
            <a href="#acesso" className="transition hover:text-accent">
              Termos
            </a>
            <a href="#acesso" className="transition hover:text-accent">
              Privacidade
            </a>
            <a href="#acesso" className="transition hover:text-accent">
              Contato
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
