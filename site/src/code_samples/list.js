const buttonCodeSample = `
// import List Component

import { List } from "svelte-ui-elements";

<script>
    const list = ["Adele", "Agnes", "Billy", "Bob", "Calvin"];
</script>

// List
<List {list} />

// List with header and footer
<List {list} header="Header" footer="Footer" />

  `;

export default buttonCodeSample;
