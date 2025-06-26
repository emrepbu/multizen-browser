<template>
    <div class="session-tabs">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.session-tabs {
    -webkit-app-region: no-drag;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 0;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    
    /* Smooth scrolling */
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
}
</style>
