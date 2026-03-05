<script lang="ts">
  import {
    ArrowDown,
    ArrowRight,
    CreditCard,
    Gauge,
    Smartphone,
    Star
  } from '@lucide/svelte';

  let emailInput = $state<HTMLInputElement | null>(null);

  function focusEmailInput() {
    emailInput?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    emailInput?.focus();
  }
</script>

<nav
  class="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-md"
>
  <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
    <span class="text-xl font-bold tracking-tight text-white">Pedifast</span>
    <div class="flex items-center gap-3">
      <a
        href="#por-que-nosotros"
        class="text-sm font-medium text-white/60 transition-colors hover:text-white"
      >
        ¿Por qué nosotros?
      </a>
      <button
        onclick={focusEmailInput}
        class="gradient-btn rounded-full px-4 py-2 text-sm"
      >
        Avisame
      </button>
    </div>
  </div>
</nav>

<section
  class="relative flex min-h-screen items-center overflow-hidden bg-[#0A0A0A] pt-20"
  style="background-image: radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 32px 32px;"
>
  <div
    class="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 py-20 md:grid-cols-2"
  >
    <div class="flex flex-col gap-8">
      <h1 class="text-5xl leading-tight font-extrabold text-white md:text-6xl">
        Tu negocio,<br />
        <span class="gradient-text">en línea en minutos.</span>
      </h1>

      <p class="max-w-md text-xl leading-relaxed text-white/60">
        Tus clientes eligen la comida, pagan con MercadoPago o en efectivo, y el
        pedido te llega directo al WhatsApp.
      </p>

      <div class="flex gap-10">
        <div class="flex flex-col gap-1">
          <span class="text-2xl font-bold text-white">+500</span>
          <span class="text-sm text-white/40">Pedidos por día</span>
        </div>
        <div class="flex flex-col gap-1">
          <span class="text-2xl font-bold text-white">0%</span>
          <span class="text-sm text-white/40">Comisiones</span>
        </div>
        <div class="flex flex-col gap-1">
          <span class="text-2xl font-bold text-white">2 min</span>
          <span class="text-sm text-white/40">Para arrancar</span>
        </div>
      </div>

      <div id="empezar" class="flex flex-col gap-3">
        <div class="flex flex-col gap-1">
          <h3 class="text-xl font-semibold text-white">
            ¿Querés que te avisemos cuando esté listo?
          </h3>
          <p class="text-md flex items-center gap-2 text-white/40">
            Dejanos tu mail acá abajo
            <ArrowDown
              size={18}
              class="animate-bounce text-violet-400"
              strokeWidth={2.5}
            />
          </p>
        </div>
        <div
          class="flex items-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-sm"
        >
          <input
            bind:this={emailInput}
            type="email"
            placeholder="Tu email"
            class="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-base text-white placeholder-white/30 outline-none"
          />
          <button
            class="gradient-btn flex shrink-0 items-center gap-2 rounded-xl px-5 py-2.5 text-base"
          >
            Enviar
            <ArrowRight size={16} />
          </button>
        </div>
        <p class="text-sm text-white/30">
          Sin tarjeta de crédito. Te avisamos cuando esté listo.
        </p>
      </div>
    </div>

    <div class="relative flex items-center justify-center">
      <div
        class="pointer-events-none absolute -top-10 -left-10 h-64 w-64 rounded-full opacity-20 blur-3xl"
        style="background: oklch(0.55 0.28 290);"
      ></div>
      <div
        class="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 rounded-full opacity-20 blur-3xl"
        style="background: oklch(0.72 0.22 40);"
      ></div>

      <div class="phone-frame">
        <div class="absolute inset-0 overflow-hidden rounded-[34px]">
          <video
            src="/pedifast-beta.mp4"
            autoplay
            loop
            muted
            playsinline
            class="h-full w-full object-cover"
          ></video>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="por-que-nosotros" class="bg-[#0A0A0A] py-24">
  <div class="mx-auto max-w-6xl px-6">
    <div class="mb-14 flex flex-col gap-3">
      <h2 class="text-4xl font-extrabold text-white">¿Por qué nosotros?</h2>
      <p class="max-w-lg text-lg text-white/40">
        No es solo una carta digital. Es la herramienta que tu negocio
        necesitaba.
      </p>
    </div>
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div
        class="group flex gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-violet-500/30 hover:bg-violet-500/5"
      >
        <div
          class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400"
        >
          <Gauge size={24} />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-lg font-bold text-white">Velocidad real</h3>
          <p class="text-sm leading-relaxed text-white/50">
            El sitio carga en menos de un segundo. Menos espera, más pedidos.
            Cada milisegundo cuenta cuando tu cliente tiene hambre.
          </p>
        </div>
      </div>
      <div
        class="group flex gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-orange-500/30 hover:bg-orange-500/5"
      >
        <div
          class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400"
        >
          <CreditCard size={24} />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-lg font-bold text-white">MercadoPago integrado</h3>
          <p class="text-sm leading-relaxed text-white/50">
            Cobros al instante, sin complicaciones. Tarjeta, transferencia o
            efectivo. El dinero va directo a tu cuenta, sin intermediarios.
          </p>
        </div>
      </div>
      <div
        class="group flex gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-violet-500/30 hover:bg-violet-500/5"
      >
        <div
          class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400"
        >
          <Smartphone size={24} />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-lg font-bold text-white">Web moderna y limpia</h3>
          <p class="text-sm leading-relaxed text-white/50">
            Un diseño que enamora desde el primer clic. Optimizado para celular,
            fácil de usar y con la identidad de tu negocio.
          </p>
        </div>
      </div>
      <div
        class="group flex gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-orange-500/30 hover:bg-orange-500/5"
      >
        <div
          class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400"
        >
          <Star size={24} />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-lg font-bold text-white">Experiencia premium</h3>
          <p class="text-sm leading-relaxed text-white/50">
            Tus clientes van a notar la diferencia desde el primer pedido. Una
            experiencia fluida que genera confianza y hace que vuelvan.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<footer class="border-t border-white/10 bg-[#0A0A0A] py-10 text-center">
  <p class="text-sm text-white/30">© 2026 Pedifast — Argentina 🇦🇷</p>
</footer>
