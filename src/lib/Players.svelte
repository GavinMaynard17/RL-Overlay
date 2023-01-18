<script>
  import { listen } from "svelte/internal";
  import { statfeedEvent } from "./processor.js";
  import StatFeed from "./StatFeed.svelte";

  export let playerList;

  $: players = playerList;
</script>

<div class="playerelement">
  <ul class="blue">
    <h1>left side</h1>
    {#each players as player}
      {#if player.team == 0}
        <li>{player.name}</li>
        <li><StatFeed playerName={player.name} /></li>
        <li>{player.boost}</li>
        <hr />
      {/if}
    {/each}
  </ul>

  <ul class="orange">
    <h1>right side</h1>
    {#each players as player}
      {#if player.team == 1}
        <li>{player.name}</li>
        <li><StatFeed playerName={player.name} /></li>
        <li>{player.boost}</li>
        <hr />
      {/if}
    {/each}
  </ul>
</div>
