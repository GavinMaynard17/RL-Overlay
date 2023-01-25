import * as R from 'ramda'
import { socketMessageStore } from "./socket";
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
    // R.cond({
    //     [(data) => data.type === "Goal", onGoal],
    // }) use this later
}

