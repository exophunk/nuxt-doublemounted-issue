<script setup>
onMounted(() => {
    console.log('Page 1 mounted');
});

const key = `${Math.random()}`;
const { data } = await useAsyncData(key, () => $fetch('https://dummyjson.com/quotes/1?delay=500'));
</script>

<template>
    <div>
        <h1>Page 1</h1>


        <ul>
            <li>✅ Switching between Page 1 and Page 2 is fine</li>
            <li>❌ Switching between Page 1 and Page 3 --> mounted() twice! Because different Layout</li>
            <li>❌ Switching between Page 1 and Page 4 --> mounted() twice! Because nested child route</li>
            <li>✅ Switching between Page 1 and Page 5 --> is fine, because not using async function</li>
            <li>❌ Switching between Page 1 and Page 6 --> Nested components ofc get mounted twice too!</li>
            <li>❌ Switching between Page 1 and Page 7 --> Same Problem using useAsyncData()</li>
            <li>❌ Switching between Page 1 and Page 8 --> Problem happens with any asynchronous method</li>
            <li>✅ Switching between Page 1 and Page 9 --> Problem can be solved with wrapping Suspense</li>
        </ul>
        <p>See console.log() for onMounted() log</p>


        <pre>
            Data:
            {{ data }}
        </pre>
    </div>
</template>