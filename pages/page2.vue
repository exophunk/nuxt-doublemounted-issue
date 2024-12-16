<script setup>
onMounted(() => {
    console.log('Page 2 mounted');
});


const { data } = await useFetch('https://dummyjson.com/quotes/1?delay=500');
</script>

<template>
    <div>
        <h1>Page 2</h1>
        <p>Same layout, everything ok</p>
        <p>✅ No double mounting</p>
        <pre>
            Data:
            {{ data }}
        </pre>
    </div>
</template>