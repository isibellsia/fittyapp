import { useState } from "react";
import supabase from "../lib/supabase";
import { useRouter } from "next/router";
import { useUser } from "../context/UserContext";
import Link from "next/link"; // Import Link from Next.js

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setUser } = useUser();
  const [loginError, setLoginError] = useState(""); // State for login error

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Error logging in:", error.message);
      setLoginError("Invalid email or password. Please try again."); // Set login error message
    } else {
      setUser(data);
      router.push("/training"); // Redirect to dashboard
    }
  };
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f0f2f5",
    },
    form: {
      position: "relative",
      width: "300px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      padding: "20px",
      boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      backgroundColor: "#ffffff",
    },
    input: {
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    button: {
      padding: "10px",
      borderRadius: "5px",
      backgroundColor: "#007bff",
      color: "#fff",
      cursor: "pointer",
      border: "none",
    },
    h1: {
      color: "#007bff",
      fontSize: "2em",
      fontWeight: "600",
      marginBottom: "20px",
      letterSpacing: "1px",
      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
    },
    profilePrompt: {
      marginTop: "20px",
      fontSize: "1.1em",
      textAlign: "center",
    },
    signupLink: {
      color: "#007bff",
      textDecoration: "underline",
      marginLeft: "5px",
    },
    fitnessImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -1,
      objectFit: "cover",
      opacity: 0.2,
    },
  };

  return (
    <div style={styles.container}>
      <img
        src='https://images.unsplash.com/photo-1468971050039-be99497410af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80'
        alt='Fitness'
        style={styles.fitnessImage}
      />
      <h1 style={styles.h1}>Login</h1>{" "}
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type='submit' style={styles.button}>
          Login
        </button>
      </form>
      {loginError && ( // Display the error message if loginError is not empty
        <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>
          {loginError}
        </p>
      )}
      <p style={styles.profilePrompt}>
        You dont have a profile?{" "}
        <Link
          href='/signUp'
          style={{
            color: "#007bff",
            fontSize: "20px",
          }}
        >
          Sign Up
        </Link>
      </p>{" "}
      {/* Add this line */}
    </div>
  );
}

export default LoginPage;
