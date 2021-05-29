<script>
  import Button from "../Button/Button.svelte";
  import { onMount } from "svelte";
  export let items = [];
  export let mode = "horizontal";
  export let containerStyle = {};

  export let defaultActiveKey = "";

  let activeComponent = items.find(({ key }) => key === defaultActiveKey);

  const setIsActive = key => {
    activeComponent = items.find(({ key: k }) => key === k);
    defaultActiveKey = key;
  };

  const containerClassName = `MenuContainer ${
    mode === "vertical" ? "VerticalContainer" : "HorizontalContainer"
  }`;
  const className = mode === "vertical" ? " Vertical" : " Horizontal";
</script>

<style lang="scss" global>
  @import "./Menu.scss";
</style>

<div class={containerClassName} style={containerStyle}>
  <div class="Menu{className}">
    {#each items as item}
      <div
        on:click={() => setIsActive(item.key)}
        class="MenuItem{defaultActiveKey === item.key ? ` ${className}__active` : ''}">
        {item.name}
      </div>
    {/each}

  </div>
  <svelte:component
    this={(activeComponent && activeComponent.component) || false} />
</div>
