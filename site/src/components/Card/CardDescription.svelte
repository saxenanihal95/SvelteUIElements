<script>
  import code_sample from "../../code_samples/card";
  import Card from "../../../../packages/Card/Card.svelte";
  import Section from "../Section.svelte";
  import Description from "../Description.svelte";
  import { TYPES, DEFAULT_VALUES } from "../../utils/constants";

  const rows = [
    {
      property: "title",
      description: "Title of the card",
      type: TYPES.STRING,
      default: DEFAULT_VALUES.EMPTY_STRING
    },
    {
      property: "coverImage",
      description: "To add coverimage to the card (src attribute of img tag)",
      type: TYPES.STRING,
      default: DEFAULT_VALUES.EMPTY_STRING
    }
  ];
</script>

<Description title="Card Component" {rows} {code_sample}>
  <Section title="Card with title and content">
    <Card title="Card Title">
      <p>card content</p>
      <p>card content</p>
    </Card>
  </Section>
  <Section title="Card with cover image">
    <Card title="Card Title" coverImage="https://via.placeholder.com/150">
      <p>card content</p>
      <p>card content</p>
    </Card>
  </Section>
</Description>
