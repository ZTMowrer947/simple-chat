<template>
  <MainLayout>
    <h1>Hello, world!</h1>
  </MainLayout>
</template>

<script lang="ts">
import { cacheExchange, Client, fetchExchange, provideClient } from '@urql/vue';

const client = new Client({
  url: 'http://localhost:8000/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

provideClient(client);
</script>

<script setup lang="ts">
import MainLayout from './MainLayout.vue';
</script>
