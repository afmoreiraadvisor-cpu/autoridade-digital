import { createFileRoute } from "@tanstack/react-router";

import tipster from "@/assets/tipster.jpg";
import tipsterAvatar from "@/assets/tipster-avatar.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Método — Apostas esportivas com gestão, não com sorte" },
      {
        name: "description",
        content:
          "Um sistema de 12 semanas para apostadores dominarem gestão de banca, leitura de mercado e valor esperado — com constância, sem depender de cravada ou de sorte.",
      },
      { property: "og:title", content: "Método — Apostas esportivas com gestão, não com sorte" },
      {
        property: "og:description",
        content:
          "Um sistema de 12 semanas para apostadores dominarem gestão de banca, leitura de mercado e valor esperado.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const alunos = [
  "Rafael M. — Futebol · Over/Under",
  "Bruna L. — Tênis · Circuitos ATP",
  "Diego S. — Basquete · NBA",
  "Carla P. — Mercados asiáticos",
  "Thiago R. — Futebol · Mercado de cantos",
];

const movimentos = [
  {
    numero: "01",
    titulo: "Gestão de banca",
    texto:
      "Você aprende a proteger o capital: stakes, limites e plano de perda. Sobreviver primeiro — lucrar sempre.",
  },
  {
    numero: "02",
    titulo: "Valor esperado",
    texto:
      "Leitura de odds e linhas para identificar valor real no mercado. Não é palpite — é probabilidade e matemática.",
  },
  {
    numero: "03",
    titulo: "Rotina de apostador",
    texto:
      "Um processo semanal de análise, registro e revisão que transforma apostas isoladas em resultado consistente.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-cream font-sans text-brand">
      {/* Header */}
      <header className="border-b border-brand/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="font-display text-2xl font-semibold tracking-tight">
            Método<span className="text-accent">.</span>
          </div>
          <nav className="hidden items-center gap-10 text-[13px] font-medium tracking-wide text-ink md:flex">
            <a href="#metodo" className="transition hover:text-accent">
              Método
            </a>
            <a href="#resultados" className="transition hover:text-accent">
              Resultados
            </a>
            <a href="#mentor" className="transition hover:text-accent">
              Mentor
            </a>
            <a href="#acesso" className="text-brand underline decoration-accent underline-offset-4">
              Acesso
            </a>
          </nav>
          <a
            href="#acesso"
            className="rounded-full bg-brand px-6 py-3 text-[13px] font-medium text-cream transition hover:bg-accent"
          >
            Comprar agora
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-24">
          <div className="mb-8 flex items-center gap-3">
            <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-accent">
              Mentoria de apostas · 2026
            </span>
            <span className="h-px w-16 bg-accent/50" />
          </div>
          <h1 className="max-w-4xl font-display text-5xl leading-[1.02] font-medium tracking-tight md:text-7xl">
            A banca cresce quando a aposta para de ser chute e vira{" "}
            <span className="italic text-accent">método.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink">
            Um sistema de 12 semanas para apostadores dominarem gestão de banca, leitura de mercado
            e valor esperado — sem depender de "cravada" ou de sorte.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#acesso"
              className="rounded-full bg-brand px-8 py-4 text-sm font-semibold text-cream transition hover:bg-accent"
            >
              Quero apostar com método
            </a>
            <a
              href="#metodo"
              className="text-sm font-medium text-ink underline decoration-accent underline-offset-4"
            >
              Ver como funciona
            </a>
          </div>
          <div className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-brand/10 pt-8">
            <div>
              <div className="font-display text-4xl font-semibold">+3.200</div>
              <div className="mt-1 text-[13px] text-ink/70">apostadores no sistema</div>
            </div>
            <div>
              <div className="font-display text-4xl font-semibold">R$ 18M</div>
              <div className="mt-1 text-[13px] text-ink/70">em banca gerida pela turma</div>
            </div>
            <div>
              <div className="font-display text-4xl font-semibold">9 / 10</div>
              <div className="mt-1 text-[13px] text-ink/70">nota média dos alunos</div>
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
            O método em três movimentos
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
                Quem conduz
              </div>
              <h2 className="mt-5 font-display text-4xl leading-tight font-medium tracking-tight md:text-5xl">
                Rafael Monteiro
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-cream/70">
                Ex-trader esportivo com 8 anos nos mercados asiáticos, já treinou mais de 3.200
                apostadores a trocar impulso por processo. O Método é o condensado de uma década
                dentro das linhas.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={tipsterAvatar}
                  alt="Rafael Monteiro"
                  loading="lazy"
                  width={816}
                  height={816}
                  className="size-14 rounded-full object-cover outline-1 -outline-offset-1 outline-cream/20"
                />
                <div>
                  <div className="font-display text-lg font-medium">Rafael Monteiro</div>
                  <div className="text-[13px] text-cream/60">Fundador · Método</div>
                </div>
              </div>
            </div>
            <img
              src={tipster}
              alt="Retrato editorial de Rafael Monteiro"
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
              "Em seis semanas saí do prejuízo. Em doze, fechei o primeiro trimestre com ROI
              positivo sem dobrar stake nenhuma."
            </blockquote>
            <figcaption className="mt-6 text-sm text-ink">
              Diego S. — Basquete · NBA · +21% de ROI no trimestre
            </figcaption>
          </figure>
          <div id="acesso" className="rounded-2xl border border-brand/10 bg-sand/40 p-8">
            <div className="text-[11px] font-semibold tracking-[0.28em] uppercase text-accent">
              Acesso
            </div>
            <div className="mt-4 font-display text-5xl font-semibold">R$ 1.490</div>
            <p className="mt-3 text-[15px] text-ink">
              12 semanas de mentoria, comunidade e planilhas de gestão de banca. Pagamento único.
            </p>
            <a
              href="#"
              className="mt-6 block w-full rounded-full bg-brand py-4 text-center text-sm font-semibold text-cream transition hover:bg-accent"
            >
              Garantir minha vaga
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
          <div className="font-display text-xl font-semibold">
            Método<span className="text-accent">.</span>
          </div>
          <div className="text-center md:text-left">
            <p className="text-[13px] text-ink/60">© 2026 Método — Todos os direitos reservados.</p>
            <p className="mt-1 text-[11px] text-ink/50">
              +18 · Aposte com responsabilidade. Apostas envolvem risco de perda financeira.
            </p>
          </div>
          <div className="flex gap-6 text-[13px] text-ink">
            <a href="#" className="transition hover:text-accent">
              Termos
            </a>
            <a href="#" className="transition hover:text-accent">
              Privacidade
            </a>
            <a href="#" className="transition hover:text-accent">
              Contato
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
