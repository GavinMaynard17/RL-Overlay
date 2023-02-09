<script>
  export let percent = 100;
</script>

<div class="boost bg">
  <div class="boost" style="width: {percent}%" />
</div>

<style>
  .boost {
    position: relative;
    height: 50px;
    background-color: rgb(255, 0, 0);
  }
  .bg {
    width: 300px;
    background-color: #000;
  }
</style>
