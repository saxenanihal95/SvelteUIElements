<script>
  export let value = 0;
  const list = new Array(5).fill(true, 0, value);
  console.log(`list`, list);
  const getClassName = checked =>
    `fa fa-star rating ${checked ? "rating__checked" : "rating__unchecked"}`;
</script>

<style lang="scss" global>
  @import "./Rating.scss";
</style>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
</svelte:head>

<main>
  {#each list as l}
    <span class={getClassName(l)} />
  {/each}
</main>
