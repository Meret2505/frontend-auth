import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { KeyRound, Loader2, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { clearToken, fetchProfile, getToken } from "../hooks/useAuth";
import { Button } from "./ui/button";

const ProfileCard = () => {
  const [profile, setProfile] = useState<{ email: string; id: string } | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = getToken();
    if (!token) {
      window.location.href = "/";
      return;
    }

    const loadProfile = async () => {
      try {
        const response = await fetchProfile(token);
        setProfile(response.data);
      } catch (err: any) {
        if (err.response && err.response.status === 403) {
          clearToken();
          window.location.href = "/";
          return;
        }
        setError(err.message || "Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  const handleLogout = () => {
    clearToken();
    window.location.href = "/";
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="mr-2 h-6 w-6 animate-spin" />
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        {error}
      </div>
    );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"
    >
      <Card className="w-[370px] shadow-xl dark:bg-gray-800 dark:border-gray-700 rounded-lg overflow-hidden">
        {/* Header */}
        <CardHeader className="dark:bg-gray-800 dark:border-gray-700  dark:text-white text-black p-6 text-center rounded-t-lg">
          <CardTitle className="text-xl font-bold">Profile</CardTitle>
        </CardHeader>

        {/* Content */}
        <CardContent className="p-6 space-y-4">
          {/* Email Field */}
          <div className="flex flex-col items-start  bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
            <span className="font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1">
              <Mail className="dark:text-white " size={20} />
              Email:
            </span>
            <span className="text-gray-900 dark:text-white">
              {profile?.email}
            </span>
          </div>

          {/* ID Field */}
          <div className="flex flex-col items-start  bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
            <span className="font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1">
              <KeyRound className="dark:text-white " size={20} /> ID:
            </span>
            <span className="text-gray-900 dark:text-white">{profile?.id}</span>
          </div>

          {/* Logout Button */}
          <Button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-md transition duration-300"
          >
            Logout
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProfileCard;
