import { derived } from "svelte/store";
import { socketMessageStore } from "./socket";


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

    if ($update){
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

    if ($update){
        set(Boolean($update.game.isOT));
    }
});

export const isReplay = derived(updateState, ($update, set) => {
    if (!$update) return;

    if ($update){
        set(Boolean($update.game.isReplay));
    }
});

export const allPlayers = derived(updateState, ($update, set) => {
    if (!$update) return;

    if ($update){
        set(Object.values($update.players));
    }
});

export const statList = derived(statfeedEvent, ($update, set) => {
    if (!$update) return;

    if ($update){
        set($update);
    }
});
