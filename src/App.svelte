<script>
  import Time from "./lib/Time.svelte";
  import Players from "./lib/Players.svelte";
  import Spectating from "./lib/Spectating.svelte";
  import Score from "./lib/Score.svelte";
  import OverTime from "./lib/OverTime.svelte";
  import Replay from "./lib/Replay.svelte";
  import StatFeed from "./lib/StatFeed.svelte";
  import { processor } from "./lib/processor";
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
  <Score />

  <!-- clock -->
  <Time />

  <!-- stat feed (non-player) -->
  <!-- <StatFeed /> -->

  <!-- player list -->
  <Players />

  <!-- Spectating player -->
  <Spectating />

  <!-- overtime indicator -->
  <OverTime />

  <!-- replay indicator -->
  <Replay />
</body>
