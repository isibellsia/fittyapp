import supabase from "../lib/supabase";
import { useState } from "react";
import Link from "next/link";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showVerificationMessage, setShowVerificationMessage] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    // You can store the username in the user_metadata
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
      data: { username },
    });

    if (error) {
      console.error("Error signing up:", error.message);
      setShowVerificationMessage(false);
    } else {
      console.log("User signed up:", user);
      setShowVerificationMessage(true); // Show the verification message
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
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Sign Up</h1>{" "}
      <form onSubmit={handleSignup} style={styles.form}>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
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
          Sign Up
        </button>
      </form>
      {showVerificationMessage && (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Thank you for signing up! An email has been sent to{" "}
          <strong>{email}</strong> with instructions to verify your email
          address.
        </p>
      )}
      <p style={{ textAlign: "center", marginTop: "20px" }}>
        Already have an account?{" "}
        <Link
          href='/login'
          style={{
            color: "#007bff",
            fontSize: "20px",
          }}
        >
          Log in
        </Link>
      </p>
    </div>
  );
}

export default SignupPage;
