<script>
  import Button from "../../../packages/Button.svelte";
  import Layout from "../../../packages/Layout.svelte";
  import Menu from "../../../packages/Menu.svelte";
</script>

<style>
  .ButtonContainer {
    display: flex;
    justify-content: space-between;
    width: 300px;
    border: 1px solid lightgray;
    padding: 10px;
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>
<Layout>

  <Menu
    items={[{ key: 'button', name: 'Button Component' }, { key: 'layout', name: 'Layout Component' }]}
    mode="horizontal" />
  <div class="ButtonContainer">
    <Button>Default</Button>
    <Button type="Primary">Primary</Button>
    <Button type="Dashed">Dashed</Button>
    <Button type="Link">Link</Button>
  </div>
</Layout>
