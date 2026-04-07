<script lang="ts">
  import { submitLead } from '$lib/supabase';

  let { open = $bindable(false), source = 'landing_page' } = $props();

  let phone = $state('');
  let loading = $state(false);
  let submitted = $state(false);
  let error = $state('');

  async function handleSubmit(e: Event) {
    e.preventDefault();
    if (!phone.trim()) {
      error = 'Por favor ingresa tu número de teléfono';
      return;
    }

    loading = true;
    error = '';

    const result = await submitLead(phone, source);

    loading = false;

    if (result.success) {
      submitted = true;
    } else {
      error = result.error || 'Error al enviar. Intenta de nuevo.';
    }
  }

  function close() {
    open = false;
    setTimeout(() => {
      phone = '';
      submitted = false;
      error = '';
    }, 300);
  }
</script>

{#if open}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
    onclick={(e) => e.target === e.currentTarget && close()}
    role="dialog"
    aria-modal="true"
  >
    <div
      class="bg-surface animate-in fade-in zoom-in w-full max-w-md rounded-2xl p-6 shadow-2xl duration-200"
      onclick={(e) => e.stopPropagation()}
    >
      {#if submitted}
        <div class="text-center">
          <div class="mb-4 flex justify-center">
            <span
              class="material-symbols-outlined text-tertiary text-6xl"
              style="font-variation-settings: 'FILL' 1;"
            >
              check_circle
            </span>
          </div>
          <h3 class="font-headline text-on-surface mb-2 text-xl font-bold">
            ¡Perfecto!
          </h3>
          <p class="text-on-surface-variant mb-6">
            Nos comunicaremos contigo pronto. Gracias por tu interés en
            Pedifast.
          </p>
          <button
            onclick={close}
            class="kinetic-gradient w-full cursor-pointer rounded-xl py-3 text-sm font-bold text-white"
          >
            Cerrar
          </button>
        </div>
      {:else}
        <div class="mb-6 flex items-center justify-between">
          <h3 class="font-headline text-on-surface text-xl font-bold">
            Déjanos tu número
          </h3>
          <button
            onclick={close}
            class="text-on-surface-variant hover:text-on-surface transition-colors"
            aria-label="Cerrar"
          >
            <span class="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        <p class="text-on-surface-variant mb-6 text-sm">
          Te contactaremos para mostrarte cómo Pedifast puede ayudarte.
        </p>

        <form onsubmit={handleSubmit} class="space-y-4">
          <div>
            <input
              type="tel"
              bind:value={phone}
              placeholder="+54 9 11 2345 6789"
              class="ghost-border text-on-surface placeholder:text-on-surface-variant/60 focus:border-primary w-full rounded-xl px-4 py-3 focus:outline-none"
            />
          </div>

          {#if error}
            <p class="text-error text-sm">{error}</p>
          {/if}

          <button
            type="submit"
            disabled={loading}
            class="kinetic-gradient w-full cursor-pointer rounded-xl py-3.5 text-sm font-bold text-white disabled:opacity-50"
          >
            {loading ? 'Enviando...' : 'Me interesa, contáctenme'}
          </button>
        </form>
      {/if}
    </div>
  </div>
{/if}
