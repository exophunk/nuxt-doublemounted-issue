<script setup>

definePageMeta({
    layout: 'dark'
})

onMounted(() => {
    console.log('Page 8 mounted');
});

function load() {
    return new Promise((resolve) =>
        setTimeout(() => resolve(Math.random()), 500)
    )
}

const { data } = await load();
</script>

<template>
    <div>
        <h1>Page 8</h1>
        <p>Issue happens with any async method</p>
        <p>❌ Page mounted twice!</p>

        <pre>
            Data:
            {{ data }}
        </pre>
    </div>
</template>