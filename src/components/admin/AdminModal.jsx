export default function AdminModal({ show, title, onClose, children }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

      <div
        className="absolute inset-0 pointer-events-auto"
        onClick={onClose}
      />

      <div
        className="relative z-10 bg-white rounded-lg p-6 w-full max-w-md pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose}>✕</button>
        </div>

        {children}
      </div>
    </div>
  );
}
