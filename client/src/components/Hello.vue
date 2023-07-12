<script lang="ts">
import axios from 'axios';

const base_url = 'http://localhost:3000';

export default {
  data() {
    return {
      message: '',
      name: '',
      nameRules: [
        (value: string) => (!!value) || 'Nombre requerido',
        (value: string) => (value?.length <= 40) || 'Nombre tiene máximo 40 caracteres',
      ],
      valid: false,
      loading: false,
      error: '',
    };
  },

  methods: {
    async submit() {
      try {
        const { valid } = await (this.$refs.form as any).validate();
        if (!valid) return;
        this.loading = true;
        const { data } = await axios.get(`${base_url}/api/hello?name=${this.name}`);
        this.loading = false;
        this.message = data;
        this.error = '';
      } catch (err: any) {
        this.message = '';
        this.error = err;
      }
    }
  }
};

</script>

<template>
  <v-form ref="form" validate-on="lazy">
    <v-text-field v-model="name" :rules="nameRules" :counter="40" label="Nombre" required></v-text-field>
    <v-btn :loading="loading" type="button" class="my-2" color="primary" text="Hello" @click="submit"></v-btn>
  </v-form>
  <h2>{{ message }}</h2>

  <div id="error" v-if="error" class="mt-5">{{ error }}</div>
</template>

<style scoped></style>
