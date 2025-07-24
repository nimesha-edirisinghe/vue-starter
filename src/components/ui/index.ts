// Headless UI Components
export { default as Button } from './Button.vue';
export { default as Dropdown } from './Dropdown.vue';
export { default as Modal } from './Modal.vue';
export { default as Tabs } from './Tabs.vue';
export { default as HeadlessUIProvider } from './HeadlessUIProvider.vue';

// Re-export Headless UI primitives for direct use
export {
    // Dialog components
    Dialog,
    DialogPanel,
    DialogTitle,
    DialogDescription,
    // Menu components
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    // Tab components
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    // Transition components
    TransitionRoot,
    TransitionChild,
    // Listbox components
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    // Popover components
    Popover,
    PopoverButton,
    PopoverPanel,
    PopoverGroup,
    // Radio Group components
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    // Switch components
    Switch,
    SwitchGroup,
    SwitchLabel,
    SwitchDescription,
    // Disclosure components
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    // Combobox components
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
} from '@headlessui/vue';
