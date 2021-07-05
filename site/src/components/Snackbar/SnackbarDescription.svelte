<script>
  import Button from "../../../../packages/Button/Button.svelte";
  import Snackbar from "../../../../packages/Snackbar/Snackbar.svelte";
  import code_sample from "../../code_samples/snackbar";
  import { DEFAULT_VALUES } from "../../utils/constants";

  import Description from "../Description.svelte";
  import Section from "../Section.svelte";

  const rows = [
    {
      property: "description",
      description: "content of snackbar",
      type: "String",
      default: DEFAULT_VALUES.EMPTY_STRING,
    },
    {
      property: "visible",
      description: "to show and hide snackbar",
      type: "Boolean",
      default: "false",
    },
  ];

  let visible = false;

  const showSnackbar = () => {
    visible = true;
  };
</script>

<Description title="Snackbar Component" {rows} {code_sample}>
  <Section title="Snackbar">
    <Button on:click={showSnackbar}>Show snackbar</Button>
    <Snackbar {visible} description="Snackbar Description" />
  </Section>
</Description>
