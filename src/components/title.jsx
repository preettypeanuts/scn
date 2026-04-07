export const Title = ({
    children,
    className = "",
    classPill = "",
    classText = "" }) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <div className={`w-1.5 h-5 bg-white rounded-full ${classPill}`}></div>
            <p className={`font-medium text-white ${classText}`}>
                {children}
            </p>
        </div>
    )
}