<script>
  import Button from "./Button.svelte";
  export let items = [];
  export let mode = "horizontal";

  export let activeKey = "";

  const setIsActive = key => (activeKey = key);
</script>

<style>
  .Menu {
    display: flex;
    cursor: pointer;
  }

  .Vertical {
    flex-direction: column;
    border-right: 1px solid #f0f0f0;
  }

  .Horizontal .Active {
    color: #1890ff;
    border-bottom: 2px solid #1890ff;
  }

  .Vertical .Active {
    color: #1890ff;
    border-right: 2px solid #1890ff;
    background-color: #e6f7ff;
  }

  .MenuItem {
    padding: 10px;
  }
</style>

<div class="Menu{mode === 'vertical' ? ' Vertical' : ' Horizontal'}">
  {#each items as item}
    <div
      on:click={() => setIsActive(item.key)}
      class="MenuItem{activeKey === item.key ? ' Active' : ''}">
      {item.name}
    </div>
  {/each}

</div>
