<script setup>

definePageMeta({
    layout: 'dark'
})

onMounted(() => {
    console.log('Page 7 mounted');
});

const { data } = await useFetch('https://dummyjson.com/products/1');
</script>

<template>
    <div>
        <h1>Page 7</h1>
        <p>Same with useFetch()</p>

        <pre>
            {{ data }}
        </pre>
    </div>
</template>