<script>
  import { timeStore, overtimeStore } from "./stores";

  $: time = $timeStore;
  $: isOT = $overtimeStore;

  $: min = Math.trunc(time / 60);
  $: sec = prependZero(time % 60);

  function prependZero(number) {
    if (number <= 9) return "0" + number;
    else return number;
  }
</script>

<div class="clock">
  <div class="time">
    <!-- add more things for if time is > 10 minutes, will need to move things around -->
    {#if isOT}
      <p>+ {min}:{sec}</p>
    {:else}
      <p>{min}:{sec}</p>
    {/if}
  </div>
</div>

<style>
  .time {
    position: relative;
    color: white;
    text-align: center;
    
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  .clock {
    background-color: black;
    width: 80px;
    height: 30px;
  }
</style>
