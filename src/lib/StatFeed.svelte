<script>
  import { writable } from "svelte/store";
  import { statEventStore } from "./stores";

  const events = writable([]);
  export let playerName;

  $: handleStatFeed($statEventStore);
  // $: console.log("current stat is", $statEventStore);

  function removeStatFeedEvent(id) {
    let stat = $events.find((event) => event.id === id);
    console.log("removing", stat);
    $events = $events.filter((event) => event.id !== id);
  }

  function startDisappearing(id) {
    console.log($events);
    $events = [
      ...$events.filter((event) => event.id !== id),
      {
        ...$events.find((event) => event.id === id),
        disappearing: true,
      },
    ];
  }

  function handleStatFeed(currentStat) {
    let id = crypto.randomUUID();
    $events = [
      ...$events,
      {
        ...currentStat,
        id,
        disappearing: false,
        time: Date.now(),
      },
    ];

    setTimeout(() => {
      startDisappearing(id);
    }, 3000);

    setTimeout(() => {
      removeStatFeedEvent(id);
    }, 3500);
  }
</script>

{#each $events.sort((a, b) => a.time - b.time) as event (event.id)}
  <!-- {#if event?.main_target.name == playerName} -->
  {console.log(event?.main_target.name)}
  <div>{event?.event_name} - {event?.main_target.name}</div>
  <!-- {/if} -->
{/each}

<style>
</style>
