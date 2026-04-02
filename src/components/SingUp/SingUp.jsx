import { useContext, useState } from 'react';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthContext/AuthContext';

const SignUp = () => {
    const { signUp, googleSignIn, facebookSignIn, twitterSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    // ✅ Email Sign Up
    const handleSignUp = async (e) => {
        e.preventDefault();

        if (password.length < 8) {
            Swal.fire({
                title: "Weak Password!",
                text: "Password must be at least 8 characters.",
                icon: "warning",
                confirmButtonColor: "#23BE0A",
            });
            return;
        }

        if (password !== confirmPassword) {
            Swal.fire({
                title: "Password Mismatch!",
                text: "Passwords do not match.",
                icon: "warning",
                confirmButtonColor: "#23BE0A",
            });
            return;
        }

        setLoading(true);
        try {
            await signUp(email, password);
            Swal.fire({
                title: "Account Created!",
                text: `Welcome to BookNest, ${name}!`,
                icon: "success",
                confirmButtonColor: "#23BE0A",
                timer: 2000,
                timerProgressBar: true,
            });
            navigate("/");
        } catch (error) {
            Swal.fire({
                title: "Sign Up Failed!",
                text: error.message,
                icon: "error",
                confirmButtonColor: "#23BE0A",
            });
        } finally {
            setLoading(false);
        }
    };

    // ✅ Social Sign In helper
    const handleSocialSignIn = async (providerFn, providerName) => {
        try {
            await providerFn();
            Swal.fire({
                title: "Welcome!",
                text: `Signed in with ${providerName} successfully.`,
                icon: "success",
                confirmButtonColor: "#23BE0A",
                timer: 2000,
                timerProgressBar: true,
            });
            navigate("/");
        } catch (error) {
            Swal.fire({
                title: `${providerName} Sign In Failed!`,
                text: error.message,
                icon: "error",
                confirmButtonColor: "#23BE0A",
            });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8 md:p-10">

                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
                    <p className="text-gray-500 text-sm">Join BookNest and start your reading journey</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSignUp} className="space-y-4">

                    {/* Name */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">Full Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#23BE0A] focus:ring-2 focus:ring-[#23BE0A20] transition-all duration-300 text-sm"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="john@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#23BE0A] focus:ring-2 focus:ring-[#23BE0A20] transition-all duration-300 text-sm"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Min. 8 characters"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#23BE0A] focus:ring-2 focus:ring-[#23BE0A20] transition-all duration-300 text-sm"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Re-enter your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#23BE0A] focus:ring-2 focus:ring-[#23BE0A20] transition-all duration-300 text-sm"
                        />
                    </div>

                    {/* Terms */}
                    <div className="flex items-center gap-2 pt-1">
                        <input
                            type="checkbox"
                            id="terms"
                            required
                            className="checkbox checkbox-sm border-gray-300"
                            style={{ accentColor: "#23BE0A" }}
                        />
                        <label htmlFor="terms" className="text-xs text-gray-500">
                            I agree to the{" "}
                            <span className="text-[#23BE0A] font-medium cursor-pointer hover:underline">
                                Terms of Service
                            </span>{" "}
                            and{" "}
                            <span className="text-[#23BE0A] font-medium cursor-pointer hover:underline">
                                Privacy Policy
                            </span>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full cursor-pointer text-white font-semibold py-3 rounded-xl transition-all duration-300 mt-2 text-sm shadow-md
                            ${loading
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-[#23BE0A] hover:bg-[#1a8e08] hover:shadow-lg"
                            }`}
                    >
                        {loading ? "Creating Account..." : "Create Account"}
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-3 my-6">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <span className="text-xs text-gray-400 font-medium">OR CONTINUE WITH</span>
                    <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols-3 gap-3">

                    {/* Google */}
                    <button
                        type="button"
                        onClick={() => handleSocialSignIn(googleSignIn, "Google")}
                        className="flex cursor-pointer items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 group"
                    >
                        <FaGoogle className="text-red-500 text-lg group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-xs font-medium text-gray-600 hidden sm:block">Google</span>
                    </button>

                    {/* Facebook */}
                    <button
                        type="button"
                        onClick={() => handleSocialSignIn(facebookSignIn, "Facebook")}
                        className="flex cursor-pointer items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 group"
                    >
                        <FaFacebook className="text-blue-600 text-lg group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-xs font-medium text-gray-600 hidden sm:block">Facebook</span>
                    </button>

                    {/* Twitter */}
                    <button
                        type="button"
                        onClick={() => handleSocialSignIn(twitterSignIn, "Twitter")}
                        className="flex cursor-pointer items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 group"
                    >
                        <FaTwitter className="text-sky-500 text-lg group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-xs font-medium text-gray-600 hidden sm:block">Twitter</span>
                    </button>

                </div>

                {/* Login Link */}
                <p className="text-center text-sm text-gray-500 mt-6">
                    Already have an account?{" "}
                    <a href="/sing-in" className="text-[#23BE0A] font-semibold hover:underline">
                        Sign In
                    </a>
                </p>

            </div>
        </div>
    );
};

export default SignUp;