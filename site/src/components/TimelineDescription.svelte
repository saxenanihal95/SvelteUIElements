<script>
  import Table from "../../../packages/Table/Table.svelte";
  import Column from "../../../packages/Column/Column.svelte";
  import Rating from "../../../packages/Rating/Rating.svelte";
  import Timeline from "../../../packages/TimeLine/Timeline.svelte";
  import Prism from "./PrismJS.svelte";
  import code_sample from "../code_samples/timeline";
  import { columns } from "../utils/helpers";

  const rows = [
    {
      property: "list",
      description: "Array of object of timeline with title and description",
      type: "Array",
      default: "[]"
    },
    {
      property: "mode",
      description: "Mode of timeline can be vertical or vertical-alternate",
      type: "String",
      default: "vetical"
    }
  ];

  const list = [
    { title: "2017", description: "Lorem ipsum dolor sit amet, consectetur." },
    { title: "2018", description: "Lorem ipsum dolor sit amet, consectetur." },
    { title: "2019", description: "Lorem ipsum dolor sit amet, consectetur." }
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

  <h1 style="margin-bottom: 20px">Button Component</h1>
  <h2 style="margin-bottom: 20px">Examples</h2>
  <h3 style="margin-bottom: 20px">Vertical Timeline</h3>
  <div class="Button">
    <Timeline {list} />
  </div>

  <h3 style="margin-bottom: 20px">Vertical Alternate Timeline</h3>
  <div class="Button">
    <Timeline {list} mode="vertical-alternate" />
  </div>

  <Prism language="js" code={code_sample} header="Sample Code" />
  <div>
    <h2>API</h2>
    <Table {rows} {columns} />
  </div>
</Column>
