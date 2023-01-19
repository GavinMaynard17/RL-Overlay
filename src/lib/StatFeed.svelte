<script>
  import { each } from "svelte/internal";
  import { currentEvents } from "./StatList.js";

  export let playerName;
</script>

<div class="stat">
  {#each currentEvents as event}
    {#if event.main_target.name == playerName}
      <p>{event.name}</p>
    {/if}
  {/each}
</div>

<style>
</style>
