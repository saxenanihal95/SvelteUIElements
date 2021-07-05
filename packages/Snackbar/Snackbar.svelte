<script>
  export let description = "";
  export let visible = false;
</script>

<div class="snackbar{visible ? ' snackbar__show' : ''}">{description}</div>

<style lang="scss" global>
  @import "./Snackbar.scss";
</style>
