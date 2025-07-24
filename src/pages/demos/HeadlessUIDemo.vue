<script setup lang="ts">
    import { ref } from 'vue';
    import { Button, Dropdown, Modal, Tabs } from '@/components/ui';
    import { MenuItem } from '@headlessui/vue';
    import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue';
    import {
        RadioGroup,
        RadioGroupLabel,
        RadioGroupOption,
        RadioGroupDescription,
    } from '@headlessui/vue';

    // State
    const showModal = ref(false);
    const showConfirmModal = ref(false);
    const enabled = ref(false);
    const selectedPlan = ref<any>(null);

    // Tabs data
    const tabs = ref([
        { id: 'tab1', label: 'Tab 1', content: 'Content for tab 1' },
        { id: 'tab2', label: 'Tab 2', content: 'Content for tab 2' },
        { id: 'tab3', label: 'Tab 3', content: 'Content for tab 3' },
    ]);

    // Plans data
    const plans = ref([
        {
            id: 'startup',
            name: 'Startup',
            description: 'Perfect for small teams and startups.',
        },
        {
            id: 'business',
            name: 'Business',
            description: 'Great for growing businesses.',
        },
        {
            id: 'enterprise',
            name: 'Enterprise',
            description: 'For large organizations.',
        },
    ]);

    // Event handlers
    const handleTabChange = (index: number) => {
        console.log('Tab changed to:', index);
    };

    const handleConfirm = () => {
        console.log('Action confirmed!');
        showConfirmModal.value = false;
    };
</script>

