import { writable } from "svelte/store";

//update state stores
export const targetPlayerStore = writable({
    name: null,
    score: null,
    goals: null,
    assists: null,
    saves: null,
    shots: null,
    demos: null,
    boost: null
})
export const timeStore = writable(300)
export const blueTeamStore = writable({
    name: null,
    score: null
})
export const orangeTeamStore = writable({
    name: null,
    score: null
})
export const playersStore = writable([])
export const overtimeStore = writable(false)
export const replayStore = writable(false)

//statfeed event stores
export const statEventStore = writable({
    event_name: null,
    main_target: {
        name: null
    }
})

export const lastUpdateStore = writable()

export const endStatStore = writable()
export const endBlueStore = writable({
    name: null,
    score: null
})
export const endOrangeStore = writable({
    name: null,
    score: null
})


