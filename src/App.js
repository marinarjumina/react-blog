import logo from './images/logo.svg';

const App = () => {
  return (
    <>
      <div className="min-h-screen flex-1 bg-gray-200 p-4 flex justify-center items-center">
        <div className="bg-white w-full md:max-w-5xl rounded-3xl shadow-lg">
          <div className="h-20 flex justify-between items-center border-b border-gray-200 my-4 mx-6">
            <div class="flex items-center">
              <img src={logo} className="h-16 w-16" alt="logo" />
              <h1 className="text-2xl font-semibold text-gray-600">React blog</h1>
            </div>
            <div className="flex flex-col items-end pb-3">
              <h5 className="text-sm font-semibold text-gray-600 pb-1">Posts read:</h5>
              <div className="flex flex-col items-end pr-1">
                <p className="text-xs font-semibold text-gray-500">1 daily</p>
                <p className="text-xs font-semibold text-gray-500">1 weekly</p>
              </div>
            </div>
          </div>
          <div className="px-6">
            <div className="flex justify-between items-center h-16 p-4 my-6 rounded-lg border border-gray-100 shadow">
              <div className="text-base font-semibold text-gray-600">Lirik</div>
              <div>
                <button className="bg-red-400 hover:bg-red-500 p-2 rounded-full shadow flex justify-center items-center">
                  <svg className="text-white w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center p-6">
            <button className="py-4 px-10 bg-indigo-500 hover:bg-indigo-400 rounded-lg shadow text-sm font-medium uppercase text-white">Get new posts!</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
