// Headless UI Configuration
export const headlessUIConfig = {
    // Default transition durations
    transitions: {
        fast: 150,
        normal: 300,
        slow: 500,
    },

    // Default z-index values for different components
    zIndex: {
        dropdown: 10,
        modal: 50,
        popover: 20,
        tooltip: 30,
    },

    // Default focus styles
    focus: {
        ring: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        outline:
            'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
    },

    // Common animation classes
    animations: {
        fadeIn: 'transition-opacity duration-300 ease-out',
        fadeOut: 'transition-opacity duration-200 ease-in',
        scaleIn: 'transition-all duration-300 ease-out',
        scaleOut: 'transition-all duration-200 ease-in',
    },
};

// Utility function to merge classes with Headless UI defaults
export function mergeClasses(
    ...classes: (string | undefined | null | false)[]
): string {
    return classes.filter(Boolean).join(' ');
}

// Utility function to create transition classes
export function createTransitionClasses(
    type: 'fade' | 'scale' | 'slide',
    direction: 'in' | 'out' = 'in'
) {
    const baseClasses = {
        fade: {
            in: 'transition-opacity duration-300 ease-out',
            out: 'transition-opacity duration-200 ease-in',
        },
        scale: {
            in: 'transition-all duration-300 ease-out',
            out: 'transition-all duration-200 ease-in',
        },
        slide: {
            in: 'transition-all duration-300 ease-out',
            out: 'transition-all duration-200 ease-in',
        },
    };

    return baseClasses[type][direction];
}

// Utility function to create transform classes
export function createTransformClasses(
    type: 'fade' | 'scale' | 'slide',
    direction: 'in' | 'out' = 'in'
) {
    const transformClasses = {
        fade: {
            in: 'opacity-0',
            out: 'opacity-100',
        },
        scale: {
            in: 'opacity-0 scale-95',
            out: 'opacity-100 scale-100',
        },
        slide: {
            in: 'opacity-0 translate-y-4',
            out: 'opacity-100 translate-y-0',
        },
    };

    return transformClasses[type][direction];
}
