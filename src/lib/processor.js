import * as R from 'ramda'
import { lastUpdateStore, blueTeamStore, orangeTeamStore, overtimeStore, playersStore, replayStore, statEventStore, targetPlayerStore, timeStore, endStatStore, endBlueStore, endOrangeStore } from './stores';

let lastUpdate

export const processor = (socketMessageStore) => {
    R.cond([
        [(socketMessageStore) => socketMessageStore.event === "game:update_state", onUpdateState],
        [(socketMessageStore) => socketMessageStore.event === "game:statfeed_event", onStatfeedEvent],
        [(socketMessageStore) => socketMessageStore.event === "game:match_ended", onMatchEnded],
        [(socketMessageStore) => socketMessageStore.event === "game:pre_countdown_begin", onCountdownBegin]
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
    lastUpdate = data
    lastUpdateStore.set(lastUpdate)
}

const onStatfeedEvent = ({ data }) => {
    statEventStore.set(data)
    // R.cond({
    //     [(data) => data.type === "Goal", onGoal],
    // }) use this later for specific events
}

//const onReplayEnded idk
//clear scoreer, assister, and ball speed

//const onMatchEnded idk
//playerStatStore = players idk
//send store to manager port
const onMatchEnded = (lastUpdate) => {
    lastUpdateStore.set(lastUpdate)
    endStatStore.set(Object.values(lastUpdate.players))
    endBlueStore.set(lastUpdate.game.teams[0])
    endOrangeStore.set(lastUpdate.game.teams[1])
}

const onCountdownBegin = () => {
    // endStatStore.set([])
    // endBlueStore.set({ name: null, score: null })
    // endOrangeStore.set({ name: null, score: null })
}

//const onClockStarted?
    //func for clearing matchended stores