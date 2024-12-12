<script setup>
onMounted(() => {
    console.log('Page 1 mounted');
});

const key = `${Math.random()}`;
const { data } = await useAsyncData(key, () => new Promise((resolve) =>
    setTimeout(() => resolve(Math.random()), 500)
));
</script>

<template>
    <div>
        <h1>Page 1</h1>
        <div>data={{ data }}</div>

        <ul>
            <li>Switching between Page 1 and Page 2 is fine</li>
            <li>Switching between Page 1 and Page 3 --> mounted() twice! Because different Layout</li>
            <li>Switching between Page 1 and Page 4 --> mounted() twice! Because nested child route</li>
            <li>Switching between Page 1 and Page 5 --> is fine, because not using useAsyncData()</li>
            <li>Switching between Page 1 and Page 6 --> Nested components ofc get mounted twice too!</li>
            <li>Switching between Page 1 and Page 7 --> Same Problem using useFetch()</li>
            <li>Switching between Page 1 and Page 8 --> Problem can be solved with wrapping Suspense</li>
            <li>Switching between Page 1 and Page 9 --> Problem happens with any asynchronous method</li>
            <li>Switching between Page 1 and Page 10 --> lazyloading inside Components still works with Suspense</li>
        </ul>
        <p>See console.log() for onMounted() log</p>
    </div>
</template>