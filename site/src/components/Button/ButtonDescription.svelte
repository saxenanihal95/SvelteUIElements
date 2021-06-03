<script>
  import Button from "../../../../packages/Button/Button.svelte";
  import code_sample from "../../code_samples/button";
  import Description from "../Description.svelte";
  import Section from "../Section.svelte";
  import { TYPES } from "../../utils/constants";

  const rows = [
    {
      property: "type",
      description:
        "can be set to primary, dashed, link or omitted (meaning default)",
      type: TYPES.STRING,
      default: "primary"
    },
    {
      property: "loading",
      description: "to show loader",
      type: TYPES.BOOLEAN,
      default: "false"
    }
  ];
</script>

<Description title="Button Component" {rows} {code_sample}>
  <Section
    title="Types of Button"
    style="min-width: 250px; justify-content: space-between;">
    <Button>Default</Button>
    <Button type="Primary">Primary</Button>
    <Button type="Dashed">Dashed</Button>
    <Button type="Link">Link</Button>
  </Section>
  <Section title="Button Loading">
    <Button loading type="Primary">Primary</Button>
  </Section>
</Description>
