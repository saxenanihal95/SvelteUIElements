<script>
  import Button from "../../../packages/Button.svelte";
  import Layout from "../../../packages/Layout.svelte";
  import Menu from "../../../packages/Menu.svelte";
</script>

<style>
  .ButtonContainer {
    display: flex;
    padding: 10px;
    width: 100%;
    flex-direction: column;
  }
  .Button {
    display: flex;
    justify-content: space-between;
    width: 300px;
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>
<Layout>

  <Menu
    items={[{ key: 'button', name: 'Button Component' }]}
    mode="vertical"
    activeKey="button" />
  <div class="ButtonContainer">

    <h2>Button Component</h2>
    <div class="Button">
      <Button>Default</Button>
      <Button type="Primary">Primary</Button>
      <Button type="Dashed">Dashed</Button>
      <Button type="Link">Link</Button>
    </div>
  </div>
</Layout>
