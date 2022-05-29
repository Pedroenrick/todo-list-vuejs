<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <div id="app">

    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Todo List</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Tasks</b-nav-item>
          <b-nav-item to="/form">Forms</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<style>
</style>
