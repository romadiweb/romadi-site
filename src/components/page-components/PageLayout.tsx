
type PageLayoutProps = {
    children: React.ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
    return (
        <div className="min-h-screen text-black bg-white space-y-32">
            {children}
        </div>
    );
}
