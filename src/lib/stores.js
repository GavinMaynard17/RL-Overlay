import { writable } from "svelte/store";

export const targetPlayerStore = writable({})
export const timeStore = writable(300)
export const blueTeamStore = writable({})
export const orangeTeamStore = writable({})
export const playersStore = writable([])
export const overtimeStore = writable()
export const replayStore = writable()

export const statEventStore = writable({})
export const statFeedStore = writable([])


