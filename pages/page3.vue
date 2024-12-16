<script setup>

definePageMeta({
    layout: 'dark'
})

onMounted(() => {
    console.log('Page 3 mounted');
});

const { data } = await useFetch('https://dummyjson.com/quotes/1?delay=500');
</script>

<template>
    <div>
        <h1>Page 3</h1>
        <p>different layout</p>
        <p>❌ Page mounted twice!</p>
        <pre>
            Data:
            {{ data }}
        </pre>
    </div>
</template>