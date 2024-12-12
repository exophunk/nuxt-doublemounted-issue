<script setup>

definePageMeta({
    layout: 'dark'
})

onMounted(() => {
    console.log('Page 3 mounted');
});

const key = `${Math.random()}`;
const { data } = await useAsyncData(key, () => new Promise((resolve) =>
    setTimeout(() => resolve(Math.random()), 500)
));

</script>

<template>
    <div>
        <h1>Page 3</h1>
        <p>different layout</p>
        <div>data={{ data }}</div>
    </div>
</template>