<script setup>

onMounted(() => {
    console.log('Page 4 mounted');
});

const { data } = await useFetch('https://dummyjson.com/quotes/1?delay=500');
</script>

<template>
    <div>
        <h2>Nested/Page 4</h2>
        <p>Nested child page</p>
        <p>❌ Page mounted twice!</p>
        <pre>
            Data:
            {{ data }}
        </pre>
    </div>
</template>