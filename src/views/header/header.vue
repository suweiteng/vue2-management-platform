<template>
  <div>
    <header>
      <a href="https://github.com/suweiteng/vue2-management-platform"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"></a>
      <img src="./logo.svg" alt="logo" class="header-logo">
      <ul class="header-operations">
        <li>
          <span class="header-lang is-active">{{user.name}}</span>
          <span class="header-opacity">({{user.area}}/{{user.identity}})</span>
        </li>
        <li></li>
      </ul></header>
  </div>
</template>
<script>
  export default {
    props: {
      user: {
      }
    },
    data () {
      return {
      };
    },
  };
</script>
<style>
  header {
    background-color: rgb(32, 160, 255);
    height: 80px;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    padding: 0 20px;
    z-index: 999;
    box-sizing: border-box;
    position: fixed;
  }
  .header-logo {
    display: inline-block;
    vertical-align: middle;
  }
  .header-operations {
    display: inline-block;
    float: right;
    padding-right: 30px;
    height: 100%;
  }
  .header-operations li {
    color: #fff;
    display: inline-block;
    vertical-align: middle;
    padding: 0 10px;
    margin: 0 10px;
    line-height: 80px;
    cursor: pointer;
  }
  .header-operations li:first-child{
    cursor: default
  }
  .header-opacity{
    opacity: .7;
  }
  .header-operations:after, header:after {
    display: inline-block;
    content: "";
    height: 100%;
    vertical-align: middle;
  }
</style>
