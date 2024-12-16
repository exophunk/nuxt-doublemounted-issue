<script setup>

definePageMeta({
    layout: 'dark'
})

onMounted(() => {
    console.log('Page 7 mounted');
});

const key = `${Math.random()}`;
const { data } = await useAsyncData(key, () => new Promise((resolve) =>
    setTimeout(() => resolve(Math.random()), 1000)
));
</script>

<template>
    <div>
        <h1>Page 7</h1>
        <p>Same with useAsynData() (or any async method in setup)</p>
        <p>❌ Page mounted twice!</p>

        <pre>
            Data:
            {{ data }}
        </pre>
    </div>
</template>