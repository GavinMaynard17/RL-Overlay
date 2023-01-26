<script>
  import { replayStore } from "./stores";

  $: isReplay = $replayStore;
</script>

<div>
  {#if isReplay}
    <p class="replay">REPLAY</p>
    <!-- implement scorer and assister -->
  {/if}
</div>

<style>
  /* the surrounding picture thing when showing replay */
</style>
