<script setup>

definePageMeta({
    layout: 'dark'
})

onMounted(() => {
    console.log('Page 5 mounted');
});

async function load() {
    return $fetch('https://dummyjson.com/quotes/1?delay=500');
}
let data = ref();
onMounted(async () => {
    data.value = await load();
})


</script>

<template>
    <div>
        <h1>Page 5</h1>
        <p>without async method (loading data in onMounted)</p>
        <p>✅ No double mounting</p>
        <pre>
            Data:
            {{ data }}
        </pre>
    </div>
</template>