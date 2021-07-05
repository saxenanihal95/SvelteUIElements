<script>
  import Tooltip from "../../../../packages/Tooltip/Tooltip.svelte";
  import code_sample from "../../code_samples/tooltip";
  import { DEFAULT_VALUES } from "../../utils/constants";

  import Description from "../Description.svelte";
  import Section from "../Section.svelte";

  const rows = [
    {
      property: "title",
      description: "title of tooltip",
      type: "String",
      default: DEFAULT_VALUES.EMPTY_STRING,
    },
  ];
</script>

<Description title="Tooltip Component" {rows} {code_sample}>
  <Section title="Tooltip">
    <Tooltip title="Tooltip text"><span>Hover over me</span></Tooltip>
  </Section>
</Description>
