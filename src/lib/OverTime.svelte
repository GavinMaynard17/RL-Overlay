<script>
  import { overtimeStore } from "./stores";

  $: isOT = $overtimeStore;
</script>

<div>
  {#if isOT}
    <p class="overtime">OVERTIME</p>
  {/if}
</div>
