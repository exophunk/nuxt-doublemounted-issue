<script setup>

definePageMeta({
    layout: 'suspense'
})

onMounted(() => {
    console.log('Page 9 mounted');
});

const { data } = await useFetch('https://dummyjson.com/quotes/1');
</script>

<template>
    <div>
        <h1>Page 9</h1>
        <p>Solved with &lt;Suspense&gt;</p>
        <p>✅ No double mounting</p>

        <pre>
            Data:
            {{ data }}
        </pre>
    </div>
</template>