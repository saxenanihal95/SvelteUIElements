<script>
  export let list = [];
  export let header = "";
  export let footer = "";
</script>

<style lang="scss" global>
  @import "./List.scss";
</style>

<div class="list-container">
  {#if header}
    <div class="list-header">{header}</div>
  {/if}
  <ul class="list">
    {#each list as listItem}
      <li>{listItem}</li>
    {/each}
  </ul>
  {#if footer}
    <div class="list-footer">{footer}</div>
  {/if}
</div>
