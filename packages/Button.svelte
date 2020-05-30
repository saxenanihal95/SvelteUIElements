<script>
  import { bubble, listen } from "svelte/internal";
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder } from "../src/forwardEvents.js";
  export let type = "";

  const forwardEvents = forwardEventsBuilder(current_component);
</script>

<style>
  button {
    all: unset;
    background-image: none;
    border: 1px solid transparent;
    background-image: none;
    background-color: #fff;
    border-color: #d9d9d9;
    padding: 4px 15px;
  }
  button:hover {
    color: #26c6da;
    border-color: #26c6da;
    cursor: pointer;
  }
  button:focus {
    border-color: #26c6da;
    cursor: pointer;
  }
  .Primary {
    color: #fff;
    background-color: #26c6da;
    border-color: #26c6da;
  }
  .Primary:hover {
    color: #ffffff;
    opacity: 0.7;
  }
  .Dashed {
    border-style: dashed;
  }
  .Link {
    border: none;
    color: #26c6da;
  }
  .Link:hover {
    opacity: 0.7;
  }
</style>

<main>
  <button use:forwardEvents class={type}>
    <slot />
  </button>
</main>
