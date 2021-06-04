<script>
  import Timeline from "../../../../packages/TimeLine/Timeline.svelte";
  import code_sample from "../../code_samples/timeline";
  import { TYPES, DEFAULT_VALUES } from "../../utils/constants";
  import Description from "../Description.svelte";
  import Section from "../Section.svelte";

  const rows = [
    {
      property: "list",
      description: "Array of object of timeline with title and description",
      type: TYPES.ARRAY,
      default: DEFAULT_VALUES.EMPTY_ARRAY
    },
    {
      property: "mode",
      description: "Mode of timeline can be vertical or vertical-alternate",
      type: TYPES.STRING,
      default: "vetical"
    }
  ];

  const list = [
    { title: "2017", description: "Lorem ipsum dolor sit amet, consectetur." },
    { title: "2018", description: "Lorem ipsum dolor sit amet, consectetur." },
    { title: "2019", description: "Lorem ipsum dolor sit amet, consectetur." }
  ];
</script>

<Description title="Timeline Component" {rows} {code_sample}>
  <Section title="Vertical Timeline">
    <Timeline {list} />
  </Section>
  <Section title="Vertical Alternate Timeline">
    <Timeline {list} mode="vertical-alternate" />
  </Section>
</Description>
