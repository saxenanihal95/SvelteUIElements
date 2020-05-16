<script>
  import Button from "./Button.svelte";
  export let items = [];
  export let mode = "vertical";

  let isActive = {};

  const setIsActive = key => (isActive[key] = true);
</script>

<style>
  .Menu {
    display: flex;
  }

  .Active {
    color: #1890ff;
    border-bottom: 2px solid #1890ff;
  }
</style>

<div class="Menu">
  {#each items as item}
    <div
      on:click={() => setIsActive(item.key)}
      class="Menu{isActive[item.key] ? ' Active' : ''}">
      {item.name}
    </div>
  {/each}

</div>
