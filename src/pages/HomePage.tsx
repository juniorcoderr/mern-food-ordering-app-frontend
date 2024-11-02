import { FiSearch } from "react-icons/fi";
import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 bg-gray-100 min-h-screen p-8">
      <div className="bg-white rounded-lg shadow-2xl py-8 px-6 flex flex-col gap-5 text-center -mt-24">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeaway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>

        <div className="flex justify-center mt-4">
          <div className="flex items-center w-full max-w-2xl bg-white border border-gray-300 rounded-lg shadow-sm">
            <span className="px-3 text-gray-500">
              <FiSearch />
            </span>

            <input
              type="text"
              placeholder="Search for food, restaurants, etc."
              className="w-full px-4 py-2 focus:outline-none"
            />

            <button className="px-4 py-2 bg-orange-600 text-white font-semibold rounded-r-lg hover:bg-orange-700">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the MernEats App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  );
}
