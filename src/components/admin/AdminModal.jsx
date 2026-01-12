export default function AdminModal({ show, title, onClose, children }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      <div
        className="relative z-10 bg-pink-50 rounded-2xl p-6 w-full max-w-md border border-pink-200"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-pink-700">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-pink-500 hover:text-pink-700 text-xl"
          >
            ✕
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
