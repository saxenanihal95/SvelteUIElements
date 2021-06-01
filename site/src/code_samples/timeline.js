const buttonCodeSample = `
<script>
// import Timeline Component
import { TimeLine } from "svelte-ui-elements";

const list = [
    { title: "2017", description: "Lorem ipsum dolor sit amet, consectetur." },
    { title: "2018", description: "Lorem ipsum dolor sit amet, consectetur." },
    { title: "2019", description: "Lorem ipsum dolor sit amet, consectetur." }
];

</script>

// Vertical Timeline
<Timeline {list} />

// Vertical Alternate Timeline
<Timeline {list} mode="vertical-alternate" />

  `;

export default buttonCodeSample;
