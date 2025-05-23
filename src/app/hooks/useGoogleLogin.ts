import { useState, useEffect } from "react";
import { useGoogleLogin as useGoogleLoginLib } from "@react-oauth/google";

interface GoogleUser {
  name: string;
  email: string;
  picture?: string;
  sub: string;
}

export function useGoogleLogin() {
  const [user, setUser] = useState<GoogleUser | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const login = useGoogleLoginLib({
    onSuccess: async (tokenResponse) => {
      if (tokenResponse.access_token) {
        setLoading(true);
        try {
          const userInfoResponse = await fetch(
            "https://www.googleapis.com/oauth2/v3/userinfo",
            {
              headers: {
                Authorization: `Bearer ${tokenResponse.access_token}`,
              },
            }
          );

          if (!userInfoResponse.ok) {
            throw new Error("Falha ao obter informações do usuário");
          }

          const userInfo = await userInfoResponse.json();
          setUser(userInfo);
          setError(null);

          await fetch("/api/google/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: tokenResponse.access_token }),
          });
        } catch (err) {
          setError(err instanceof Error ? err.message : "Falha no login");
        } finally {
          setLoading(false);
        }
      }
    },
    onError: () => {
      setError("Falha no login com Google");
    },
    flow: "implicit",
  });

  const logout = () => {
    setUser(null);
    localStorage.removeItem("googleUser");
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("googleUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("googleUser", JSON.stringify(user));
    }
  }, [user]);

  return {
    user,
    loading,
    error,
    login,
    logout,
    isAuthenticated: !!user,
  };
}
