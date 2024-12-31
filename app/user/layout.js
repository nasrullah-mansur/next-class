export default function layout({ children, footer, header, main }) {
    return (
        <div className="max-w-md mx-auto py-4">
            {header}
            {main}
            {footer}
            {children}
        </div>
    );
}
