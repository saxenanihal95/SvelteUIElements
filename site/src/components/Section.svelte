<script>
  export let title = "";
</script>

<style>
  .section {
    display: flex;
    justify-content: space-between;
    min-width: 250px;
    margin-bottom: 20px;
  }
</style>

<h3 style="margin-bottom: 20px">{title}</h3>
<div class="section" {...$$props}>
  <slot />
</div>
