<script setup>

definePageMeta({
    layout: 'suspense'
})

onMounted(() => {
    console.log('Page 10 mounted');
});

</script>

<template>
    <div>
        <h1>Page 10</h1>
        <p>Having Sub component with lazy loading</p>

        <SlowLoadingComponent />
    </div>
</template>