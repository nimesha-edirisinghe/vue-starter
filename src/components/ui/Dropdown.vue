<template>
    <Menu as="div" class="relative inline-block text-left">
        <div>
            <MenuButton
                :class="[
                    'inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold shadow-sm',
                    'focus-visible:outline focus-visible:outline-offset-2',
                    buttonVariant === 'default' &&
                        'bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
                    buttonVariant === 'primary' &&
                        'bg-primary text-white hover:bg-primary-dark',
                ]"
            >
                <slot name="trigger">
                    {{ label }}
                </slot>
                <svg
                    class="-mr-1 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                    />
                </svg>
            </MenuButton>
        </div>

        <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
            <MenuItems
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
                <div class="py-1">
                    <slot />
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script setup lang="ts">
    import { Menu, MenuButton, MenuItems } from '@headlessui/vue';

    interface Props {
        label?: string;
        buttonVariant?: 'default' | 'primary';
    }

    withDefaults(defineProps<Props>(), {
        label: 'Options',
        buttonVariant: 'default',
    });
</script>
