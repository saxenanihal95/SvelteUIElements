<script>
  import Button from "../../../../packages/Button/Button.svelte";
  import Table from "../../../../packages/Table/Table.svelte";
  import Column from "../../../../packages/Column/Column.svelte";
  import Prism from "../PrismJS.svelte";
  import code_sample from "../../code_samples/card";
  import Card from "../../../../packages/Card/Card.svelte";
  import { columns } from "../../utils/helpers";

  const rows = [
    {
      property: "title",
      description: "Title of the card",
      type: "String",
      default: '""'
    },
    {
      property: "coverImage",
      description: "To add coverimage to the card (src attribute of img tag)",
      type: "String",
      default: '""'
    }
  ];
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

  <h1 style="margin-bottom: 20px">Card Component</h1>
  <h2 style="margin-bottom: 20px">Examples</h2>
  <h3 style="margin-bottom: 20px">Card with title and content</h3>
  <div class="Button">
    <Card title="Card Title">
      <p>card content</p>
      <p>card content</p>
    </Card>
  </div>
  <h3 style="margin-bottom: 20px">Card with cover image</h3>
  <div class="Button">
    <Card title="Card Title" coverImage="https://via.placeholder.com/150">
      <p>card content</p>
      <p>card content</p>
    </Card>
  </div>
  <Prism language="js" code={code_sample} header="Sample Code" />
  <div>
    <h2>API</h2>
    <Table {rows} {columns} />
  </div>
</Column>
