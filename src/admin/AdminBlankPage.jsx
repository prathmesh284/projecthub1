import BlankPageImage from "../assets/beard-man.png";
import { Link } from "react-router-dom";

export default function AdminBlankPage() {
  return (
    <div
      className="flex flex-col justify-center items-center px-4 text-center"
      style={{ height: 'calc(80vh)', width: 'calc(80vw)' }}
    >
      <img
        src={BlankPageImage}
        alt="admin-welcome"
        className="h-auto max-w-60 object-contain mb-6"
      />

      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Welcome back, Boss! <span className="text-blue-600">
          {/* {name} */}
        </span> 👋
      </h2>

      <p className="text-gray-500 text-lg mb-1">
        You are logged in as administrator.
      </p>

      <p className="text-gray-500 text-lg flex items-center">
        Go to your dashboard →{" "}
        <Link to="/admin/home/projects" className="text-blue-700 hover:underline ml-1">
          Projects
        </Link>
      </p>
    </div>
  );
}
