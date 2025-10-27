import { Link, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const { status, statusText } = useRouteError();

  return (
    <div className="m-10 rounded text-red-500 bg-yellow-50 max-w-xl mx-auto p-10 shadow-xl">
      <h4 className="text-2xl">
        #{status} Oops! {statusText}
      </h4>
      <p className="">
        Sorry, Something went wrong!{" "}
        <Link to="/" className="underline text-blue-200">
          Click here, Go to back{" "}
          <span className="font-semibold underline text-blue-200">Home</span>
        </Link>
      </p>
    </div>
  );
};