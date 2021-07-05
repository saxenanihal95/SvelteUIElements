<script>
  export let title = "";
</script>

<div class="tooltip">
  <slot />
  <span class="tooltip__tooltiptext">{title}</span>
</div>

<style lang="scss" global>
  @import "./Tooltip.scss";
</style>
