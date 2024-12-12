<script setup>

definePageMeta({
    layout: 'dark'
})

onMounted(() => {
    console.log('Page 6 mounted');
});

const key = `${Math.random()}`;
const { data } = await useAsyncData(key, () => 'simple');
</script>

<template>
    <div>
        <h1>Page 6</h1>
        <p>Subcomponent mounting twice too</p>
        <SubComponent />
    </div>
</template>