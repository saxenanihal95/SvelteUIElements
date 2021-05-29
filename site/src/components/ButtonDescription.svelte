<script>
  import Button from "../../../packages/Button/Button.svelte";
  import Table from "../../../packages/Table/Table.svelte";
  import Column from "../../../packages/Column/Column.svelte";
  import Rating from "../../../packages/Rating/Rating.svelte";
  import Prism from "./PrismJS.svelte";
  import code_sample from "../code_samples/button";

  const columns = [
    { key: "property", title: "Property" },
    { key: "description", title: "Description" },
    { key: "type", title: "Type" },
    { key: "default", title: "Default Value" }
  ];

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
  <h3 style="margin-bottom: 20px">Types of Button</h3>
  <div class="Button">
    <Button>Default</Button>
    <Button type="Primary">Primary</Button>
    <Button type="Dashed">Dashed</Button>
    <Button type="Link">Link</Button>
  </div>
  <h3 style="margin-bottom: 20px">Button Loading</h3>
  <div class="Button">
    <Button loading type="Primary">Primary</Button>
  </div>
  <Prism language="js" code={code_sample} header="Sample Code" />
  <div>
    <h2>API</h2>
    <Table {rows} {columns} />
  </div>
</Column>
