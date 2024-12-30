export default function layout({ children, footer, header, main }) {
    console.log(footer);

    return (
        <div className="max-w-md mx-auto py-4">
            {header}
            {main}
            {footer}
            {children}
        </div>
    );
}
