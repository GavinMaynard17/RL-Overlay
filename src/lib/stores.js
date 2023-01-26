import { writable } from "svelte/store";

//update state stores
export const targetPlayerStore = writable({})
export const timeStore = writable(300)
export const blueTeamStore = writable({})
export const orangeTeamStore = writable({})
export const playersStore = writable([])
export const overtimeStore = writable()
export const replayStore = writable()

//statevent stores
export const statEventStore = writable({
    event_name: "",
    main_target: {
        name: "Bob"
    }
})
export const statFeedStore = writable([])


