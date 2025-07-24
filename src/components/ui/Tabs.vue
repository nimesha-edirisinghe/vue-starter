<template>
    <TabGroup :defaultIndex="defaultIndex" @change="$emit('change', $event)">
        <TabList class="flex space-x-1 rounded-xl bg-gray-100 p-1">
            <Tab
                v-for="tab in tabs"
                :key="tab.id"
                v-slot="{ selected }"
                as="template"
            >
                <button
                    :class="[
                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2',
                        selected
                            ? 'bg-white text-primary shadow'
                            : 'text-gray-600 hover:bg-white/[0.12] hover:text-gray-800',
                    ]"
                >
                    {{ tab.label }}
                </button>
            </Tab>
        </TabList>
        <TabPanels class="mt-2">
            <TabPanel
                v-for="tab in tabs"
                :key="tab.id"
                :class="[
                    'rounded-xl bg-white p-3',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2',
                ]"
            >
                <slot :name="tab.id" :tab="tab">
                    {{ tab.content }}
                </slot>
            </TabPanel>
        </TabPanels>
    </TabGroup>
</template>

<script setup lang="ts">
    import {
        TabGroup,
        TabList,
        Tab,
        TabPanels,
        TabPanel,
    } from '@headlessui/vue';

    interface Tab {
        id: string;
        label: string;
        content?: string;
    }

    interface Props {
        tabs: Tab[];
        defaultIndex?: number;
    }

    withDefaults(defineProps<Props>(), {
        defaultIndex: 0,
    });

    defineEmits<{
        change: [index: number];
    }>();
</script>
