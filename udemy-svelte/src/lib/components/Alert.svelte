<script lang="ts">
  interface Props {
    title?: string;
    message?: string;
    show?: boolean;
    onClose?: () => void;
  }

  let {title, message, show, onClose = () => {}}: Props = $props();
</script>

{#if show}
<div role="alert" class="alert alert-vertical sm:alert-horizontal fixed top-4 right-4 z-50 shadow-lg" style="min-width: 300px;">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info h-6 w-6 shrink-0">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <div>
    <h3 class="font-bold">{title }</h3>
    <div class="text-xs">{message}</div>
  </div>
  <button class="btn btn-sm" onclick={onClose}>Fechar</button>
</div>
{/if}

<style>
  .alert {
    position: fixed;
    top: 1rem;
    right: 1rem;
    max-width: 350px;
    transition: opacity 0.3s;
  }
</style>