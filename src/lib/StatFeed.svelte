<script>
  import { writable } from "svelte/store";
  import { statEventStore } from "./stores";

  const events = writable([]);
  const keyEvents = ["Goal", "Assist", "Save", "Shot", "Demolish"];

  $: isKeyStat = keyEvents.includes($statEventStore.event_name);

  export let playerName;

  $: handleStatFeed($statEventStore, isKeyStat);
  $: console.log("current stat is", $statEventStore);

  function removeStatFeedEvent(id) {
    let stat = $events.find((event) => event.id === id);
    console.log("removing", stat);
    $events = $events.filter((event) => event.id !== id);
  } //removes event from events

  function startDisappearing(id) {
    console.log($events);
    $events = [
      ...$events.filter((event) => event.id !== id),
      {
        ...$events.find((event) => event.id === id),
        disappearing: true,
      },
    ];
  } //changes "disappearing" for css to use later

  function handleStatFeed(currentStat, isKeyStat) {
    let id = crypto.randomUUID();
    $events = [
      ...$events,
      {
        ...currentStat,
        id,
        disappearing: false,
        isKeyStat,
        time: Date.now(),
      },
    ];

    setTimeout(() => {
      startDisappearing(id);
    }, 3000);

    setTimeout(() => {
      removeStatFeedEvent(id);
    }, 3500);
  } //adds stat event to events, calls start disappearing after 3 seconds, removes after 3.5 seconds
</script>

{#each $events.sort((a, b) => a.time - b.time) as event (event.id)}
  {#if event.main_target.name == playerName && event.isKeyStat}
    <!-- need to test isKeyStat -->
    <div>
      {event?.event_name}<!-- implement secondary target for demo -->
    </div>
  {/if}
{/each}

<style>
</style>
