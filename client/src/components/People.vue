<script lang="ts">
import axios from 'axios';
import PeopleAdd from './PeopleAdd.vue';

const base_url = 'http://localhost:3000';

export default {
  components: { PeopleAdd },
  data() {
    return {
      
      error: '',
    };
  },

  methods: {
    
  }
};

</script>

<template>
  <PeopleAdd />

  <div id="error" v-if="error" class="mt-5">{{ error }}</div>
</template>

<style scoped></style>
