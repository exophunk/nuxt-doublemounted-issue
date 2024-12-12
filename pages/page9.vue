<script setup>

definePageMeta({
    layout: 'dark'
})

onMounted(() => {
    console.log('Page 9 mounted');
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
        <h1>Page 9</h1>
        <p>Issue happens with any async method</p>

        <pre>
            {{ data }}
        </pre>
    </div>
</template>