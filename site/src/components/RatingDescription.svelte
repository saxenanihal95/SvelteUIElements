<script>
  import Button from "../../../packages/Button/Button.svelte";
  import Table from "../../../packages/Table/Table.svelte";
  import Column from "../../../packages/Column/Column.svelte";
  import Rating from "../../../packages/Rating/Rating.svelte";
  import Prism from "./PrismJS.svelte";
  import code_sample from "../code_samples/rating";
  import { columns } from "../utils/helpers";

  const rows = [
    {
      property: "value",
      description: "can be set from 0 to 5",
      type: "Number",
      default: "0"
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

  <h1 style="margin-bottom: 20px">Rating Component</h1>
  <h2 style="margin-bottom: 20px">Examples</h2>
  <div class="Button">
    <Rating value={3} />
  </div>

  <Prism language="js" code={code_sample} header="Sample Code" />
  <div>
    <h2>API</h2>
    <Table {rows} {columns} />
  </div>
</Column>
