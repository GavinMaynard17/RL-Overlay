<script>
  import url from "./url";
  import Overlay from "./visuals/Overlay.svelte";
  import EndGameStat from "./visuals/EndGameStat.svelte";
  import { processor } from "./lib/processor";
  import { socketMessageStore } from "./lib/socket";
  import { playersStore } from "./lib/stores";

  $: console.log($socketMessageStore);
  $: processor($socketMessageStore);
</script>

<body>
  {#if $url.hash === "" || $url.hash === "#/"}
    <a href="#/overlay">Overlay</a>
    <a href="#/endgame">End Game Stats</a>
  {:else if $url.hash === "#/overlay"}
    <Overlay />
  {:else if $url.hash === "#/endgame"}
    <EndGameStat
    /><!--  check when game removes/updates regular info, might not need special stores  -->
  {:else}
    <h1>404</h1>
  {/if}

  <!-- in the future, add pregame stats -->
  <!-- for webcam/talking screen, should probably make its own app -->
  <!-- for OM, on launch, can start up the webcam/talking app? -->
</body>
