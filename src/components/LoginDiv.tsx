import { Link } from "react-router";
import { CircleUserRound } from 'lucide-react';

function LoginDiv(){
    return (
        <div className="flex items-center justify-between gap-3 text-white">
            <Link to='/login' className="text-2xl text-white hover:underline">Login</Link>
            <CircleUserRound className="size-8" />
        </div>
    )
}
export default LoginDiv;