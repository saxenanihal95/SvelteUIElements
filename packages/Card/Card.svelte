<script>
  export let title = "";
  export let coverImage = "";
</script>

<style lang="scss" global>
  @import "./Card.scss";
</style>

<div class="card">
  {#if title}
    <div class="card__header">
      <div class="card__header__title">{title}</div>
    </div>
  {/if}
  {#if coverImage}
    <img
      src={coverImage}
      alt="Avatar"
      class="card__image{title ? '' : ' card__image__round'}" />
  {/if}
  <div class="card__container">
    <slot />
  </div>
</div>
