import React from 'react';
import {Transition} from "@headlessui/react";

export interface SideBarProps {
    children: React.ReactNode
}

const Sidebar = ({children}: SideBarProps) => {
    return (
        <aside className="md:h-full bg-second-dark-bg p-4 text-gray-text md:min-w-[18rem]">
            {children}
        </aside>
    )
}

const SidebarWithTransition = ({children}: SideBarProps) => {
    return (
        <>
            <Transition
                appear={true}
                show={true}
                enter="transition ease-in-out duration-500 transform"
                className="md:block hidden"
                enterFrom="-translate-x-full "
                enterTo="translate-x-0 "
                leave="transition ease-in-out duration-500 transform"
                leaveFrom="md:translate-x-0 "
                leaveTo="-translate-x-full "
            >
                <Sidebar>
                    {children}
                </Sidebar>
            </Transition>

            <Transition
                appear={true}
                show={true}
                enter="transition ease-in-out duration-500 transform"
                className="md:hidden block"
                enterFrom="-translate-y-full "
                enterTo="translate-y-0 "
                leave="transition ease-in-out duration-500 transform"
                leaveFrom="md:translate-y-0 "
                leaveTo="-translate-y-full "
            >
                <Sidebar>
                    {children}
                </Sidebar>
            </Transition>
        </>
    );
};

export default SidebarWithTransition
