"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, User, ArrowRight, Eye, EyeOff, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type AuthMode = "login" | "register";

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<AuthMode>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Form states
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Handle login submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Basic validation
    if (!loginForm.email || !loginForm.password) {
      setErrors({ general: "Please fill in all fields" });
      return;
    }
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      // Redirect after 1.5 seconds
      setTimeout(() => {
        router.push("/"); // or "/dashboard"
      }, 1500);
    }, 1000);
  };

  // Handle register submission
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const { name, email, password, confirmPassword } = registerForm;
    if (!name || !email || !password || !confirmPassword) {
      setErrors({ general: "Please fill in all fields" });
      return;
    }
    if (password !== confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }
    if (password.length < 6) {
      setErrors({ password: "Password must be at least 6 characters" });
      return;
    }
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        router.push("/");
      }, 1500);
    }, 1000);
  };

  // Reset success state when switching modes
  const switchMode = (newMode: AuthMode) => {
    setMode(newMode);
    setSuccess(false);
    setErrors({});
    setLoginForm({ email: "", password: "" });
    setRegisterForm({ name: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-teal-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-300 rounded-full blur-[140px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-300 rounded-full blur-[120px] opacity-20 pointer-events-none" />

      <div className="max-w-md w-full space-y-8 relative z-10">
        {/* Logo / Brand */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-600 to-teal-600 flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className="font-bold text-2xl text-gray-900 tracking-tight">
              Greenping<span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">.</span>
            </span>
          </Link>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2 p-1 bg-gray-100 rounded-2xl">
          <button
            onClick={() => switchMode("login")}
            className={cn(
              "flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300",
              mode === "login"
                ? "bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-md"
                : "text-gray-500 hover:text-gray-700"
            )}
          >
            Sign In
          </button>
          <button
            onClick={() => switchMode("register")}
            className={cn(
              "flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300",
              mode === "register"
                ? "bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-md"
                : "text-gray-500 hover:text-gray-700"
            )}
          >
            Create Account
          </button>
        </div>

        {/* Success Message */}
        {success && (
          <div className="rounded-2xl bg-green-50 border border-green-200 p-4 flex items-center gap-3 animate-fade-in">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <p className="text-sm text-green-800 font-medium">
              {mode === "login" ? "Logged in successfully! Redirecting..." : "Account created! Redirecting..."}
            </p>
          </div>
        )}

        {/* Login Form */}
        {mode === "login" && !success && (
          <form onSubmit={handleLogin} className="mt-8 space-y-6 animate-fade-in">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                    className="pl-10 w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    className="pl-10 pr-10 w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {errors.general && (
              <p className="text-red-500 text-xs text-center">{errors.general}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold text-sm hover:from-green-700 hover:to-teal-700 transition-all shadow-md disabled:opacity-70"
            >
              {loading ? "Signing in..." : "Sign In"}
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-center text-xs text-gray-500">
              By signing in you agree to our{" "}
              <Link href="#" className="text-green-600 hover:underline">Terms</Link>
            </p>
          </form>
        )}

        {/* Register Form */}
        {mode === "register" && !success && (
          <form onSubmit={handleRegister} className="mt-8 space-y-6 animate-fade-in">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={registerForm.name}
                    onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                    className="pl-10 w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Rahul Sharma"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={registerForm.email}
                    onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                    className="pl-10 w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={registerForm.password}
                    onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                    className="pl-10 pr-10 w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={registerForm.confirmPassword}
                    onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })}
                    className="pl-10 w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="••••••••"
                  />
                </div>
                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
              </div>
            </div>

            {errors.general && (
              <p className="text-red-500 text-xs text-center">{errors.general}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold text-sm hover:from-green-700 hover:to-teal-700 transition-all shadow-md disabled:opacity-70"
            >
              {loading ? "Creating account..." : "Create account"}
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-center text-xs text-gray-500">
              By creating an account you agree to our{" "}
              <Link href="#" className="text-green-600 hover:underline">Terms</Link>
            </p>
          </form>
        )}

        {/* Back to home link */}
        <div className="text-center">
          <Link href="/" className="text-sm text-gray-500 hover:text-green-600 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}