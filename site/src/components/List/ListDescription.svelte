<script>
  import Table from "../../../../packages/Table/Table.svelte";
  import Column from "../../../../packages/Column/Column.svelte";
  import Prism from "../PrismJS.svelte";
  import code_sample from "../../code_samples/list";
  import Card from "../../../../packages/Card/Card.svelte";
  import List from "../../../../packages/List/List.svelte";
  import Row from "../../../../packages/Row/Row.svelte";
  import { columns } from "../../utils/helpers";

  const rows = [
    {
      property: "type",
      description:
        "can be set to primary, dashed, link or omitted (meaning default)",
      type: "String",
      default: "primary"
    },
    {
      property: "loading",
      description: "to show loader",
      type: "Boolean",
      default: "false"
    }
  ];
  const list = ["Adele", "Agnes", "Billy", "Bob", "Calvin"];
</script>

<style>
  .Button {
    display: flex;
    justify-content: space-between;
    min-width: 250px;
    margin-bottom: 20px;
  }
</style>

<Column style="padding: 20px">

  <h1 style="margin-bottom: 20px">Button Component</h1>
  <h2 style="margin-bottom: 20px">Examples</h2>
  <h3 style="margin-bottom: 20px">List</h3>
  <div class="Button">
    <List {list} />
  </div>
  <h3 style="margin-bottom: 20px">List with header and footer</h3>
  <div class="Button">
    <List {list} header="Header" footer="Footer" />
  </div>
  <Prism language="js" code={code_sample} header="Sample Code" />
  <div>
    <h2>API</h2>
    <Table {rows} {columns} />
  </div>
</Column>
