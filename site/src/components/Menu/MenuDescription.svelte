<script>
  import Menu from "../../../../packages/Menu/Menu.svelte";
  import MenuItemOne from "./One.svelte";
  import MenuItemTwo from "./Two.svelte";
  import code_sample from "../../code_samples/menu";
  import Prism from "../PrismJS.svelte";
  import Description from "../Description.svelte";
  import Section from "../Section.svelte";
  import { TYPES, DEFAULT_VALUES } from "../../utils/constants";

  const items = [
    {
      key: "item1",
      component: MenuItemOne,
      name: "MenuItemOne"
    },
    {
      key: "item2",
      component: MenuItemTwo,
      name: "MenuItemTwo"
    }
  ];

  const rows = [
    {
      property: "items",
      description: "Array of item of Menu",
      type: TYPES.ARRAY,
      default: DEFAULT_VALUES.EMPTY_ARRAY
    },
    {
      property: "mode",
      description: "Mode of the menu can be horizontal or vertical",
      type: TYPES.STRING,
      default: "horizontal"
    },
    {
      property: "defaultActiveKey",
      description: "The key which is active by default",
      type: TYPES.STRING,
      default: DEFAULT_VALUES.EMPTY_STRING
    },
    {
      property: "containerStyle",
      description: "To provide sytle to the container of Menu",
      type: TYPES.STRING,
      default: DEFAULT_VALUES.EMPTY_STRING
    }
  ];
</script>

<Description title="Menu Component" {rows} {code_sample}>
  <Section title="Vertical Menu">
    <Menu {items} mode="vertical" defaultActiveKey="item1" />
  </Section>
  <Section title="Horizontal Menu">
    <Menu {items} mode="horizontal" defaultActiveKey="item1" />
  </Section>
</Description>
