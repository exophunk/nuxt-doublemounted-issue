<script setup>
onMounted(() => {
    console.log('Page 2 mounted');
});



const key = `${Math.random()}`;
const { data } = await useAsyncData(key, () => new Promise((resolve) =>
    setTimeout(() => resolve(Math.random()), 500)
));
</script>

<template>
    <div>
        <h1>Page 2</h1>
        <p>Same layout</p>
        <div>data={{ data }}</div>
    </div>
</template>