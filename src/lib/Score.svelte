<script>
  import { blueTeamStore, orangeTeamStore } from "./stores";

  $: blueTeam = $blueTeamStore.name;
  $: blueScore = $blueTeamStore.score;
  $: orangeTeam = $orangeTeamStore.name;
  $: orangeScore = $orangeTeamStore.score;
</script>
{#if blueTeam}
<div class="scorebug">
  <table class="team-info">
    <tr class="team-left">
      <div class="scorebox">
        <th class="score">{blueScore}</th>
      </div>
      <div class="namebox">
        <th class="name">{blueTeam}</th>
      </div>
    </tr>
    <tr class="team-right">
      <div class="scorebox">
        <th class="score">{orangeScore}</th>
      </div>
      <div class="namebox">
        <th class="name">{orangeTeam}</th>
      </div>
    </tr>
  </table>
</div>
{/if}
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

  .team-left .namebox{
    background-color: black;
    width: 100px;
  }

  /* .team-left .name{
    color: white;
    text-align: center;
  } */

  .team-left .score{
    color: white;
    text-align: center;
    background-color: #326cfb;
    width: 35px;
    height: 35px;
  }

  .namebox{
    background-color: black;
    width: 100px;
  }

  .name{
    color: white;
    text-align: center;
    display: block;
  }

  .team-right .score{
    color: white;
    background-color: #ed771d;
    width: 35px;
    height: 35px;
  }
</style>
