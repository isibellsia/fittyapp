import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import supabase from "../lib/supabase";

function Header() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const sessionUser = supabase.auth.getUser();
    setUser(sessionUser);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/login");
  };

  return (
    <header className='bg-blue-500 text-white p-4'>
      <h1 className='text-2xl font-bold'>My Fitness App</h1>
      <nav>
        <ul className='flex gap-4 items-center'>
          <li className='px-4 py-2 rounded hover:bg-blue-400 transition'>
            <Link href='/dashboard'>Create a training</Link>
          </li>
          <li className='px-4 py-2 rounded hover:bg-blue-400 transition'>
            <Link href='/account'>Account</Link>
          </li>
          <li className='px-4 py-2 rounded hover:bg-blue-400 transition'>
            <Link href='/training'> All trainings</Link>
          </li>
          {user ? (
            <>
              <li className='px-4 py-2 rounded hover:bg-blue-400 transition'>
                <Link href='/mytrainings'>My trainings</Link>
              </li>
              <li>
                <button
                  onClick={handleSignOut}
                  className='px-4 py-2 rounded hover:bg-red-400 transition'
                >
                  Sign Out
                </button>
              </li>
            </>
          ) : (
            <li className='px-4 py-2 rounded hover:bg-blue-400 transition'>
              <Link href='/login'>Sign In</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
