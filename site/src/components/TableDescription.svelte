<script>
  import Menu from "../../../packages/Menu/Menu.svelte";
  import Table from "../../../packages/Table/Table.svelte";
  import ButtonDescription from "./ButtonDescription.svelte";
  import Column from "../../../packages/Column/Column.svelte";
  import MenuItemOne from "./menuItems/One.svelte";
  import MenuItemTwo from "./menuItems/Two.svelte";

  import Prism from "./PrismJS.svelte";

  let code_sample = `
// import Table Component
import { Table } from "svelte-ui-elements";

// key property of columns will be mapped to rows object key name
const columns = [
    { key: "property", title: "Property" },
    { key: "description", title: "Description" },
    { key: "type", title: "Type" },
    { key: "default", title: "default" }
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

<Table {rows} {columns} />
  `;

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

  const columns = [
    { key: "property", title: "Property" },
    { key: "description", title: "Description" },
    { key: "type", title: "Type" },
    { key: "default", title: "default" }
  ];

  const rows = [
    {
      property: "columns",
      description: "Array of columns of Table",
      type: "Array",
      default: "[ ]"
    },
    {
      property: "rows",
      description: "Array of columns of Table",
      type: "Array",
      default: "[ ]"
    }
  ];

  const dataSource = [
    {
      name: "Micheal",
      age: 45,
      address: "10 Street Down West"
    },
    {
      name: "Johnny",
      age: 23,
      address: "9 Street Down East"
    }
  ];

  const columns1 = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address"
    }
  ];
</script>

<style>

</style>

<Column style="padding: 20px">

  <h1 style="margin-bottom: 20px">Table Component</h1>
  <div style="margin-bottom: 20px">
    <h2 style="margin-bottom: 20px">Examples</h2>

    <Table rows={dataSource} columns={columns1} />
  </div>

  <Prism language="js" code={code_sample} header="Sample Code" />
  <div>
    <h2>API</h2>
    <Table {rows} {columns} />
  </div>
</Column>
