<script lang="ts">
  import { slide } from 'svelte/transition';

  import LeadModal from '$lib/components/lead-modal.svelte';

  let activeDemo = $state<'whatsapp' | 'dashboard'>('whatsapp');
  let mobileMenuOpen = $state(false);
  let openFaq = $state<number | null>(null);
  let videoEl = $state<HTMLVideoElement | null>(null);
  let dashboardVideoEl = $state<HTMLVideoElement | null>(null);
  let dashboardUserVideoEl = $state<HTMLVideoElement | null>(null);
  let demoSectionEl = $state<HTMLElement | null>(null);
  let leadModalOpen = $state(false);
  let leadSource = $state('hero');

  $effect(() => {
    if (!demoSectionEl) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const playing = entry.isIntersecting;
        if (videoEl) {
          if (playing) videoEl.play();
          else videoEl.pause();
        }
        if (dashboardVideoEl) {
          if (playing) dashboardVideoEl.play();
          else dashboardVideoEl.pause();
        }
        if (dashboardUserVideoEl) {
          if (playing) dashboardUserVideoEl.play();
          else dashboardUserVideoEl.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(demoSectionEl);
    return () => observer.disconnect();
  });

  const faqs = [
    {
      q: '¿Hay comisión por pedido?',
      a: 'No. Pagás una suscripción mensual fija. Cero porcentaje de tus ventas. Tus ganancias son 100% tuyas desde el primer pedido.'
    },
    {
      q: '¿Mis clientes necesitan descargar una app?',
      a: 'Para nada. Acceden a tu menú desde cualquier navegador, arman su carrito y te envían el pedido estructurado por WhatsApp en segundos, sin fricción.'
    },
    {
      q: '¿Puedo probar Pedifast antes de pagar?',
      a: 'Sí. Ofrecemos una prueba sin tarjeta de crédito requerida. Configurás tu local en menos de 10 minutos.'
    },
    {
      q: '¿Con qué impresoras térmicas funciona?',
      a: 'Compatible con la mayoría de impresoras POS: Epson, Star, Bixolon y más. Nuestro equipo te acompaña en la configuración inicial sin costo.'
    },
    {
      q: '¿Hay límite de pedidos por mes?',
      a: 'Ninguno. En ambos planes los pedidos son ilimitados. Escalás tu negocio sin costos adicionales por volumen.'
    }
  ];
</script>

<svelte:head>
  <title>Pedifast | Recupera el Control de tus Pedidos</title>
</svelte:head>

<!-- Top Navigation -->
<header
  class="border-outline-variant/40 fixed top-0 z-50 w-full border-b bg-white/95 backdrop-blur-xl"
>
  <nav
    class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8"
  >
    <div class="text-on-surface font-headline text-xl font-bold tracking-tight">
      Pedifast
    </div>
    <!-- Desktop Nav -->
    <div class="hidden items-center gap-8 text-sm font-medium md:flex">
      <a
        class="text-on-surface-variant hover:text-on-surface transition-colors duration-200"
        href="#features">Funcionalidades</a
      >
      <a
        class="text-on-surface-variant hover:text-on-surface transition-colors duration-200"
        href="#pricing">Planes</a
      >
      <a
        class="text-on-surface-variant hover:text-on-surface transition-colors duration-200"
        href="#">Ingresar</a
      >
      <button
        class="kinetic-gradient cursor-pointer rounded-lg px-5 py-2 font-semibold text-white transition-all duration-150 hover:opacity-90 active:scale-95"
      >
        Empezar Gratis
      </button>
    </div>
    <!-- Mobile Hamburger -->
    <button
      class="text-on-surface hover:bg-surface-container-low cursor-pointer rounded-lg p-2 transition-colors md:hidden"
      onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
      aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
    >
      {#if mobileMenuOpen}
        <span class="material-symbols-outlined">close</span>
      {:else}
        <span class="material-symbols-outlined">menu</span>
      {/if}
    </button>
  </nav>
  <!-- Mobile Menu -->
  {#if mobileMenuOpen}
    <div
      class="border-outline-variant/20 flex flex-col gap-1 border-t bg-white px-6 py-4 md:hidden"
      transition:slide={{ duration: 200 }}
    >
      <a
        class="text-on-surface-variant hover:text-on-surface rounded-lg px-2 py-3 font-medium transition-colors"
        href="#features"
        onclick={() => (mobileMenuOpen = false)}>Funcionalidades</a
      >
      <a
        class="text-on-surface-variant hover:text-on-surface rounded-lg px-2 py-3 font-medium transition-colors"
        href="#pricing"
        onclick={() => (mobileMenuOpen = false)}>Planes</a
      >
      <a
        class="text-on-surface-variant hover:text-on-surface rounded-lg px-2 py-3 font-medium transition-colors"
        href="#"
        onclick={() => (mobileMenuOpen = false)}>Ingresar</a
      >
      <button
        class="kinetic-gradient mt-2 w-full cursor-pointer rounded-xl py-3 font-semibold text-white"
      >
        Empezar Gratis
      </button>
    </div>
  {/if}
</header>

<main class="pt-16">
  <!-- Hero Section -->
  <section class="bg-surface relative overflow-hidden py-24 md:py-32">
    <div
      class="bg-primary-container/30 pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] translate-x-1/4 -translate-y-1/2 rounded-full blur-3xl"
    ></div>
    <div
      class="bg-tertiary-container/15 pointer-events-none absolute bottom-0 left-0 h-80 w-80 -translate-x-1/4 translate-y-1/2 rounded-full blur-3xl"
    ></div>

    <div
      class="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2 md:px-8"
    >
      <div>
        <span
          class="bg-primary-container text-on-primary-container mb-6 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold tracking-widest uppercase"
        >
          <span
            class="material-symbols-outlined text-sm"
            style="font-variation-settings: 'FILL' 1;">verified</span
          >
          0% de comisiones, siempre
        </span>
        <h1
          class="font-headline text-on-surface mb-6 text-5xl leading-[1.08] font-extrabold tracking-tighter md:text-6xl lg:text-7xl"
        >
          Recupera el <span class="text-primary italic">Control</span><br />de
          tus Pedidos.
        </h1>
        <p
          class="text-on-surface-variant mb-10 max-w-lg text-lg leading-relaxed"
        >
          Basta de pagar el 30% a plataformas que no te pertenecen. Pedifast
          conecta tu cocina directamente con tus clientes mediante WhatsApp y
          gestión inteligente.
        </p>
        <div class="flex flex-col gap-3 sm:flex-row">
          <button
            onclick={() => {
              leadSource = 'hero';
              leadModalOpen = true;
            }}
            class="kinetic-gradient shadow-primary/25 cursor-pointer rounded-xl px-8 py-4 text-sm font-bold tracking-wide text-white shadow-lg transition-all duration-150 hover:opacity-90 active:scale-95"
          >
            Empezar Gratis
          </button>
          <button
            class="ghost-border bg-surface-container-low text-on-surface hover:bg-surface-container flex cursor-pointer items-center justify-center gap-2 rounded-xl px-8 py-4 text-sm font-semibold transition-all duration-150"
            onclick={() =>
              document
                .getElementById('demo')
                ?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span class="material-symbols-outlined text-base">play_circle</span> Ver
            Demo
          </button>
        </div>
        <div
          class="mt-8 flex items-center justify-center gap-6 md:justify-start"
        >
          <span class="text-on-surface-variant text-md font-medium"
            >Integra con</span
          >
          <div class="flex items-center gap-2">
            <img
              src="/Print_Inline_Green_CMYK_2026.svg"
              alt="WhatsApp"
              class="m-0 h-6 p-0"
            />
            <img
              src="/MP_RGB_HANDSHAKE_color_horizontal.svg"
              alt="MercadoPago"
              class="h-12"
            />
          </div>
        </div>
      </div>

      <div class="relative">
        <div
          class="relative z-10 rotate-2 transform overflow-hidden rounded-2xl shadow-2xl transition-transform duration-700 hover:rotate-0"
        >
          <img
            alt="Tablero de gestión de restaurante moderno"
            class="w-full object-contain"
            src="/dashboard-screenshot.png"
          />
          <div
            class="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"
          ></div>
        </div>
        <!-- Floating Stat: Comisiones -->
        <div
          class="border-outline-variant/20 absolute -bottom-6 -left-6 z-20 rounded-2xl border bg-white p-5 shadow-xl"
        >
          <div class="flex items-center gap-3">
            <div
              class="bg-tertiary-container flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
            >
              <span
                class="material-symbols-outlined text-tertiary"
                style="font-variation-settings: 'FILL' 1;">trending_down</span
              >
            </div>
            <div>
              <p
                class="text-on-surface-variant text-xs font-semibold tracking-wide uppercase"
              >
                Comisiones
              </p>
              <p
                class="text-on-surface mt-0.5 text-2xl leading-none font-extrabold"
              >
                -100%
              </p>
            </div>
          </div>
        </div>
        <!-- Floating Stat: Pedidos -->
        <div
          class="border-outline-variant/20 absolute -top-6 -right-4 z-20 rounded-2xl border bg-white p-5 shadow-xl"
        >
          <div class="flex items-center gap-3">
            <div
              class="bg-primary-container flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
            >
              <span
                class="material-symbols-outlined text-primary"
                style="font-variation-settings: 'FILL' 1;">shopping_bag</span
              >
            </div>
            <div>
              <p
                class="text-on-surface-variant text-xs font-semibold tracking-wide uppercase"
              >
                Pedidos
              </p>
              <p
                class="text-on-surface mt-0.5 text-2xl leading-none font-extrabold"
              >
                Ilimitados
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Trust Metrics Bar -->
  <section
    class="bg-surface-container-low border-outline-variant/30 border-y py-10"
  >
    <div class="mx-auto max-w-7xl px-6 md:px-8">
      <div class="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
        <div>
          <p class="text-primary font-headline text-3xl font-extrabold">200+</p>
          <p class="text-on-surface-variant mt-1 text-sm">
            Restaurantes activos
          </p>
        </div>
        <div>
          <p class="text-primary font-headline text-3xl font-extrabold">0%</p>
          <p class="text-on-surface-variant mt-1 text-sm">
            Comisión por pedido
          </p>
        </div>
        <div>
          <p class="text-primary font-headline text-3xl font-extrabold">50K+</p>
          <p class="text-on-surface-variant mt-1 text-sm">Pedidos procesados</p>
        </div>
        <div>
          <p class="text-primary font-headline text-3xl font-extrabold">4.9★</p>
          <p class="text-on-surface-variant mt-1 text-sm">
            Satisfacción de clientes
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Demo Showcase Section -->
  <section class="bg-surface py-24" id="demo" bind:this={demoSectionEl}>
    <div class="mx-auto max-w-7xl px-6 md:px-8">
      <div class="mb-14 text-center">
        <h2
          class="font-headline text-on-surface mb-4 text-4xl font-extrabold md:text-5xl"
        >
          Mira Pedifast en Acción
        </h2>
        <p class="text-on-surface-variant mx-auto max-w-xl text-lg">
          Elegí el flujo que mejor se adapte a tu operativa.
        </p>
      </div>
      <div class="flex flex-col items-center">
        <!-- Tabs -->
        <div
          class="bg-surface-container mb-12 flex gap-1 rounded-2xl p-1.5 shadow-inner"
          role="tablist"
        >
          <button
            class="cursor-pointer rounded-xl px-7 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 {activeDemo ===
            'whatsapp'
              ? 'text-primary bg-white shadow-sm'
              : 'text-on-surface-variant hover:text-on-surface'}"
            onclick={() => (activeDemo = 'whatsapp')}
            role="tab"
            aria-selected={activeDemo === 'whatsapp'}
          >
            WhatsApp Directo
          </button>
          <button
            class="cursor-pointer rounded-xl px-7 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 {activeDemo ===
            'dashboard'
              ? 'text-primary bg-white shadow-sm'
              : 'text-on-surface-variant hover:text-on-surface'}"
            onclick={() => (activeDemo = 'dashboard')}
            role="tab"
            aria-selected={activeDemo === 'dashboard'}
          >
            Dashboard de Gestión
          </button>
        </div>

        <div class="grid w-full items-center gap-12 lg:grid-cols-12">
          <!-- Demo Visual -->
          <div
            class="border-outline-variant/10 group relative min-h-[832px] overflow-hidden rounded-2xl border bg-stone-900 shadow-2xl lg:col-span-8"
          >
            <div
              class="flex h-full w-full items-center justify-center overflow-hidden"
            >
              <!-- WhatsApp Demo -->
              <div
                class="absolute inset-0 flex flex-col items-center justify-center p-12 transition-opacity duration-500 {activeDemo ===
                'whatsapp'
                  ? 'opacity-100'
                  : 'pointer-events-none opacity-0'}"
              >
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
                    <div
                      class="absolute inset-0 overflow-hidden rounded-[34px]"
                    >
                      <video
                        bind:this={videoEl}
                        src="/pedifast-whatsapp-tier.mp4"
                        loop
                        muted
                        playsinline
                        onloadedmetadata={(e) =>
                          (e.currentTarget.playbackRate = 1.2)}
                        class="h-full w-full object-cover"
                      ></video>
                    </div>
                  </div>
                </div>
                <div
                  class="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <span
                    class="material-symbols-outlined text-white"
                    style="font-size:64px">play_circle</span
                  >
                </div>
              </div>
              <!-- Dashboard Demo -->
              <div
                class="absolute inset-0 transition-opacity duration-500 {activeDemo ===
                'dashboard'
                  ? 'opacity-100'
                  : 'pointer-events-none opacity-0'}"
              >
                <!-- Desktop dashboard video -->
                <div class="relative h-full w-full overflow-hidden rounded-2xl">
                  <video
                    bind:this={dashboardVideoEl}
                    src="/pedifast-dashboard-tier.mp4"
                    loop
                    muted
                    playsinline
                    onloadedmetadata={(e) =>
                      (e.currentTarget.playbackRate = 1.2)}
                    class="animate-zoom h-full w-full bg-neutral-900 object-contain"
                  ></video>
                </div>
              </div>
            </div>
          </div>

          <!-- Description -->
          <div class="w-full space-y-6 lg:col-span-4">
            {#if activeDemo === 'whatsapp'}
              <div>
                <h4
                  class="text-on-surface mb-3 flex items-center gap-2 text-2xl font-bold"
                >
                  <span class="material-symbols-outlined text-primary"
                    >send</span
                  >
                  Flujo Ágil WhatsApp
                </h4>
                <p class="text-on-surface-variant mb-6 leading-relaxed">
                  Tus clientes acceden a tu catálogo web, arman su carrito y
                  envían el pedido estructurado directamente a tu WhatsApp de
                  negocio.
                </p>
                <ul class="space-y-3">
                  <li class="text-on-surface flex items-center gap-3 text-sm">
                    <span
                      class="material-symbols-outlined text-tertiary text-lg"
                      style="font-variation-settings: 'FILL' 1;"
                      >check_circle</span
                    >
                    Sin fricción de descarga de apps
                  </li>
                  <li class="text-on-surface flex items-center gap-3 text-sm">
                    <span
                      class="material-symbols-outlined text-tertiary text-lg"
                      style="font-variation-settings: 'FILL' 1;"
                      >check_circle</span
                    >
                    Datos listos para facturar
                  </li>
                  <li class="text-on-surface flex items-center gap-3 text-sm">
                    <span
                      class="material-symbols-outlined text-tertiary text-lg"
                      style="font-variation-settings: 'FILL' 1;"
                      >check_circle</span
                    >
                    Respuesta automática instantánea
                  </li>
                </ul>
              </div>
            {:else}
              <div>
                <h4
                  class="text-on-surface mb-3 flex items-center gap-2 text-2xl font-bold"
                >
                  <span class="material-symbols-outlined text-primary"
                    >monitoring</span
                  >
                  Gestión Centralizada
                </h4>
                <p class="text-on-surface-variant mb-6 leading-relaxed">
                  Para operativas de medio/alto volumen. Visualizá todos los
                  pedidos en tiempo real, gestioná estados de cocina y repartí
                  con logística propia o integrada.
                </p>
                <ul class="space-y-3">
                  <li class="text-on-surface flex items-center gap-3 text-sm">
                    <span
                      class="material-symbols-outlined text-tertiary text-lg"
                      style="font-variation-settings: 'FILL' 1;"
                      >check_circle</span
                    >
                    Panel multi-usuario simultáneo
                  </li>
                  <li class="text-on-surface flex items-center gap-3 text-sm">
                    <span
                      class="material-symbols-outlined text-tertiary text-lg"
                      style="font-variation-settings: 'FILL' 1;"
                      >check_circle</span
                    >
                    Reportes de ventas y productos en vivo
                  </li>
                  <li class="text-on-surface flex items-center gap-3 text-sm">
                    <span
                      class="material-symbols-outlined text-tertiary text-lg"
                      style="font-variation-settings: 'FILL' 1;"
                      >check_circle</span
                    >
                    Impresión automática de comandas por columna
                  </li>
                  <li class="text-on-surface flex items-center gap-3 text-sm">
                    <span
                      class="material-symbols-outlined text-tertiary text-lg"
                      style="font-variation-settings: 'FILL' 1;"
                      >check_circle</span
                    >
                    Control de stock dinámico
                  </li>
                </ul>
              </div>
            {/if}
            <button
              onclick={() => {
                leadSource = 'demo';
                leadModalOpen = true;
              }}
              class="kinetic-gradient w-full cursor-pointer rounded-xl py-3.5 text-xs font-bold tracking-widest text-white uppercase shadow-lg transition-all active:scale-95"
            >
              Prueba esta Funcionalidad
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Problem / Solution -->
  <section class="bg-surface-container-low py-24">
    <div class="mx-auto max-w-7xl px-6 md:px-8">
      <div class="mb-16 text-center">
        <h2 class="font-headline text-on-surface mb-4 text-4xl font-bold">
          La Realidad del Gastronómico
        </h2>
        <p class="text-on-surface-variant">
          ¿Por qué seguir regalando tu esfuerzo?
        </p>
      </div>
      <div class="grid gap-6 md:grid-cols-2">
        <!-- The Pain -->
        <div
          class="border-outline-variant/20 border-l-error rounded-2xl border border-l-4 bg-white p-10"
        >
          <h3
            class="text-on-surface mb-6 flex items-center gap-3 text-xl font-bold"
          >
            <span
              class="bg-error-container flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl"
            >
              <span class="material-symbols-outlined text-error text-lg"
                >dangerous</span
              >
            </span>
            El Modelo Actual
          </h3>
          <ul class="space-y-6">
            <li class="flex items-start gap-4">
              <span
                class="material-symbols-outlined text-error mt-0.5 flex-shrink-0"
                style="font-variation-settings: 'FILL' 1;">cancel</span
              >
              <div>
                <p class="text-on-surface font-semibold">Comisiones Abusivas</p>
                <p class="text-on-surface-variant mt-1 text-sm">
                  Pagás hasta un 35% de cada plato que cocinás. El socio que más
                  gana no toca una sartén.
                </p>
              </div>
            </li>
            <li class="flex items-start gap-4">
              <span
                class="material-symbols-outlined text-error mt-0.5 flex-shrink-0"
                style="font-variation-settings: 'FILL' 1;">cancel</span
              >
              <div>
                <p class="text-on-surface font-semibold">
                  Desorganización Operativa
                </p>
                <p class="text-on-surface-variant mt-1 text-sm">
                  Pedidos por teléfono, Instagram, WhatsApp personal... Errores
                  constantes y caos en cocina.
                </p>
              </div>
            </li>
            <li class="flex items-start gap-4">
              <span
                class="material-symbols-outlined text-error mt-0.5 flex-shrink-0"
                style="font-variation-settings: 'FILL' 1;">cancel</span
              >
              <div>
                <p class="text-on-surface font-semibold">
                  Dependencia Tecnológica
                </p>
                <p class="text-on-surface-variant mt-1 text-sm">
                  Si la app te oculta, dejás de existir. No conocés a tus
                  clientes, ellos son dueños de la data.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <!-- The Solution -->
        <div
          class="border-outline-variant/20 border-l-tertiary rounded-2xl border border-l-4 bg-white p-10 shadow-md"
        >
          <h3
            class="text-on-surface mb-6 flex items-center gap-3 text-xl font-bold"
          >
            <span
              class="bg-tertiary-container flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl"
            >
              <span class="material-symbols-outlined text-tertiary text-lg"
                >rocket_launch</span
              >
            </span>
            Con Pedifast
          </h3>
          <ul class="space-y-6">
            <li class="flex items-start gap-4">
              <span
                class="material-symbols-outlined text-tertiary mt-0.5 flex-shrink-0"
                style="font-variation-settings: 'FILL' 1;">check_circle</span
              >
              <div>
                <p class="text-on-surface font-semibold">0% de Comisiones</p>
                <p class="text-on-surface-variant mt-1 text-sm">
                  Tu ganancia es tuya. Pagás una suscripción fija, transparente
                  y accesible.
                </p>
              </div>
            </li>
            <li class="flex items-start gap-4">
              <span
                class="material-symbols-outlined text-tertiary mt-0.5 flex-shrink-0"
                style="font-variation-settings: 'FILL' 1;">check_circle</span
              >
              <div>
                <p class="text-on-surface font-semibold">Orquestación Total</p>
                <p class="text-on-surface-variant mt-1 text-sm">
                  Un solo dashboard que centraliza todo. Sin gritos, sin papeles
                  perdidos.
                </p>
              </div>
            </li>
            <li class="flex items-start gap-4">
              <span
                class="material-symbols-outlined text-tertiary mt-0.5 flex-shrink-0"
                style="font-variation-settings: 'FILL' 1;">check_circle</span
              >
              <div>
                <p class="text-on-surface font-semibold">
                  Tus Clientes, Tu Negocio
                </p>
                <p class="text-on-surface-variant mt-1 text-sm">
                  Base de datos propia. Fidelizá a quienes te eligen sin
                  intermediarios.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="bg-surface py-24" id="features">
    <div class="mx-auto max-w-7xl px-6 md:px-8">
      <div class="mb-16 text-center">
        <h2 class="font-headline text-on-surface mb-4 text-4xl font-bold">
          Herramientas de Alto Rendimiento
        </h2>
        <p class="text-on-surface-variant text-lg">
          Todo lo que necesitás para operar como un profesional.
        </p>
      </div>
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Feature 1 -->
        <div
          class="bg-surface-container-low flex flex-col gap-5 rounded-2xl p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
        >
          <span
            class="bg-tertiary flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
          >
            <span class="material-symbols-outlined text-lg text-white"
              >chat</span
            >
          </span>
          <div>
            <h3 class="text-on-surface mb-2 text-base font-bold">
              WhatsApp Directo
            </h3>
            <p class="text-on-surface-variant text-sm leading-relaxed">
              Recibí pedidos formateados en tu WhatsApp. Sin transcripciones ni
              audios.
            </p>
          </div>
          <ul class="mt-auto space-y-2">
            <li class="text-on-surface flex items-center gap-2 text-xs">
              <span
                class="material-symbols-outlined text-tertiary"
                style="font-size:14px">check</span
              > Sin descarga de apps
            </li>
            <li class="text-on-surface flex items-center gap-2 text-xs">
              <span
                class="material-symbols-outlined text-tertiary"
                style="font-size:14px">check</span
              > Respuesta automática
            </li>
          </ul>
        </div>

        <!-- Feature 2 -->
        <div
          class="bg-surface-container-low flex flex-col gap-5 rounded-2xl p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
        >
          <span
            class="bg-primary flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
          >
            <span class="material-symbols-outlined text-lg text-white"
              >print</span
            >
          </span>
          <div>
            <h3 class="text-on-surface mb-2 text-base font-bold">
              Comandas Automáticas
            </h3>
            <p class="text-on-surface-variant text-sm leading-relaxed">
              Impresión directa en cocina al momento que entra el pedido.
              Velocidad sin errores.
            </p>
          </div>
          <ul class="mt-auto space-y-2">
            <li class="text-on-surface flex items-center gap-2 text-xs">
              <span
                class="material-symbols-outlined text-tertiary"
                style="font-size:14px">check</span
              > Impresora térmica
            </li>
            <li class="text-on-surface flex items-center gap-2 text-xs">
              <span
                class="material-symbols-outlined text-tertiary"
                style="font-size:14px">check</span
              > Integración rápida
            </li>
          </ul>
        </div>

        <!-- Feature 3 -->
        <div
          class="bg-surface-container-low flex flex-col gap-5 rounded-2xl p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
        >
          <span
            class="bg-tertiary flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
          >
            <span class="material-symbols-outlined text-lg text-white"
              >location_on</span
            >
          </span>
          <div>
            <h3 class="text-on-surface mb-2 text-base font-bold">
              Envío por Kilómetro
            </h3>
            <p class="text-on-surface-variant text-sm leading-relaxed">
              Detectamos al cliente con Google Maps y calculamos el costo de
              envío por la distancia real.
            </p>
          </div>
          <ul class="mt-auto space-y-2">
            <li class="text-on-surface flex items-center gap-2 text-xs">
              <span
                class="material-symbols-outlined text-tertiary"
                style="font-size:14px">check</span
              > Geolocalización automática
            </li>
            <li class="text-on-surface flex items-center gap-2 text-xs">
              <span
                class="material-symbols-outlined text-tertiary"
                style="font-size:14px">check</span
              > Tarifa configurable por km
            </li>
          </ul>
        </div>

        <!-- Feature 4 (dark accent) -->
        <div
          class="bg-on-surface flex flex-col gap-5 rounded-2xl p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
        >
          <span
            class="bg-primary flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
          >
            <span class="material-symbols-outlined text-lg text-white"
              >monitoring</span
            >
          </span>
          <div>
            <h3 class="mb-2 text-base font-bold text-white">
              Dashboard en Tiempo Real
            </h3>
            <p class="text-sm leading-relaxed text-stone-400">
              Controlá pedidos, tiempos de espera y stock desde una pantalla
              diseñada para alta demanda.
            </p>
          </div>
          <ul class="mt-auto space-y-2">
            <li class="flex items-center gap-2 text-xs text-stone-300">
              <span
                class="material-symbols-outlined text-tertiary-container"
                style="font-size:14px">check</span
              > Panel multi-usuario
            </li>
            <li class="flex items-center gap-2 text-xs text-stone-300">
              <span
                class="material-symbols-outlined text-tertiary-container"
                style="font-size:14px">check</span
              > Reportes de ventas
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="bg-surface-container-low py-24">
    <div class="mx-auto max-w-7xl px-6 md:px-8">
      <div class="mb-14 text-center">
        <h2 class="font-headline text-on-surface mb-4 text-4xl font-bold">
          Lo que dicen los que cocinan
        </h2>
        <p class="text-on-surface-variant">
          Restaurantes que ya recuperaron el control de sus pedidos.
        </p>
      </div>
      <div class="grid items-start gap-6 md:grid-cols-3">
        <!-- Testimonial 1 -->
        <div
          class="border-outline-variant/20 rounded-2xl border bg-white p-8 transition-shadow duration-200 hover:shadow-md"
        >
          <div class="mb-5 flex gap-0.5">
            {#each [1, 2, 3, 4, 5] as i (i)}
              <span
                class="material-symbols-outlined text-lg text-amber-400"
                style="font-variation-settings: 'FILL' 1;">star</span
              >
            {/each}
          </div>
          <p class="text-on-surface mb-6 text-sm leading-relaxed">
            "En el primer mes ahorramos lo equivalente a 2 semanas de pedidos
            que antes se iban en comisiones. El onboarding fue sencillísimo y el
            soporte respondió todo en minutos."
          </p>
          <div class="flex items-center gap-3">
            <div
              class="bg-primary-container text-on-primary-container flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
            >
              MR
            </div>
            <div>
              <p class="text-on-surface text-sm font-semibold">Marcos R.</p>
              <p class="text-on-surface-variant text-xs">
                La Querencia · Buenos Aires
              </p>
            </div>
          </div>
        </div>

        <!-- Testimonial 2 (offset for visual rhythm) -->
        <div
          class="border-outline-variant/20 rounded-2xl border bg-white p-8 transition-shadow duration-200 hover:shadow-md md:mt-6"
        >
          <div class="mb-5 flex gap-0.5">
            {#each [1, 2, 3, 4, 5] as i (i)}
              <span
                class="material-symbols-outlined text-lg text-amber-400"
                style="font-variation-settings: 'FILL' 1;">star</span
              >
            {/each}
          </div>
          <p class="text-on-surface mb-6 text-sm leading-relaxed">
            "Pasamos de un caos de WhatsApps y llamadas a un sistema que
            centraliza todo. La cocina trabaja más tranquila y los pedidos
            llegan impresos solos. Impagable."
          </p>
          <div class="flex items-center gap-3">
            <div
              class="bg-tertiary-container text-on-tertiary-container flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
            >
              SV
            </div>
            <div>
              <p class="text-on-surface text-sm font-semibold">Sofía V.</p>
              <p class="text-on-surface-variant text-xs">
                Rotisería Don Carlos · Córdoba
              </p>
            </div>
          </div>
        </div>

        <!-- Testimonial 3 -->
        <div
          class="border-outline-variant/20 rounded-2xl border bg-white p-8 transition-shadow duration-200 hover:shadow-md"
        >
          <div class="mb-5 flex gap-0.5">
            {#each [1, 2, 3, 4, 5] as i (i)}
              <span
                class="material-symbols-outlined text-lg text-amber-400"
                style="font-variation-settings: 'FILL' 1;">star</span
              >
            {/each}
          </div>
          <p class="text-on-surface mb-6 text-sm leading-relaxed">
            "Lo que más nos convenció fue el 0% de comisiones. Tenemos 3 locales
            y el ahorro mensual es muy significativo. El dashboard de gestión es
            claro y muy fácil de usar."
          </p>
          <div class="flex items-center gap-3">
            <div
              class="bg-secondary-container text-on-secondary-container flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
            >
              LP
            </div>
            <div>
              <p class="text-on-surface text-sm font-semibold">Luciano P.</p>
              <p class="text-on-surface-variant text-xs">
                Burger Bros · Rosario
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Target Audience -->
  <section class="bg-surface py-24">
    <div class="mx-auto max-w-7xl px-6 text-center md:px-8">
      <h2 class="font-headline text-on-surface mb-4 text-3xl font-bold">
        Diseñado para los que Encienden el Fuego
      </h2>
      <p class="text-on-surface-variant mb-12">
        Desde el emprendedor de barrio hasta la cadena en expansión.
      </p>
      <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div
          class="bg-surface-container-low hover:bg-surface-container flex flex-col items-center gap-4 rounded-2xl p-8 transition-colors duration-200"
        >
          <div
            class="bg-primary-container flex h-14 w-14 items-center justify-center rounded-2xl"
          >
            <span class="material-symbols-outlined text-primary text-2xl"
              >restaurant</span
            >
          </div>
          <p class="text-on-surface font-bold">Restaurantes Medios</p>
        </div>
        <div
          class="bg-surface-container-low hover:bg-surface-container flex flex-col items-center gap-4 rounded-2xl p-8 transition-colors duration-200"
        >
          <div
            class="bg-primary-container flex h-14 w-14 items-center justify-center rounded-2xl"
          >
            <span class="material-symbols-outlined text-primary text-2xl"
              >takeout_dining</span
            >
          </div>
          <p class="text-on-surface font-bold">Rotiserías de Barrio</p>
        </div>
        <div
          class="bg-surface-container-low hover:bg-surface-container flex flex-col items-center gap-4 rounded-2xl p-8 transition-colors duration-200"
        >
          <div
            class="bg-primary-container flex h-14 w-14 items-center justify-center rounded-2xl"
          >
            <span class="material-symbols-outlined text-primary text-2xl"
              >lunch_dining</span
            >
          </div>
          <p class="text-on-surface font-bold">Cadenas de Fast Food</p>
        </div>
        <div
          class="bg-surface-container-low hover:bg-surface-container flex flex-col items-center gap-4 rounded-2xl p-8 transition-colors duration-200"
        >
          <div
            class="bg-primary-container flex h-14 w-14 items-center justify-center rounded-2xl"
          >
            <span class="material-symbols-outlined text-primary text-2xl"
              >coffee</span
            >
          </div>
          <p class="text-on-surface font-bold">Cafeterías &amp; Bakery</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing Tiers -->
  <section class="bg-surface-container-low py-24" id="pricing">
    <div class="mx-auto max-w-7xl px-6 md:px-8">
      <div class="mb-16 text-center">
        <h2 class="font-headline text-on-surface mb-4 text-4xl font-bold">
          Planes Transparentes
        </h2>
        <p class="text-on-surface-variant">
          Sin sorpresas, sin comisiones por pedido.
        </p>
      </div>
      <div class="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        <!-- Tier 1 -->
        <div
          class="border-outline-variant/20 hover:border-primary/30 flex flex-col rounded-2xl border bg-white p-10 transition-all duration-200 hover:shadow-md"
        >
          <div class="mb-8">
            <p
              class="text-on-surface-variant mb-2 text-xs font-bold tracking-widest uppercase"
            >
              Plan Starter
            </p>
            <h3 class="text-on-surface mb-2 text-xl font-bold">
              WhatsApp Directo
            </h3>
            <p class="text-on-surface-variant text-sm">
              Ideal para emprendimientos que buscan agilidad.
            </p>
          </div>
          <div class="mb-8">
            <span class="text-on-surface text-5xl font-extrabold">$10.000</span>
            <span class="text-on-surface-variant ml-1">/mes</span>
          </div>
          <ul class="mb-10 flex-grow space-y-4">
            <li class="flex items-center gap-3 text-sm">
              <span
                class="material-symbols-outlined text-tertiary text-lg"
                style="font-variation-settings: 'FILL' 1;">check_circle</span
              >
              Menú Digital Interactivo
            </li>
            <li class="flex items-center gap-3 text-sm">
              <span
                class="material-symbols-outlined text-tertiary text-lg"
                style="font-variation-settings: 'FILL' 1;">check_circle</span
              >
              Pedidos a WhatsApp Formateados
            </li>
            <li class="flex items-center gap-3 text-sm">
              <span
                class="material-symbols-outlined text-tertiary text-lg"
                style="font-variation-settings: 'FILL' 1;">check_circle</span
              >
              Pedidos ilimitados
            </li>
          </ul>
          <button
            class="border-primary text-primary hover:bg-primary w-full cursor-pointer rounded-xl border-2 py-3.5 text-xs font-bold tracking-widest uppercase transition-all duration-150 hover:text-white"
          >
            Seleccionar Plan
          </button>
        </div>

        <!-- Tier 2 -->
        <div
          class="bg-on-surface relative flex flex-col rounded-2xl p-10 shadow-xl"
        >
          <div
            class="kinetic-gradient absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-5 py-1.5 text-[10px] font-bold tracking-widest whitespace-nowrap text-white uppercase shadow-md"
          >
            Más Popular
          </div>
          <div class="mb-8">
            <p
              class="mb-2 text-xs font-bold tracking-widest text-stone-400 uppercase"
            >
              Plan Pro
            </p>
            <h3 class="mb-2 text-xl font-bold text-white">
              Dashboard de Gestión
            </h3>
            <p class="text-sm text-stone-400">
              Para negocios que necesitan control total.
            </p>
          </div>
          <div class="mb-8">
            <span class="text-5xl font-extrabold text-white">$12.999</span>
            <span class="ml-1 text-stone-400">/mes</span>
          </div>
          <ul class="mb-10 flex-grow space-y-4">
            <li class="flex items-center gap-3 text-sm text-stone-200">
              <span
                class="material-symbols-outlined text-tertiary-container text-lg"
                style="font-variation-settings: 'FILL' 1;">check_circle</span
              >
              Todo lo de WhatsApp Directo
            </li>
            <li class="flex items-center gap-3 text-sm text-stone-200">
              <span
                class="material-symbols-outlined text-tertiary-container text-lg"
                style="font-variation-settings: 'FILL' 1;">check_circle</span
              >
              Panel de Control en tiempo real
            </li>
            <li class="flex items-center gap-3 text-sm text-stone-200">
              <span
                class="material-symbols-outlined text-tertiary-container text-lg"
                style="font-variation-settings: 'FILL' 1;">check_circle</span
              >
              Conexión a impresora térmica
            </li>
            <li
              class="flex items-center gap-3 text-sm font-semibold text-stone-200"
            >
              <span
                class="material-symbols-outlined text-tertiary-container text-lg"
                style="font-variation-settings: 'FILL' 1;">check_circle</span
              >
              Soporte prioritario 24/7
            </li>
          </ul>
          <button
            onclick={() => {
              leadSource = 'pricing';
              leadModalOpen = true;
            }}
            class="kinetic-gradient shadow-primary/30 w-full cursor-pointer rounded-xl py-3.5 text-xs font-bold tracking-widest text-white uppercase shadow-lg transition-all active:scale-95"
          >
            Empieza tu Prueba Gratis
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="bg-surface py-24">
    <div class="mx-auto max-w-3xl px-6 md:px-8">
      <div class="mb-14 text-center">
        <h2 class="font-headline text-on-surface mb-4 text-4xl font-bold">
          Preguntas Frecuentes
        </h2>
        <p class="text-on-surface-variant">
          Respuestas directas a las dudas más comunes.
        </p>
      </div>
      <div class="space-y-3">
        {#each faqs as faq, i (i)}
          <div
            class="bg-surface-container-low border-outline-variant/20 overflow-hidden rounded-2xl border"
          >
            <button
              class="text-on-surface hover:text-primary flex w-full cursor-pointer items-center justify-between gap-4 px-7 py-5 text-left font-semibold transition-colors duration-150"
              onclick={() => (openFaq = openFaq === i ? null : i)}
              aria-expanded={openFaq === i}
            >
              <span>{faq.q}</span>
              <span
                class="material-symbols-outlined text-on-surface-variant flex-shrink-0 transition-transform duration-200"
                style:transform={openFaq === i
                  ? 'rotate(180deg)'
                  : 'rotate(0deg)'}>expand_more</span
              >
            </button>
            {#if openFaq === i}
              <div
                class="text-on-surface-variant px-7 pb-5 text-sm leading-relaxed"
                transition:slide={{ duration: 200 }}
              >
                {faq.a}
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- CTA Final -->
  <section class="bg-on-surface relative overflow-hidden py-24">
    <div class="pointer-events-none absolute inset-0 opacity-10">
      <img
        alt=""
        aria-hidden="true"
        class="h-full w-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfaeetEVFrCUaH0gyUCItDRwOfENXoGldLyo5UC2tLB154O7afayF9G9Mv6tgxlctYsh5PudfYmtWMNBFISf8OmWZrGDhfiMM-drWhtrVLQs9p-zCju7my8Gs6ZjgOZUos8AoLuwxd-T68dXzVSoimor91YWMujQC3sHMyZ4zOLxcOlNy-yiT_x1X0L38rNfdrSKOEpd_LCyRV-Y15wOI-0298_KkDvmQAL17KXAb_lfsckxuioBsUI3oHrUkNrR2zJW--Pjc7iHE"
      />
    </div>
    <div
      class="bg-primary/5 pointer-events-none absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-3xl"
    ></div>
    <div class="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-8">
      <h2
        class="font-headline mb-6 text-4xl leading-tight font-bold text-white md:text-5xl"
      >
        Dejá de trabajar para la plataforma.<br />
        <span class="text-primary-container"
          >Hacé que la tecnología trabaje para vos.</span
        >
      </h2>
      <p class="mx-auto mb-12 max-w-xl text-lg text-stone-400">
        Sumate a cientos de restaurantes que ya optimizan sus márgenes con
        Pedifast.
      </p>
      <button
        onclick={() => {
          leadSource = 'final';
          leadModalOpen = true;
        }}
        class="kinetic-gradient shadow-primary/30 cursor-pointer rounded-xl px-10 py-5 text-base font-bold tracking-widest text-white uppercase shadow-2xl transition-all hover:opacity-90 active:scale-95"
      >
        Configurar mi local ahora
      </button>
    </div>
  </section>
</main>

<LeadModal bind:open={leadModalOpen} source={leadSource} />

<!-- Footer -->
<footer class="border-outline-variant/30 border-t bg-white">
  <div
    class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row md:px-8"
  >
    <div class="font-headline text-on-surface text-xl font-bold">Pedifast</div>
    <div class="flex flex-wrap justify-center gap-8">
      <a
        class="text-on-surface-variant hover:text-primary text-sm transition-colors duration-150"
        href="#">Términos y Condiciones</a
      >
      <a
        class="text-on-surface-variant hover:text-primary text-sm transition-colors duration-150"
        href="#">Política de Privacidad</a
      >
      <a
        class="text-on-surface-variant hover:text-primary text-sm transition-colors duration-150"
        href="#">Contacto</a
      >
      <a
        class="text-on-surface-variant hover:text-primary text-sm transition-colors duration-150"
        href="#">Integraciones</a
      >
    </div>
    <p class="text-on-surface-variant text-center text-sm md:text-right">
      © 2026 Pedifast. Todos los derechos reservados.
    </p>
  </div>
</footer>
