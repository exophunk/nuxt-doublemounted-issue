<script setup>

onMounted(() => {
    console.log('Page 4 mounted');
});

const key = `${Math.random()}`;
const { data } = await useAsyncData(key, () => new Promise((resolve) =>
    setTimeout(() => resolve(Math.random()), 500)
));
</script>

<template>
    <div>
        <h2>Nested/Page 4</h2>
        <p>nested child page</p>
        <div>data={{ data }}</div>
    </div>
</template>