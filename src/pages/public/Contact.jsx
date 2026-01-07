const Contact = () => {
  return (
    <div className="px-8 py-12">
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-md p-8 relative overflow-hidden">
        
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-pink-100 rounded-full opacity-50"></div>
        <div className="absolute -bottom-14 -right-14 w-40 h-40 bg-pink-200 rounded-full opacity-40"></div>

        <h2 className="text-2xl font-bold mb-6 text-center text-pink-600">
          Contact Us 💕
        </h2>

        <div className="border border-pink-100 rounded-2xl p-6 space-y-6 bg-pink-50/40 backdrop-blur">
          
          <div className="text-center">
            <p className="font-semibold text-gray-700 mb-1">
              WhatsApp Admin
            </p>
            <a
              href="https://wa.me/6282184677951"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-green-600 font-medium
                         hover:scale-105 transition"
            >
              💬 0821-8467-7951
            </a>
          </div>

          <div className="text-center">
            <p className="font-semibold text-gray-700 mb-1">
              Instagram
            </p>
            <a
              href="https://www.instagram.com/yootim7/"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-pink-600 font-medium
                         hover:scale-105 transition"
            >
              📸 @yootim7
            </a>
          </div>

        </div>

        <p className="mt-8 text-center text-sm text-pink-500">
          Kami tunggu orderannya🦋
        </p>
      </div>
    </div>
  )
}

export default Contact
