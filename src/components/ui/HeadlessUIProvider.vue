<template>
    <div class="headless-ui-provider">
        <slot />
    </div>
</template>

<script setup lang="ts">
    // This component provides a context for Headless UI components
    // It can be extended with theme providers, context providers, etc.
</script>

<style scoped>
    .headless-ui-provider {
        /* Ensure proper stacking context for modals, dropdowns, etc. */
        position: relative;
        isolation: isolate;
    }
</style>
