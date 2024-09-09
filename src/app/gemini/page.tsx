

export default function Page() {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-4xl text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-4">
            By Using Our ML Model
          </h1>
          <p className="text-gray-300 text-lg">
            Based on the crimes, this user will be told whether they will get bail or not. This will also inform judges or police about the next procedure.
          </p>
        </div>
      </div>
    );
  }
  