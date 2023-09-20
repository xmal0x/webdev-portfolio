import React from 'react';

const Sidebar = ({children}: { children: React.ReactNode }) => {
    return (
        <aside className="lg:pr-24 pr-12 h-full bg-second-dark-bg p-4 text-gray-text">
            {children}
        </aside>
    );
};

export default Sidebar
