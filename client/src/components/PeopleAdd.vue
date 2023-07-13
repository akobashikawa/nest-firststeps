<script lang="ts">
import axios from 'axios';

const base_url = 'http://localhost:3000';

export default {
  emits: ['done'],
  
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
    async add() {
      try {
        const { valid } = await (this.$refs.form as any).validate();
        if (!valid) return;
        const body = {
          name: this.name,
        };
        this.loading = true;
        const { data } = await axios.post(`${base_url}/api/people`, body);
        this.loading = false;
        this.message = `Hola ${data.name}!`;
        (this.$refs.name as any).select();
        this.$emit('done', data);
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
  <v-card title="Agregar">
    <v-card-item>
      <v-form ref="form" validate-on="lazy">
        <v-text-field ref="name" v-model="name" :rules="nameRules" :counter="40" label="Nombre" required></v-text-field>
      </v-form>
      
      <h4>{{ message }}</h4>

      <v-btn :loading="loading" type="button" class="my-2" color="primary" text="Agregar" @click="add" variant="outlined"></v-btn>
    </v-card-item>


  
    <div id="error" v-if="error" class="mt-5">{{ error }}</div>
  </v-card>
</template>

<style scoped></style>
