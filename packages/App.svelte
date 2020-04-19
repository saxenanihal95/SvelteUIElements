<script>
  import Button from "./Button.svelte";
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>

  <Button>Default</Button>
  <Button type="Primary">Primary</Button>
  <Button type="Dashed">Primary</Button>
  <Button type="Link">Link</Button>
</main>
