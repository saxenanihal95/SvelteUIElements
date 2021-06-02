<script>
  import Menu from "../../../../packages/Menu/Menu.svelte";
  import Table from "../../../../packages/Table/Table.svelte";
  import ButtonDescription from "../Button/ButtonDescription.svelte";
  import Column from "../../../../packages/Column/Column.svelte";
  import MenuItemOne from "./One.svelte";
  import MenuItemTwo from "./Two.svelte";
  import code_sample from "../../code_samples/menu";
  import { columns } from "../../utils/helpers";
  import Prism from "../PrismJS.svelte";

  const items = [
    {
      key: "item1",
      component: MenuItemOne,
      name: "MenuItemOne"
    },
    {
      key: "item2",
      component: MenuItemTwo,
      name: "MenuItemTwo"
    }
  ];

  const rows = [
    {
      property: "items",
      description: "Array of item of Menu",
      type: "Array",
      default: "[ ]"
    },
    {
      property: "mode",
      description: "Mode of the menu can be horizontal or vertical",
      type: "String",
      default: "horizontal"
    },
    {
      property: "defaultActiveKey",
      description: "The key which is active by default",
      type: "String",
      default: '""'
    },
    {
      property: "containerStyle",
      description: "To provide sytle to the container of Menu",
      type: "String",
      default: '""'
    }
  ];
</script>

<style>

</style>

<Column style="padding: 20px">

  <h1 style="margin-bottom: 20px">Menu Component</h1>
  <h2 style="margin-bottom: 20px">Examples</h2>
  <h3 style="margin-bottom: 20px">Vertical Menu :</h3>

  <Menu
    {items}
    mode="vertical"
    defaultActiveKey="item1"
    containerStyle="margin-bottom: 20px" />

  <h3 style="margin-bottom: 20px">Horizontal Menu :</h3>

  <Menu
    {items}
    mode="horizontal"
    defaultActiveKey="item1"
    containerStyle="margin-bottom: 20px" />

  <Prism language="js" code={code_sample} header="Sample Code" />
  <div>
    <h2>API</h2>
    <Table {rows} {columns} />
  </div>
</Column>
