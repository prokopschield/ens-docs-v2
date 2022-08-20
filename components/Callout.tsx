import React from 'react';

const themes = {
    default:
        'bg-ensl-accent dark:bg-ensd-accent bg-opacity-10 dark:bg-opacity-10 text-ensl-accent dark:text-ensw-accent dark:bg-ensd-accent',
    yellow: 'bg-orange-100 text-orange-800 dark:text-orange-300 dark:bg-orange-200 dark:bg-opacity-10',
    error: 'bg-red-200 text-red-900 dark:text-red-200 dark:bg-red-600 dark:bg-opacity-30',
    warning:
        'bg-yellow-200 text-yellow-900 dark:text-yellow-200 dark:bg-yellow-700 dark:bg-opacity-30',
};

export const Callout = ({ children, type = 'default', emoji = '💡' }) => {
    return (
        <div className={`${themes[type]} flex rounded-lg callout mt-6`}>
            <div
                className="pl-6 pr-2 py-6 select-none text-xl"
                style={{
                    fontFamily:
                        '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                }}
            >
                {emoji}
            </div>
            <div className="pr-4 pl-2 py-6 noheadpats">{children}</div>
        </div>
    );
};