<template>
    <div class="min-h-screen bg-gray-50 py-8">
        <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div class="mb-8">
                <h1 class="text-3xl font-bold text-gray-900">
                    Headless UI Components
                </h1>
                <p class="mt-2 text-gray-600">
                    A collection of accessible, unstyled UI components built
                    with Headless UI and Tailwind CSS.
                </p>
            </div>

            <!-- Button Examples -->
            <section class="mb-12">
                <h2 class="text-2xl font-semibold text-gray-900 mb-6">
                    Buttons
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <Button variant="default">Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                    <Button variant="destructive">Destructive</Button>
                </div>
                <div class="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon">🔍</Button>
                </div>
            </section>

            <!-- Dropdown Examples -->
            <section class="mb-12">
                <h2 class="text-2xl font-semibold text-gray-900 mb-6">
                    Dropdowns
                </h2>
                <div class="flex gap-4">
                    <Dropdown label="Options" button-variant="default">
                        <template #default>
                            <MenuItem v-slot="{ active }" as="template">
                                <a
                                    href="#"
                                    :class="[
                                        active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                        'block px-4 py-2 text-sm',
                                    ]"
                                >
                                    Account settings
                                </a>
                            </MenuItem>
                            <MenuItem v-slot="{ active }" as="template">
                                <a
                                    href="#"
                                    :class="[
                                        active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                        'block px-4 py-2 text-sm',
                                    ]"
                                >
                                    Support
                                </a>
                            </MenuItem>
                            <MenuItem v-slot="{ active }" as="template">
                                <a
                                    href="#"
                                    :class="[
                                        active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                        'block px-4 py-2 text-sm',
                                    ]"
                                >
                                    License
                                </a>
                            </MenuItem>
                        </template>
                    </Dropdown>

                    <Dropdown label="Actions" button-variant="primary">
                        <template #default>
                            <MenuItem v-slot="{ active }" as="template">
                                <button
                                    :class="[
                                        active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                        'block w-full text-left px-4 py-2 text-sm',
                                    ]"
                                >
                                    Edit
                                </button>
                            </MenuItem>
                            <MenuItem v-slot="{ active }" as="template">
                                <button
                                    :class="[
                                        active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                        'block w-full text-left px-4 py-2 text-sm',
                                    ]"
                                >
                                    Delete
                                </button>
                            </MenuItem>
                        </template>
                    </Dropdown>
                </div>
            </section>

            <!-- Tabs Examples -->
            <section class="mb-12">
                <h2 class="text-2xl font-semibold text-gray-900 mb-6">Tabs</h2>
                <Tabs :tabs="tabs" @change="handleTabChange">
                    <template #tab1="{ tab }">
                        <div class="p-4">
                            <h3 class="text-lg font-medium">{{ tab.label }}</h3>
                            <p class="mt-2 text-gray-600">
                                This is the content for the first tab. You can
                                put any content here.
                            </p>
                        </div>
                    </template>
                    <template #tab2="{ tab }">
                        <div class="p-4">
                            <h3 class="text-lg font-medium">{{ tab.label }}</h3>
                            <p class="mt-2 text-gray-600">
                                This is the content for the second tab. You can
                                put any content here.
                            </p>
                        </div>
                    </template>
                    <template #tab3="{ tab }">
                        <div class="p-4">
                            <h3 class="text-lg font-medium">{{ tab.label }}</h3>
                            <p class="mt-2 text-gray-600">
                                This is the content for the third tab. You can
                                put any content here.
                            </p>
                        </div>
                    </template>
                </Tabs>
            </section>

            <!-- Modal Examples -->
            <section class="mb-12">
                <h2 class="text-2xl font-semibold text-gray-900 mb-6">
                    Modals
                </h2>
                <div class="flex gap-4">
                    <Button @click="showModal = true">Open Modal</Button>
                    <Button
                        @click="showConfirmModal = true"
                        variant="destructive"
                    >
                        Confirm Action
                    </Button>
                </div>

                <!-- Basic Modal -->
                <Modal
                    :is-open="showModal"
                    title="Example Modal"
                    @close="showModal = false"
                >
                    <p class="text-gray-600">
                        This is an example modal built with Headless UI. It
                        includes proper focus management, keyboard navigation,
                        and accessibility features.
                    </p>
                    <template #footer>
                        <div class="flex justify-end gap-3">
                            <Button variant="outline" @click="showModal = false"
                                >Cancel</Button
                            >
                            <Button @click="showModal = false">Save</Button>
                        </div>
                    </template>
                </Modal>

                <!-- Confirm Modal -->
                <Modal
                    :is-open="showConfirmModal"
                    title="Confirm Action"
                    @close="showConfirmModal = false"
                >
                    <p class="text-gray-600">
                        Are you sure you want to perform this action? This
                        cannot be undone.
                    </p>
                    <template #footer>
                        <div class="flex justify-end gap-3">
                            <Button
                                variant="outline"
                                @click="showConfirmModal = false"
                                >Cancel</Button
                            >
                            <Button variant="destructive" @click="handleConfirm"
                                >Confirm</Button
                            >
                        </div>
                    </template>
                </Modal>
            </section>

            <!-- Direct Headless UI Examples -->
            <section class="mb-12">
                <h2 class="text-2xl font-semibold text-gray-900 mb-6">
                    Direct Headless UI Components
                </h2>

                <!-- Switch Example -->
                <div class="mb-6">
                    <h3 class="text-lg font-medium mb-3">Switch</h3>
                    <SwitchGroup>
                        <div class="flex items-center">
                            <Switch
                                v-model="enabled"
                                :class="[
                                    enabled ? 'bg-primary' : 'bg-gray-200',
                                    'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                                ]"
                            >
                                <span
                                    :class="[
                                        enabled
                                            ? 'translate-x-6'
                                            : 'translate-x-1',
                                        'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                                    ]"
                                />
                            </Switch>
                            <SwitchLabel
                                class="ml-3 text-sm font-medium text-gray-900"
                            >
                                Enable notifications
                            </SwitchLabel>
                        </div>
                    </SwitchGroup>
                </div>

                <!-- Radio Group Example -->
                <div class="mb-6">
                    <h3 class="text-lg font-medium mb-3">Radio Group</h3>
                    <RadioGroup v-model="selectedPlan">
                        <RadioGroupLabel
                            class="text-base font-medium text-gray-900"
                        >
                            Select a plan
                        </RadioGroupLabel>
                        <div class="mt-4 space-y-2">
                            <RadioGroupOption
                                v-for="plan in plans"
                                :key="plan.id"
                                :value="plan"
                                v-slot="{ checked, active }"
                                as="template"
                            >
                                <div
                                    :class="[
                                        active
                                            ? 'ring-2 ring-primary ring-offset-2'
                                            : '',
                                        checked
                                            ? 'bg-primary text-white'
                                            : 'bg-white',
                                        'relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none',
                                    ]"
                                >
                                    <div
                                        class="flex w-full items-center justify-between"
                                    >
                                        <div class="flex items-center">
                                            <div class="text-sm">
                                                <RadioGroupLabel
                                                    :class="
                                                        checked
                                                            ? 'text-white'
                                                            : 'text-gray-900'
                                                    "
                                                    class="font-medium"
                                                >
                                                    {{ plan.name }}
                                                </RadioGroupLabel>
                                                <RadioGroupDescription
                                                    :class="
                                                        checked
                                                            ? 'text-white'
                                                            : 'text-gray-500'
                                                    "
                                                    class="inline"
                                                >
                                                    {{ plan.description }}
                                                </RadioGroupDescription>
                                            </div>
                                        </div>
                                        <div
                                            :class="[
                                                checked
                                                    ? 'border-white'
                                                    : 'border-gray-300',
                                                'shrink-0 rounded-full border-2 bg-white',
                                            ]"
                                        >
                                            <div
                                                :class="[
                                                    checked
                                                        ? 'bg-primary'
                                                        : 'bg-transparent',
                                                    'h-2 w-2 rounded-full',
                                                ]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </RadioGroupOption>
                        </div>
                    </RadioGroup>
                </div>
            </section>
        </div>
    </div>
</template>
