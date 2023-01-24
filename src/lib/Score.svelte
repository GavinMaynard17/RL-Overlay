<script>
  import { blueTeamStore, orangeTeamStore } from "./stores";

  // export let currentState;

  $: blueTeam = $blueTeamStore.name;
  $: blueScore = $blueTeamStore.score;
  $: orangeTeam = $orangeTeamStore.name;
  $: orangeScore = $orangeTeamStore.score;
</script>

<div class="scorebug">
  <table class="team-info">
    <tr class="team left">
      <th class="name">{blueTeam}</th>
      <th class="score">{blueScore}</th>
    </tr>
    <tr class="team right">
      <th class="score">{orangeScore}</th>
      <th class="name">{orangeTeam}</th>
    </tr>
  </table>
</div>

<style>
  .scorebug {
    position: relative;
    /* top: 15px;
        left: 30px; */
    color: black;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    background-color: white;
  }

  .scorebug tr {
    /* other styles goes here... */
    display: inline-block;
    vertical-align: top;
  }
</style>
