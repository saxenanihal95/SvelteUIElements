<script>
  export let rows = [];
  export let columns = [];
  const sortObject = o =>
    Object.keys(o)
      .sort()
      .reduce((r, k) => ((r[k] = o[k]), r), {});
  const sortedRows = rows.map(r => sortObject(r));
</script>

<style>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
</style>

<main>
  <table>

    <tr>
      {#each columns as column}
        <th>{column.title}</th>
      {/each}
    </tr>
    {#each rows as row}
      <tr>
        {#each Object.keys(row) as rowKey}
          <td>{row[rowKey]}</td>
        {/each}
      </tr>
    {/each}

  </table>
</main>
