<script>
    import Time from "./lib/Time.svelte";
    import Players from "./lib/Players.svelte";
    import Spectating from "./lib/Spectating.svelte";
    import Score from "./lib/Score.svelte";
    import { updateTime, targetPlayer, isOT, isReplay, allPlayers, statList} from "./lib/processor";
    import { socketMessageStore } from "./lib/socket";

    $: console.log($socketMessageStore);

</script>

<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    
</head>

<body>
    

    {#if $socketMessageStore.event == "game:update_state"}
    <Score currentState="{$socketMessageStore}"/>
    {/if}
     
    <!-- StatFeed -->
    <!-- <p>{$statList.event_name}</p>
    <p>{$statList.main_target.name}</p>  -->

    <!-- clock -->
    {#if $isOT}
    <p class="OT">+</p>
    {/if}
    <Time time="{$updateTime}"/>
       
    <!-- player list -->
    <!-- <Players playerList="{$allPlayers}"/> -->

    <!-- Spectating player -->
    {#if $targetPlayer?.name}
    <Spectating target="{$targetPlayer}"/>
    {/if}

    
    <!-- overtime indicator -->
    {#if $isOT}
      <p class="overtime">OVERTIME</p>
    {/if}

    <!-- replay indicator -->
    {#if $isReplay}
      <p class="replay">REPLAY</p>
    {/if}
</body>
