<script>
  import Menu from "../../../../packages/Menu/Menu.svelte";
  import Table from "../../../../packages/Table/Table.svelte";
  import ButtonDescription from "../Button/ButtonDescription.svelte";
  import Column from "../../../../packages/Column/Column.svelte";
  import code_sample from "../../code_samples/table";
  import { columns } from "../../utils/helpers";
  import Prism from "../PrismJS.svelte";

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
