import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUser } from "../context/UserContext";

function withAuth(Component) {
  return function ProtectedRoute(props) {
    const { user, isInitialized } = useUser();
    const router = useRouter();

    useEffect(() => {
      if (isInitialized && !user) {
        router.push("/login"); // Redirect to login if user is not authenticated
      }
    }, [user, isInitialized, router]);

    return <Component {...props} />;
  };
}

export default withAuth;
