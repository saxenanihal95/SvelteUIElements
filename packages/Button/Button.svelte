<script>
  import { bubble, listen } from "svelte/internal";
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder } from "../../src/forwardEvents.js";
  export let type = "";

  const forwardEvents = forwardEventsBuilder(current_component);
</script>

<style lang="scss" global>
  @import "./Button.scss";
</style>

<main>
  <button use:forwardEvents class={type}>
    <slot />
  </button>
</main>
