<script>
  import { statfeedEvent } from "./processor.js";

  export let playerName;
  $: event = $statfeedEvent;
</script>

<div>
  <!-- {#if $event?.main_target.name == playerName}
    <p>{$event.event_name}</p>
  {/if} -->

  <p>{$event?.event_name}</p>
  <p>{playerName}</p>
</div>
