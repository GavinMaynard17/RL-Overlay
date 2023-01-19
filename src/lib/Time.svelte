<script>
  export let time = 0;
  export let isOT;
  let min = Math.trunc(time / 60);
  let sec = prependZero(time % 60);
  $: min = Math.trunc(time / 60);
  $: sec = prependZero(time % 60);

  function prependZero(number) {
    if (number <= 9) return "0" + number;
    else return number;
  }
</script>

<div class="clock">
  <div class="time">
    {#if isOT}
      <p>+ {min} : {sec}</p>
    {:else}
      <p>{min} : {sec}</p>
    {/if}
  </div>
</div>

<style>
  .time {
    position: relative;
    color: black;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    background-color: white;
  }
</style>
