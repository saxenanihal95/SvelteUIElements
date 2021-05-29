<script>
  import Button from "../Button/Button.svelte";
  export let items = [];
  export let mode = "horizontal";
  export let containerStyle = {};

  export let defaultActiveKey = "";

  let activeComponent = items.find(({ key }) => key === defaultActiveKey);

  const setIsActive = key => {
    defaultActiveKey = key;
    activeComponent = items.find(({ key }) => key === defaultActiveKey);
    console.log({ key, activeComponent, defaultActiveKey });
  };

  const className = mode === "vertical" ? " Vertical" : " Horizontal";
</script>

<style lang="scss" global>
  @import "./Menu.scss";
</style>

<div
  class="MenuContainer{mode === 'vertical' ? ' VerticalContainer' : ' HorizontalContainer'}"
  style={containerStyle}>
  <div class="Menu{className}">
    {#each items as item}
      <div
        on:click={() => setIsActive(item.key)}
        class="MenuItem{defaultActiveKey === item.key ? ` ${className}__active` : ''}">
        {item.name}
      </div>
    {/each}

  </div>
  <svelte:component this={activeComponent && activeComponent.component} />
</div>
