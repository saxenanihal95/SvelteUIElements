const tableCodeSample = `
// import Table Component
import { Table } from "svelte-ui-elements";

// key property of columns will be mapped to rows object key name
const columns = [
    { key: "property", title: "Property" },
    { key: "description", title: "Description" },
    { key: "type", title: "Type" },
    { key: "default", title: "default" }
  ];

const rows = [
    {
      property: "items",
      description: "Array of item of Menu",
      type: "Array",
      default: "[ ]"
    },
    {
      property: "mode",
      description: "Mode of the menu can be horizontal or vertical",
      type: "String",
      default: "horizontal"
    },
    {
      property: "defaultActiveKey",
      description: "The key which is active by default",
      type: "String",
      default: '""'
    },
    {
      property: "containerStyle",
      description: "To provide sytle to the container of Menu",
      type: "String",
      default: '""'
    }
];

<Table {rows} {columns} />
  `;

export default tableCodeSample;
