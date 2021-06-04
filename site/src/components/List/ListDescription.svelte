<script>
  import code_sample from "../../code_samples/list";
  import List from "../../../../packages/List/List.svelte";
  import { columns } from "../../utils/helpers";
  import Section from "../Section.svelte";
  import Description from "../Description.svelte";
  import { TYPES, DEFAULT_VALUES } from "../../utils/constants";

  const rows = [
    {
      property: "list",
      description: "Array of list items",
      type: TYPES.ARRAY,
      default: DEFAULT_VALUES.EMPTY_ARRAY
    },
    {
      property: "header",
      description: "Header of list component",
      type: TYPES.STRING,
      default: DEFAULT_VALUES.EMPTY_STRING
    },
    {
      property: "footer",
      description: "Footer of list component",
      type: TYPES.STRING,
      default: DEFAULT_VALUES.EMPTY_STRING
    }
  ];
  const list = ["Adele", "Agnes", "Billy", "Bob", "Calvin"];
</script>

<Description title="List Component" {rows} {code_sample}>
  <Section title="List">
    <List {list} />
  </Section>
  <Section title="List with header and footer">
    <List {list} header="Header" footer="Footer" />
  </Section>
</Description>
