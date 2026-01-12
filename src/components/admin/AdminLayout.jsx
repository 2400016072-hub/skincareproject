export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-pink-50">
      <main className="p-6">{children}</main>
    </div>
  );
}
