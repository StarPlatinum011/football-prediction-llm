'use client'

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/16/solid";

const ThemeToggle = () => {
    const {theme, setTheme} = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light':'dark')}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
        >
            {theme === 'dark' ? <SunIcon className="w-4 h-4"/>:<MoonIcon className="w-4 h-4"/>}
        </button>
    );
};

export default ThemeToggle;