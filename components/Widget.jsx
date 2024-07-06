export default function Widget({ title, children }) {
    return (
        <section className="p-4 border-b border-gray-500 mb-4">
            <div className="mb-4">
                <h4 className="text-sm font-mono text-gray-800">{title}</h4>
            </div>
            <div>
                {children}
            </div>
        </section>
    );
}