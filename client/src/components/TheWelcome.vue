<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import menuItems from '../menuItems'
</script>

<template>
  <WelcomeItem v-for="item of menuItems">
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>
      <router-link :to="item.route">{{ item.title }}</router-link>
    </template>

    {{ item.description }}
  </WelcomeItem>

</template>
