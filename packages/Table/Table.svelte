<script>
  export let rows = [];
  export let columns = [];
  const sortObject = o =>
    Object.keys(o)
      .sort()
      .reduce((r, k) => ((r[k] = o[k]), r), {});
  const sortedRows = rows.map(r => sortObject(r));
  const sortedColums = columns.sort((a, b) => a.key.localeCompare(b.key));
  console.log({ sortedRows, sortedColums });
</script>

<style lang="scss" global>
  @import "./Table.scss";
</style>

<main>
  <table>

    <tr>
      {#each sortedColums as column}
        <th>{column.title}</th>
      {/each}
    </tr>
    {#each sortedRows as row}
      <tr>
        {#each Object.keys(row) as rowKey}
          <td>{row[rowKey]}</td>
        {/each}
      </tr>
    {/each}

  </table>
</main>
