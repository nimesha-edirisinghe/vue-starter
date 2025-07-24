<template>
    <button
        :class="[
            'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
            'disabled:pointer-events-none disabled:opacity-50',
            // Variant styles
            variant === 'default' &&
                'bg-primary text-white hover:bg-primary-dark',
            variant === 'destructive' &&
                'bg-danger text-white hover:bg-red-700',
            variant === 'outline' &&
                'border border-gray-300 bg-transparent hover:bg-gray-50',
            variant === 'secondary' &&
                'bg-gray-100 text-gray-900 hover:bg-gray-200',
            variant === 'ghost' && 'hover:bg-gray-100 hover:text-gray-900',
            variant === 'link' &&
                'text-primary underline-offset-4 hover:underline',
            // Size styles
            size === 'default' && 'h-10 px-4 py-2',
            size === 'sm' && 'h-9 rounded-md px-3',
            size === 'lg' && 'h-11 rounded-md px-8',
            size === 'icon' && 'h-10 w-10',
        ]"
        v-bind="$attrs"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
    interface Props {
        variant?:
            | 'default'
            | 'destructive'
            | 'outline'
            | 'secondary'
            | 'ghost'
            | 'link';
        size?: 'default' | 'sm' | 'lg' | 'icon';
    }

    withDefaults(defineProps<Props>(), {
        variant: 'default',
        size: 'default',
    });
</script>
