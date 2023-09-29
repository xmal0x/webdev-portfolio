import React from 'react';

const Sidebar = ({children}: { children: React.ReactNode }) => {
    return (
        <aside className="md:h-full bg-second-dark-bg p-4 text-gray-text md:min-w-[18rem]">
            {children}
        </aside>
    );
};

export default Sidebar
