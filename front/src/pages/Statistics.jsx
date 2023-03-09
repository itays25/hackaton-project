import AdminNavBar from "../components/AdminNavbar";

export default function Statistics(params) {
  return (
    <div>
      <AdminNavBar></AdminNavBar>
      <h3 className="flex flex-col justify-center">
        spector
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <ul class="list-disc list-inside">
            <li class="flex items-center p-2 border-4 w-1/4">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-blue-500"
              />
              <span class="ml-2 text-gray-700">Item {number}</span>
            </li>
          </ul>
        ))}
      </h3>
    </div>
  );
}
