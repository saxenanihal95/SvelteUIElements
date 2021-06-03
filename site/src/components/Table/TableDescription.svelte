<script>
  import Table from "../../../../packages/Table/Table.svelte";
  import ButtonDescription from "../Button/ButtonDescription.svelte";
  import code_sample from "../../code_samples/table";
  import { TYPES, DEFAULT_VALUES } from "../../utils/constants";
  import Description from "../Description.svelte";
  import Section from "../Section.svelte";

  const rows = [
    {
      property: "columns",
      description: "Array of columns of Table",
      type: TYPES.ARRAY,
      default: DEFAULT_VALUES.EMPTY_ARRAY
    },
    {
      property: "rows",
      description: "Array of columns of Table",
      type: TYPES.ARRAY,
      default: DEFAULT_VALUES.EMPTY_ARRAY
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

<Description title="Table Component" {rows} {code_sample}>
  <Section title="Table">
    <Table rows={dataSource} columns={columns1} />
  </Section>
</Description>
