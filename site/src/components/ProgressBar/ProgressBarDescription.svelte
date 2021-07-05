<script>
  import ProgressBar from "../../../../packages/ProgressBar/ProgressBar.svelte";
  import code_sample from "../../code_samples/progressbar";
  import { TYPES } from "../../utils/constants";

  import Description from "../Description.svelte";
  import Section from "../Section.svelte";

  const rows = [
    {
      property: "percent",
      description: "percentage of progress bar (0 to 100)",
      type: TYPES.NUMBER,
      default: 0,
    },
  ];
</script>

<Description title="ProgressBar Component" {rows} {code_sample}>
  <Section title="ProgressBar">
    <ProgressBar percent={22} />
  </Section>
</Description>
