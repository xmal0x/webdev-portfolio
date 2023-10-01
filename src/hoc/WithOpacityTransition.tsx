import React from "react"
import {Transition} from "@headlessui/react"

const withOpacityTransition = (Wrapped: React.FunctionComponent) => {
    return () =>
        <Transition
            show={true}
            appear={true}
            className="flex flex-1"
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <Wrapped/>
        </Transition>
}

export default withOpacityTransition
