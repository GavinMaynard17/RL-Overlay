<script>
  import Time from "./lib/Time.svelte";
  import Players from "./lib/Players.svelte";
  import Spectating from "./lib/Spectating.svelte";
  import Score from "./lib/Score.svelte";
  import OverTime from "./lib/OverTime.svelte";
  import Replay from "./lib/Replay.svelte";
  import {
    updateTime,
    targetPlayer,
    isOT,
    isReplay,
    updateState,
    processor,
    allPlayers,
    statfeedEvent,
  } from "./lib/processor";
  import { socketMessageStore } from "./lib/socket";

  $: console.log($socketMessageStore);
  $: processor($socketMessageStore);
</script>

<head>
  <script
    src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"
  ></script>
</head>

<body>
  <!-- score -->
  <!-- {#if $updateState} -->
  <Score />
  <!-- {/if} -->

  <!-- clock -->
  <!-- {#if $isOT}
    <p class="OT">+</p>
  {/if} -->
  <Time />

  <!-- player list -->
  <!-- {#if $allPlayers} -->
  <Players />
  <!-- {/if} -->

  <!-- Spectating player -->
  <Spectating />

  <!-- overtime indicator -->
  <OverTime />
  <!-- {#if $isOT}
    <p class="overtime">OVERTIME</p>
  {/if} -->

  <!-- replay indicator -->
  <Replay />
</body>
