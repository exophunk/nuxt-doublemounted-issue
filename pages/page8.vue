<script setup>

definePageMeta({
    layout: 'suspense'
})

onMounted(() => {
    console.log('Page 8 mounted');
});

const { data } = await useFetch('https://dummyjson.com/products/1');
</script>

<template>
    <div>
        <h1>Page 8</h1>
        <p>Solved with &lt;Suspense&gt;</p>

        <pre>
            {{ data }}
        </pre>
    </div>
</template>