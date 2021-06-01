<script>
  export let title = "";
  export let description = "";
</script>

{#if title}
  <strong class="edate">{title}</strong>
{/if}
{#if description}
  <p class="etxt">{description}</p>
{/if}
