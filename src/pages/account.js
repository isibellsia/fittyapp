import React, { useState } from "react";
import Layout from "../components/Layout";
import { useUser } from "../context/UserContext";
import supabase from "../lib/supabase";
import { useRouter } from "next/router";

function AccountPage() {
  const router = useRouter();
  const { user } = useUser();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    // ... (rest of your code unchanged)
  };

  return (
    <Layout>
      <div className='flex justify-center items-center '>
        <div className='container mx-auto my-auto py-8'>
          <h1 className='text-3xl font-semibold  text-center mb-10 '>
            Account Settings
          </h1>
          <div className='bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto'>
            <h2 className='text-xl font-semibold mb-4'>Email: {user?.email}</h2>
            <h2 className='text-xl font-semibold my-4'>Change Password</h2>
            <form onSubmit={handlePasswordChange}>
              <div className='mb-4'>
                <label className='block text-sm font-semibold mb-2'>
                  Current Password:
                </label>
                <input
                  type='password'
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className='w-full p-2 border rounded'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-semibold mb-2'>
                  New Password:
                </label>
                <input
                  type='password'
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className='w-full p-2 border rounded'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-semibold mb-2'>
                  Confirm New Password:
                </label>
                <input
                  type='password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className='w-full p-2 border rounded'
                />
              </div>
              <button
                type='submit'
                className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-400'
                onClick={() => router.push("/login")}
              >
                Change Password
              </button>
            </form>
            {message && <p className='mt-4 text-red-500'>{message}</p>}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AccountPage;
