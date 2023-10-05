import {isRouteErrorResponse, Link, useRouteError} from "react-router-dom";

const Error = () => {
    const error = useRouteError()
    console.error(error);

    return (
        <div className="flex gap-4 items-center justify-center h-full w-full flex-col sm:py-40 py-16 px-4">
            <h2 className="text-4xl font-bold text-white">Oops!</h2>
            <p className="text-center text-xl">Sorry, an unexpected error has occurred.</p>
            {isRouteErrorResponse(error) &&
                <p className="text-2xl text-white-text">
                    {error.statusText}
                </p>
            }
            <Link to="/"
                  className="hover:bg-second-dark-bg mt-6 text-xl p-6 border border-secondary-gray rounded bg-main-dark-bg text-white">Go
                to home
                page</Link>
        </div>
    )
}

export default Error
