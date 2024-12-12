<script setup>

definePageMeta({
    layout: 'dark'
})

onMounted(() => {
    console.log('Page 5 mounted');
});

function load() {
    return new Promise((resolve) =>
        setTimeout(() => resolve(Math.random()), 500)
    )
}
let data = ref();
onMounted(async () => {
    data.value = await load();
})


</script>

<template>
    <div>
        <h1>Page 5</h1>
        <p>without useAsyncData()</p>
        <div>data={{ data }}</div>
    </div>
</template>