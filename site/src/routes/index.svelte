<script>
  import ButtonDescription from "../components/ButtonDescription.svelte";
  import Row from "../../../packages/Row/Row.svelte";
  import MenuDescription from "../components/MenuDescription.svelte";
  import Menu from "../../../packages/Menu/Menu.svelte";
  import TableDescription from "../components/TableDescription.svelte";
  import RatingDescription from "../components/RatingDescription.svelte";

  const items = [
    {
      key: "button",
      component: ButtonDescription,
      name: "Button"
    },
    { key: "menu", component: MenuDescription, name: "Menu" },
    { key: "table", component: TableDescription, name: "Table" },
    { key: "rating", component: RatingDescription, name: "Rating" }
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
