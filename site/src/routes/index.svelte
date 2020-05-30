<script>
  import ButtonDescription from "../components/ButtonDescription.svelte";
  import Row from "../../../packages/Row.svelte";
  import MenuDescription from "../components/MenuDescription.svelte";
  import Menu from "../../../packages/Menu.svelte";

  const items = [
    {
      key: "button",
      component: ButtonDescription,
      name: "Button"
    },
    { key: "menu", component: MenuDescription, name: "Menu" }
  ];
</script>

<style>

</style>

<svelte:head>
  <title>Svelte UI Elements</title>
</svelte:head>
<Row>

  <Menu {items} mode="vertical" defaultActiveKey="button" />

</Row>
