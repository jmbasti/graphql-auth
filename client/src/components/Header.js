import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { USER_QUERY } from "./../queries/index";
import { LOGOUT } from "./../mutations/index";

const Header = () => {
  const history = useHistory();
  const { data, loading, error } = useQuery(USER_QUERY);
  const [logout] = useMutation(LOGOUT, {
    refetchQueries: [{ query: USER_QUERY }],
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleLogout = () => {
    logout();
    history.push("/signin");
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          Home
        </Link>

        <ul className="right">
          {data.user === null ? (
            <>
              <li>
                <Link to="/signin">Sign-in</Link>
              </li>
              <li>
                <Link to="/signup">Sign-up</Link>
              </li>
            </>
          ) : (
            <li>
              <button onClick={handleLogout} className="btn-small">
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
