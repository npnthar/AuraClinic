export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-7xl font-light text-slate-300">404</h1>
        <h2 className="text-2xl font-medium text-slate-800">Страница не найдена</h2>
        <p className="text-slate-600">К сожалению, эта страница не существует.</p>
        <button 
          onClick={() => window.location.href = '/'} 
          className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-white bg-[#c8956c] rounded hover:bg-[#b07d56] transition-colors"
        >
          Вернуться на главную
        </button>
      </div>
    </div>
  )
}
