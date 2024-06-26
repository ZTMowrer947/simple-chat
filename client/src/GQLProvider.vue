<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { cacheExchange, Client, fetchExchange, provideClient } from '@urql/vue';

const client = new Client({
  url: 'http://localhost:8000/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

provideClient(client);
</script>

<script setup></script>
