
<script setup>
onMounted(() => {
  console.log('Slow subcomponent mounted');
});

const { data, status } = await useFetch('https://dummyjson.com/quotes/1?delay=5000', { lazy: true });
</script>

<template>
  <div style="padding: 20px; background: #aaa;">

    <div v-if="status === 'pending'">LOADING....</div>
    <pre v-else>
        {{ data }}
    </pre>
  </div>
</template>
