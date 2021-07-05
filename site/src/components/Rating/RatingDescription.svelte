<script>
  import Rating from "../../../../packages/Rating/Rating.svelte";
  import code_sample from "../../code_samples/rating";

  import Description from "../Description.svelte";
  import Section from "../Section.svelte";

  const rows = [
    {
      property: "value",
      description: "can be set from 0 to 5",
      type: "Number",
      default: "0",
    },
  ];
</script>

<Description title="Rating Component" {rows} {code_sample}>
  <Section title="Rating">
    <Rating value={3} />
  </Section>
</Description>
