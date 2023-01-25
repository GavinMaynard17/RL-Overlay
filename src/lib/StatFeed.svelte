<script>
 import { statEventStore, statFeedStore } from "./stores";

export let events = []
$: currentStat = $statEventStore

$: console.log(currentStat)


// function uID() {
// return Math.floor(Math.random() * Date.now())
// }



// export default function validStatEvent(update) {

// }

$: handleStatFeed(currentStat);
export function handleStatFeed(currentStat) {
    console.log(currentStat.event_name)
    addStatFeedEvent(currentStat);

    function addStatFeedEvent(currentStat) {
        let newStat = { ...currentStat };
        newStat.id = Math.floor(Math.random() * Date.now())
        newStat.disappearing = false;
        setTimeout(() => {
            newStat.disappearing = true;
        }, 3000);
        events.push(newStat);
        console.log("EVENT PUSHED", currentStat, Object.values(events));
        // store.dispatch(updateStatFeed({ ...events }));
        statFeedStore.set({ ...events })
        console.log("STAT FEED UPDATE ADD", currentStat, $statFeedStore);
        setTimeout(() => {
            removeStatFeedEvent(newStat);
        }, 3500);
        
        
    }

    function removeStatFeedEvent(data) {
        let index = events.map((event) => event.id).indexOf(data.id);
        events.splice(index, 1);
        console.log("EVENT DELETED", currentStat, events);
        // store.dispatch(updateStatFeed({ ...events }));
        statFeedStore.set({ ...events })
        console.log("STAT FEED UPDATE DELETE", currentStat, $statFeedStore)
    }
}
  // export let playerName;

</script>

<div class="stat">
  <ul>
  {#if events.length > 0}
    {#each events as event}
      <!-- {#if event.main_target.name == playerName} -->
        <li>{event.event_name}</li>
        <hr>
      <!-- {/if} -->
    {/each}
  {/if}
</ul>
</div>

<style>
</style>
