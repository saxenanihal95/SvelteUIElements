<script>
  import ButtonDescription from "../components/ButtonDescription.svelte";
  import Row from "../../../packages/Row.svelte";
  import MenuDescription from "../components/MenuDescription.svelte";
  import Menu from "../../../packages/Menu.svelte";
  import TableDescription from "../components/TableDescription.svelte";

  const items = [
    {
      key: "button",
      component: ButtonDescription,
      name: "Button"
    },
    { key: "menu", component: MenuDescription, name: "Menu" },
    { key: "table", component: TableDescription, name: "Table" }
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
