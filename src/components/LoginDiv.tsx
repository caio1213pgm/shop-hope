import { Link } from "react-router";
import { CircleUserRound } from "lucide-react";
import { useAuth } from "../context/authContext";

function LoginDiv() {
  const { user } = useAuth();
  return (
    <div className="flex items-center justify-between gap-3 text-white">
      <Link to={user ? "/account" : "/login"}className="text-2xl text-white hover:underline">
        {user ? user.username : "Login"}
      </Link>
      <CircleUserRound className="size-8" />
    </div>
  );
}
export default LoginDiv;