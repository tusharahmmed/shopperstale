import { Loader, LoadingOverlay } from "@mantine/core";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Redirect, Route } from "react-router-dom";
import auth from "../../firebase.init";

const PrivateRoute = ({ children, ...rest }) => {
  // let auth = useAuth();
  const [user, loading, error] = useAuthState(auth);

  // handle loading

  if (loading) {
    return <LoadingOverlay transitionDuration={500} />;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
