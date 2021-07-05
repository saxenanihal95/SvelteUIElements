<script>
  import ButtonDescription from "../components/Button/ButtonDescription.svelte";
  import Row from "../../../packages/Row/Row.svelte";
  import MenuDescription from "../components/Menu/MenuDescription.svelte";
  import Menu from "../../../packages/Menu/Menu.svelte";
  import TableDescription from "../components/Table/TableDescription.svelte";
  import RatingDescription from "../components/Rating/RatingDescription.svelte";
  import TimelineDescription from "../components/Timeline/TimelineDescription.svelte";
  import CardDescription from "../components/Card/CardDescription.svelte";
  import ListDescription from "../components/List/ListDescription.svelte";
  import SnackbarDescription from "../components/Snackbar/SnackbarDescription.svelte";
  import TooltipDescription from "../components/Tooltip/TooltipDescription.svelte";
  import ProgressBarDescription from "../components/ProgressBar/ProgressBarDescription.svelte";

  const items = [
    {
      key: "button",
      component: ButtonDescription,
      name: "Button",
    },
    { key: "menu", component: MenuDescription, name: "Menu" },
    { key: "table", component: TableDescription, name: "Table" },
    { key: "rating", component: RatingDescription, name: "Rating" },
    { key: "timeline", component: TimelineDescription, name: "Timeline" },
    { key: "card", component: CardDescription, name: "Card" },
    { key: "list", component: ListDescription, name: "List" },
    { key: "snackbar", component: SnackbarDescription, name: "Snackbar" },
    { key: "tooltip", component: TooltipDescription, name: "Tooltip" },
    {
      key: "progressbar",
      component: ProgressBarDescription,
      name: "Progress Bar",
    },
  ];
</script>

<svelte:head>
  <title>Svelte UI Elements</title>
</svelte:head>
<Row>
  <Menu {items} mode="vertical" defaultActiveKey="button" />
</Row>

<style>
</style>
