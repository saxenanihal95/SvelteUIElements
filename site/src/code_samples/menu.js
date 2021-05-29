const menuCodeSample = `
// import Menu Component

import { Menu } from "svelte-ui-elements";


import MenuItemOne from "./menuItems/One.svelte";
import MenuItemTwo from "./menuItems/Two.svelte";

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

// Vertical Menu
<Menu
  {items}
  mode="vertical"
  defaultActiveKey="item1"
  containerStyle="margin-bottom: 20px" 
/>

// Horizontal Menu
<Menu
  {items}
  mode="horizontal"
  defaultActiveKey="item1"
  containerStyle="margin-bottom: 20px" 
/>
  `;

export default menuCodeSample;
