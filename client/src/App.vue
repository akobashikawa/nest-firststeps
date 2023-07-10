<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<script lang="ts">
export default {
  data: () => ({
      drawer: false,
      group: null,
      items: [
        {
          title: 'Hello World',
          route: '/helloworld',
        },
        {
          title: 'Hello',
          route: 'hello',
        },
        {
          title: 'Fizz',
          route: 'fizz',
        },
        {
          title: 'Buzz',
          route: 'buzz',
        },
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
}
</script>

<template>
  <v-layout>
    <v-app-bar app
    color="primary"
    >
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      
      <v-toolbar-title>NestJS First Steps</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/">Home</v-btn>
      <v-btn to="/about">About</v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      location="right"
      temporary
    >
      <v-list>
        <v-list-item v-for="item of items" :key="item.title" :to="item.route">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="mt-5 px-5">
      <RouterView />
    </v-main>
  </v-layout>
</template>

<style scoped></style>
