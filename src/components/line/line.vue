<template>
  <div class="title_area">
    <div class="line"></div>
    <div class="text">{{line_title}}</div>
    <div class="line"></div>
  </div>
</template>
<script>
  export default {
    props: ['line_title']
  };
</script>
<style>
  .title_area{
    display: flex;
    width: 80%;
    margin: 30px auto 24px auto;
  }
  .title_area>.line{
    flex: 1;
    position: relative;
    top: -6px;
    border-bottom:1px solid rgba(255,255,255,0.2);
  }
  .title_area>.text{
    padding: 0 12px;
    font-weight: 700;
    font-size: 14px;
  }
</style>
