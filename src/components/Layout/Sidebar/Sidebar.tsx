import React from 'react';
import {Transition} from "@headlessui/react";

const Sidebar = ({children}: { children: React.ReactNode }) => {
    return (
        <Transition
            appear={true}
            show={true}
            enter="transition ease-in-out duration-500 transform"
            enterFrom="-translate-x-full "
            enterTo="translate-x-0 "
            leave="transition ease-in-out duration-500 transform"
            leaveFrom="md:translate-x-0 "
            leaveTo="-translate-x-full "
        >
            <aside className="md:h-full bg-second-dark-bg p-4 text-gray-text md:min-w-[18rem]">
                {children}
            </aside>
        </Transition>
    );
};

export default Sidebar
