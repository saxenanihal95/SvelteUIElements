<script>
  import TimelineItem from "./TimelineItem.svelte";

  export let list = [];
  export let mode = "vertical";
</script>

<style lang="scss" global>
  @import "./TimeLine.scss";
</style>

{#if mode === 'vertical-alternate'}
  <div class="alternate_timeline">
    {#each list as { title, description }, index}
      {#if index % 2 === 0}
        <div class="alternate_timeline__item alternate_timeline__right">
          <TimelineItem {title} {description} />
        </div>
      {:else}
        <div class="alternate_timeline__item">
          <TimelineItem {title} {description} />
        </div>
      {/if}
    {/each}
  </div>
{/if}

{#if mode === 'vertical'}
  <div class="timeline">
    {#each list as { title, description }, index}
      <div class="timeline__item">
        <TimelineItem {title} {description} />
      </div>
    {/each}
  </div>
{/if}
