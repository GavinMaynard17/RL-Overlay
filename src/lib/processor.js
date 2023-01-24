import * as R from 'ramda'
import { derived } from "svelte/store";
import { socketMessageStore } from "./socket";
import handleStatFeed from './StatList';
import { blueTeamStore, orangeTeamStore, overtimeStore, playersStore, replayStore, statEventStore, targetPlayerStore, timeStore } from './stores';

export const processor = (socketMessageStore) => {
    R.cond([
        [(socketMessageStore) => socketMessageStore.event === "game:update_state", onUpdateState],
        [(socketMessageStore) => socketMessageStore.event === "game:statfeed_event", onStatfeedEvent],
    ])(socketMessageStore)
}

const onUpdateState = ({ data }) => {
    targetPlayerStore.set(data.players[data.game.target])
    timeStore.set(data.game.time_seconds)
    playersStore.set(Object.values(data.players))
    blueTeamStore.set(data.game.teams[0])
    orangeTeamStore.set(data.game.teams[1])
    overtimeStore.set(data.game.isOT)
    replayStore.set(data.game.isReplay)
}

const onStatfeedEvent = ({ data }) => {
    statEventStore.set(data)
    handleStatFeed(data)
    // R.cond({
    //     [(data) => data.type === "Goal", onGoal],
    // }) use this later
}

export const updateState = derived(socketMessageStore, ($msg, set) => {
    if (!$msg) return;

    if ($msg.event === "game:update_state") {
        set($msg.data);
    }
});

export const statfeedEvent = derived(socketMessageStore, ($msg, set) => {
    if (!$msg) return;

    if ($msg.event === "game:statfeed_event") {
        set($msg.data);
    }
});

export const updateTime = derived(updateState, ($update, set) => {
    if (!$update) return;

    if ($update) {
        set($update.game.time_seconds);
    }
});

export const targetPlayer = derived(updateState, ($update, set) => {
    if (!$update) return;

    if ($update.game.hasTarget) {
        set($update.players[$update.game.target]);
    } else {
        set({});
    }
});

export const isOT = derived(updateState, ($update, set) => {
    if (!$update) return;

    if ($update) {
        set(Boolean($update.game.isOT));
    }
});

export const isReplay = derived(updateState, ($update, set) => {
    if (!$update) return;

    if ($update) {
        set(Boolean($update.game.isReplay));
    }
});

export const allPlayers = derived(updateState, ($update, set) => {
    if (!$update) return;

    if ($update) {
        set(Object.values($update.players));
    }
});


