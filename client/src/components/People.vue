<script lang="ts">
import axios from 'axios';
import PeopleAdd from './PeopleAdd.vue';
import PeopleList from './PeopleList.vue';

const base_url = 'http://localhost:3000';

export default {
  components: { PeopleAdd, PeopleList },
  data() {
    return {
      
      error: '',
    };
  },

  methods: {
    itemAddedHandler(data: any) {
      (this.$refs.list as any).getItems();
    }
  }
};

</script>

<template>
  <PeopleAdd @done="itemAddedHandler"/>
  <PeopleList ref="list" />

  <div id="error" v-if="error" class="mt-5">{{ error }}</div>
</template>

<style scoped></style>
