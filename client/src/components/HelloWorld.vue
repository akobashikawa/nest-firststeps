<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const base_url = 'http://localhost:3000';

const message = ref('');
const error = ref('');

const helloworld = async () => {
  try {
    const { data } = await axios.get(`${base_url}/api/helloworld`);
    message.value = data;
    error.value = '';
  } catch (err: any) {
    message.value = '';
    error.value = err;
  }
}

</script>

<template>
  <v-btn color="primary" @click="helloworld"> Hello </v-btn>
  <h2>{{ message }}</h2>

  <div id="error" v-if="error" class="mt-5">{{ error }}</div>
</template>

<style scoped></style>
