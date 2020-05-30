<script>
  import Button from "./Button.svelte";
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

<style>
  .Menu {
    display: flex;
    cursor: pointer;
    min-width: 200px;
  }

  .MenuContainer {
    display: flex;
  }

  .HorizontalContainer {
    flex-direction: column;
  }

  .Vertical {
    flex-direction: column;
    border-right: 1px solid #f0f0f0;
  }

  .Horizontal {
    border-bottom: 1px solid #f0f0f0;
  }

  .Horizontal .Active {
    color: #26c6da;
    border-bottom: 2px solid #0095a8;
  }

  .Vertical .Active {
    color: #26c6da;
    border-right: 2px solid #0095a8;
    background-color: #e6f7ff;
  }

  .MenuItem {
    padding: 10px;
  }
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
