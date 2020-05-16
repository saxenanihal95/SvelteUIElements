<script>
  export let type = "";
  export let rest = {};
</script>

<style>
  button {
    background-image: none;
    border: 1px solid transparent;
    background-image: none;
    background-color: #fff;
    border-color: #d9d9d9;
    padding: 4px 15px;
  }
  button:hover {
    color: #1890ff;
    border-color: #1890ff;
    cursor: pointer;
  }
  .Primary {
    color: #fff;
    background-color: #1890ff;
    border-color: #1890ff;
  }
  .Primary:hover {
    color: #ffffff;
    opacity: 0.7;
  }
  .Dashed {
    border-style: dashed;
  }
  .Link {
    border: none;
    color: #1890ff;
  }
  .Link:hover {
    opacity: 0.7;
  }
</style>

<main>
  <button class={type} {...rest}>
    <slot />
  </button>
</main>
