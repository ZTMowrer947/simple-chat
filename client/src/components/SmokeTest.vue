<template>
  <div>
    <h1 v-if="fetching">Loading...</h1>
    <h1 v-else-if="error">Error: {{ error }}</h1>
    <h1 v-else>Querying' it up: {{ data }}</h1>
  </div>
</template>

<script setup lang="ts">
import { gql, useQuery } from '@urql/vue';

const { fetching, error, data } = useQuery({
  query: gql`
    {
      ok
    }
  `,
});
</script>
