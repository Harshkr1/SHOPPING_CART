import { Link } from "react-router";

/**
 * ErrorElement Component
 * -------------------------
 * This component is shown when a user navigates
 * to a route that does not exist (404 page).
 */
const ErrorElement = () => {
  return (
    <div>
      {/* Main error message */}
      <h1>Oh no, this route doesn't exist!</h1>

      {/* Navigation link to redirect user back to home */}
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default ErrorElement;