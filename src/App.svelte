<script>
  import Time from "./lib/Time.svelte";
  import Players from "./lib/Players.svelte";
  import Spectating from "./lib/Spectating.svelte";
  import Score from "./lib/Score.svelte";
  import OverTime from "./lib/OverTime.svelte";
  import Replay from "./lib/Replay.svelte";
  // import StatList from "./lib/StatList";
  import {
    updateTime,
    targetPlayer,
    isOT,
    isReplay,
    updateState,
    allPlayers,
    statfeedEvent,
  } from "./lib/processor";
  import { socketMessageStore } from "./lib/socket";

  $: console.log($socketMessageStore);
</script>

<head>
  <script
    src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"
  ></script>
</head>

<body>
  <!-- score -->
  {#if $updateState}
    <Score currentState={$updateState} />
  {/if}

  <!-- clock -->
  <!-- {#if $isOT}
    <p class="OT">+</p>
  {/if} -->
  <Time time={$updateTime} isOT={$isOT} />

  <!-- player list -->
  <!-- {#if $allPlayers} -->
  <Players playerList={$allPlayers} />
  <!-- {/if} -->

  <!-- Spectating player -->
  {#if $targetPlayer?.name}
    <Spectating target={$targetPlayer} />
  {/if}

  <!-- overtime indicator -->
  <OverTime isOT={$isOT} />
  <!-- {#if $isOT}
    <p class="overtime">OVERTIME</p>
  {/if} -->

  <!-- replay indicator -->
  <Replay isReplay={$isReplay} />
</body>
