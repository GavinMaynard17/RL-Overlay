<script>
  import { targetPlayerStore } from "./stores";
  import Boost from "./Boost.svelte";

  $: target = $targetPlayerStore;
</script>

{#if $targetPlayerStore}
  <div class="player">
    <p class="player">Spectating: {target.name}</p>
    <p class="score">Score: {target.score}</p>
    <p class="goals">Goals: {target.goals}</p>
    <p class="assists">Assists: {target.assists}</p>
    <p class="saves">Saves: {target.saves}</p>
    <p class="shots">Shots: {target.shots}</p>
    <p class="demos">Demos: {target.demos}</p>
    <Boost percent={target.boost} />
  </div>
{/if}
