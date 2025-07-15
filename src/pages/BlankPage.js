import BlankPageImage from "../assets/beard-man.png";
import { Link } from "react-router-dom";

export default function BlankPage() {
  return (
    <div className="flex flex-col justify-center items-center px-4 text-center" style={{ height: 'calc(80vh)', width:'calc(80vw)'}}>
      <img
        src={BlankPageImage}
        alt="blank-page-message"
        className="h-auto max-w-60 object-contain mb-6"
      />
      <p className="text-gray-500 text-lg">There's nothing here... yet 🕊️</p>
      <p className="text-gray-500 text-lg flex">Go to project page...
        <Link to='/home/projects' className=""><h6 className="text-gray-800">project</h6></Link>
      </p>
    </div>
  );
}
