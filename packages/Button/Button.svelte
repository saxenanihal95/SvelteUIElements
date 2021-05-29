<script>
  import { bubble, listen } from "svelte/internal";
  import { current_component } from "svelte/internal";
  import Spinner from "../Spinner/Spinner.svelte";
  import { forwardEventsBuilder } from "../../src/forwardEvents.js";
  export let type = "";
  export let loading = false;

  const forwardEvents = forwardEventsBuilder(current_component);
</script>

<style lang="scss" global>
  @import "./Button.scss";
</style>

<main>
  <button use:forwardEvents class={type}>
    {#if loading}
      <Spinner />
    {:else}
      <slot />
    {/if}
  </button>
</main>
