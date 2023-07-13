<script lang="ts">
import axios from 'axios';

const base_url = 'http://localhost:3000';

export default {
  data() {
    return {
      items: [] as any[],
      loading: false,
      error: '',
    };
  },

  methods: {
    async getItems() {
      try {
        this.loading = true;
        const { data } = await axios.get(`${base_url}/api/people`);
        this.loading = false;
        this.items = data;
        this.error = '';
      } catch (err: any) {
        this.error = err;
      }
    },

    async deleteItem(item: any) {
      try {
        this.loading = true;
        const { data } = await axios.delete(`${base_url}/api/people/${item.id}`);
        this.loading = false;
        await this.getItems();
        this.error = '';
      } catch (err: any) {
        this.error = err;
      }
    }
  }
};

</script>

<template>
  <v-btn :loading="loading" type="button" class="my-2" color="primary" text="Listar" @click="getItems"></v-btn>

  <v-table density="compact" v-if="items.length > 0">
    <thead>
      <tr>
        <th class="text-right">
          id
        </th>
        <th class="text-left">
          Nombre
        </th>
        <th class="text-left">
          Opciones
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item of items" :key="item.id">
        <td class="text-right">{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>
          <v-btn @click="deleteItem(item)">
            Eliminar
            <v-icon end icon="mdi-delete" ></v-icon>
          </v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>

  <div id="error" v-if="error" class="mt-5">{{ error }}</div>
</template>

<style scoped>
thead tr th {
  font-weight: bold!important;
}
tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, .05);
}
</style>
