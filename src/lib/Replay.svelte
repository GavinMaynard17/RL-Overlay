<script>
  import { replayStore } from "./stores";

  $: isReplay = $replayStore;
</script>

<div>
  {#if isReplay}
    <p class="replay">REPLAY</p>
  {/if}
</div>
