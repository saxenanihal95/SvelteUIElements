const tableCodeSample = `
// import Table Component
import { Table } from "svelte-ui-elements";

// key property of columns will be mapped to rows object key name
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  }
];

const rows = [
  {
    name: "Micheal",
    age: 45,
    address: "10 Street Down West"
  },
  {
    name: "Johnny",
    age: 23,
    address: "9 Street Down East"
  }
];

<Table {rows} {columns} />
  `;

export default tableCodeSample;
