const withPageStyles = (Wrapped: React.FunctionComponent) => {
    return () =>
        <main className="my-14 flex w-full flex-1 relative bg-main-dark-bg">
            <Wrapped/>
        </main>
}

export default withPageStyles
