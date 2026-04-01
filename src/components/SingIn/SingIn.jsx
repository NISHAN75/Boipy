import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

const SignIn = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8 md:p-10">

                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
                    <p className="text-gray-500 text-sm">Sign in to continue your reading journey</p>
                </div>

                {/* Form */}
                <div className="space-y-4">

                    {/* Email */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#23BE0A] focus:ring-2 focus:ring-[#23BE0A20] transition-all duration-300 text-sm"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <label className="text-sm font-medium text-gray-700">Password</label>
                            <a href="/forgot-password" className="text-xs text-[#23BE0A] hover:underline font-medium">
                                Forgot Password?
                            </a>
                        </div>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#23BE0A] focus:ring-2 focus:ring-[#23BE0A20] transition-all duration-300 text-sm"
                        />
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center gap-2 pt-1">
                        <input
                            type="checkbox"
                            id="remember"
                            className="checkbox checkbox-sm border-gray-300"
                            style={{ accentColor: "#23BE0A" }}
                        />
                        <label htmlFor="remember" className="text-xs text-gray-500">
                            Remember me for 30 days
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button className="w-full bg-[#23BE0A] hover:bg-[#1a8e08] text-white font-semibold py-3 rounded-xl transition-all duration-300 mt-2 text-sm shadow-md hover:shadow-lg">
                        Sign In
                    </button>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3 my-6">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <span className="text-xs text-gray-400 font-medium">OR CONTINUE WITH</span>
                    <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols-3 gap-3">

                    {/* Google */}
                    <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 group">
                        <FaGoogle className="text-red-500 text-lg group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-xs font-medium text-gray-600 hidden sm:block">Google</span>
                    </button>

                    {/* Facebook */}
                    <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 group">
                        <FaFacebook className="text-blue-600 text-lg group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-xs font-medium text-gray-600 hidden sm:block">Facebook</span>
                    </button>

                    {/* Twitter */}
                    <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 group">
                        <FaTwitter className="text-sky-500 text-lg group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-xs font-medium text-gray-600 hidden sm:block">Twitter</span>
                    </button>

                </div>

                {/* Sign Up Link */}
                <p className="text-center text-sm text-gray-500 mt-6">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-[#23BE0A] font-semibold hover:underline">
                        Create Account
                    </a>
                </p>

            </div>
        </div>
    );
};

export default SignIn;