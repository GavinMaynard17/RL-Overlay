<script>
  import { lastUpdateStore, endStatStore } from "../lib/stores";

  $: blueName = $lastUpdateStore?.game.teams[0].name;
  $: blueScore = $lastUpdateStore?.game.teams[0].score;
  $: orangeName = $lastUpdateStore?.game.teams[1].name;
  $: orangeScore = $lastUpdateStore?.game.teams[1].score;

  $: playerList = $endStatStore;

  $: $lastUpdateStore,
    () => {
      if ($lastUpdateStore) {
        playerList.forEach(function (player) {
          if (player.team == 0) {
            bScore += player.score;
          }
          if (player.team == 1) {
            oScore += player.score;
          }
        });
      }
    };

  let bScore = 0;
  let oScore = 0;

  let bGoal;
  let oGoal;

  let bAssist;
  let oAssist;

  let bSave;
  let oSave;

  let bDemo;
  let oDemo;

  $: bScore;
  $: oScore;

  $: bGoal;
  $: oGoal;

  $: bAssist;
  $: oAssist;

  $: bSave;
  $: oSave;

  $: bDemo;
  $: oDemo;

  function addData() {
    lastUpdateStore.players.forEach(function (player) {
      if (player.team == 0) {
        bScore += player.score;
      }
      if (player.team == 1) {
        oScore += player.score;
      }
    });
  }

  //The theory is to update total score every time lastUpdateStore is changed
</script>

<body>
  <h1>{blueName}</h1>
  <p>{blueScore}</p>
  <p />
  <p>{orangeScore}</p>
  <h1>{orangeName}</h1>

  {#if playerList}<!-- test to remove this and add if replay -->

    <ul class="blue">
      <h1>left side</h1>
      {#each playerList as player}
        {#if player.team == 0}
          <li>{player.name}</li>
          <li>Score: {player.score}</li>
          <li>Goals: {player.goals}</li>
          <li>Assists: {player.assists}</li>
          <li>Saves: {player.saves}</li>
          <li>Demos: {player.demos}</li>
          <hr />
        {/if}
      {/each}
    </ul>

    <ul class="orange">
      <h1>right side</h1>
      {#each playerList as player}
        {#if player.team == 1}
          <li>{player.name}</li>
          <li>Score: {player.score}</li>
          <li>Goals: {player.goals}</li>
          <li>Assists: {player.assists}</li>
          <li>Saves: {player.saves}</li>
          <li>Demos: {player.demos}</li>
          <hr />
        {/if}
      {/each}
    </ul>
  {/if}

  {bScore}
  {oScore}

  <div class="score">
    <p>Score</p>
    <div class="bar">
      <div
        class="progress"
        style="width:{100 * (bScore / (bScore + oScore))}%"
      />
    </div>
  </div>
</body>

<style>
  .bar {
    background-color: orange;
    height: 10px;
    width: 200px;
  }

  .progress {
    background-color: blue;
    height: 10px;
  }
</style>
