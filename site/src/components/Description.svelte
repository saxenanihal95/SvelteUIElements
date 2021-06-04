<script>
  import Table from "../../../packages/Table/Table.svelte";
  import Column from "../../../packages/Column/Column.svelte";
  import Prism from "./PrismJS.svelte";
  import { columns } from "../utils/helpers";
  export let title = "";
  export let code_sample = "";
  export let rows = "";
</script>

<Column style="padding: 20px">
  <h1 style="margin-bottom: 20px">{title}</h1>
  <h2 style="margin-bottom: 20px">Examples</h2>
  <slot />
  <Prism language="js" code={code_sample} header="Sample Code" />
  <div>
    <h2>API</h2>
    <Table {rows} {columns} />
  </div>
</Column>
