<template>
  <div>
    <header>
      <img src="./logo.svg" alt="logo" class="header-logo">
      <ul class="header-operations">
        <li>
          <span class="header-lang is-active">{{user.name}}</span>
          <span class="header-opacity">({{user.area}}/{{user.identity}})</span>
        </li>
        <li>退出系统</li>
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
