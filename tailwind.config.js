import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],

    safelist: [
        // Soft background colors
        'bg-blue-600',
        'bg-green-600',
        'bg-green-900',
        'bg-gray-300',
        'bg-gray-400',
        'bg-indigo-900',

        // Soft text colors
        'text-white',
        'text-black',
        'text-blue-400',
        'text-green-400',
        'text-red-400',
        'text-red-600',

        // Hover states
        {
            pattern: /bg-(blue|green|red)-(500|600|700)/,
            variants: ['hover'],
        },
        {
            pattern: /text-(white|blue|green|red)-(300|400|500|600)/,
            variants: ['hover'],
        },
    ],
};
