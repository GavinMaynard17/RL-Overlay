import { statFeedStore } from "./stores";

export let events = []
let currentStat = statFeedStore


console.log(currentStat)

const uID = () =>
    String(
        Date.now().toString(4) +
        Math.random().toString(4)
    ).replace(/\./g, '')



handleStatFeed(currentStat);
export default function validStatEvent(update) {

}

export function handleStatFeed(currentStat) {
    console.log(currentStat)
    addStatFeedEvent(currentStat);

    function addStatFeedEvent(currentStat) {
        let newStat = { ...currentStat };
        newStat.id = uID;
        newStat.disappearing = false;
        setTimeout(() => {
            newStat.disappearing = true;
        }, 3000);
        events.push(newStat);
        // store.dispatch(updateStatFeed({ ...events }));
        statFeedStore.set({ ...events })
        setTimeout(() => {
            removeStatFeedEvent(newStat);
        }, 3500);
    }

    function removeStatFeedEvent(data) {
        let index = events.map((event) => event.id).indexOf(data.id);
        events.splice(index, 1);
        // store.dispatch(updateStatFeed({ ...events }));
        statFeedStore.set({ ...events })
    }
}





// try to move alot of statfeed.svelte to here?