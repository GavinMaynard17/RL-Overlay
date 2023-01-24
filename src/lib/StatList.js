import { statFeedStore } from "./stores";

export let events = []

const uID = () =>
    String(
        Date.now().toString(4) +
        Math.random().toString(4)
    ).replace(/\./g, '')



export default function validStatEvent(update) {

}

export function handleStatFeed(update) {
    addStatFeedEvent(update);

    function addStatFeedEvent(update) {
        let newStat = { ...update };
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




// THIS HURTS MY HEAD
// "STAT CHIP COMPONENT"