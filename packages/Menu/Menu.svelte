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
</script>

<style lang="scss" global>
  @import "./Menu.scss";
</style>

<div
  class="MenuContainer{mode === 'vertical' ? ' VerticalContainer' : ' HorizontalContainer'}"
  style={containerStyle}>
  <div class="Menu{mode === 'vertical' ? ' Vertical' : ' Horizontal'}">
    {#each items as item}
      <div
        on:click={() => setIsActive(item.key)}
        class="MenuItem{defaultActiveKey === item.key ? ' Active' : ''}">
        {item.name}
      </div>
    {/each}

  </div>
  <svelte:component this={activeComponent && activeComponent.component} />
</div>
