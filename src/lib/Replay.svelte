<script>
  import { replayStore } from "./stores";

  $: isReplay = $replayStore;
  $: console.log(isReplay);
</script>

<div>
  {#if isReplay}
    <p class="replay">REPLAY</p>
  {/if}
</div>
