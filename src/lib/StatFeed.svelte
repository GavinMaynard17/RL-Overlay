<script>
  import { each } from "svelte/internal";
  import { events } from "./StatList";

  export let playerName;
</script>

<div class="stat">
  {#each events as event}
    {#if event.main_target.name == playerName}
      <p>{event.name}</p>
    {/if}
  {/each}
</div>

<style>
</style>
