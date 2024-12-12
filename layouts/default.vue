<template>
    <div>
        <TheNav />
        <NuxtPage />
    </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.3s;
}

.page-enter-from {
    opacity: 0;
}

.page-leave-to {
    opacity: 0;
}
</style>