import { login, lottieAuth, animatedH } from "@/assets";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import apiClient from "@/lib/api-client";
import { SIGNUP_ROUTE } from "@/utils/constants";
import { useState } from "react";

import Lottie from "react-lottie";
import { toast } from "sonner";


const Auth = () => {
    const defaultOptions = {
        autoplay: true,
        animationData: animatedH,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid meet"
        }
    };

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const validateSignup = () => {
        if (!email.length) {
            toast.error("Email is required");
            return false;
        }
        if (!password.length) {
            toast.error("Password is required");
            return false;
        }
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return false;
        }
        return true;
    };

    const handleLogin = async () => {

    }

    const handleSignup = async () => {
        if (validateSignup()) {
            const response = await apiClient.post(SIGNUP_ROUTE, { email, password });
            console.log(response);
        }
    }

    return <div className="h-[100vh] w-[100vw] flex items-center justify-center bg-white">
        <div className="sm:h-[80vh] sm:w-[80vw] md:w-[90vw] md:h-[90vh] lg:w-[70vw] xl:w-[60vw] bg-customBlue border border-customBlue border-opacity-90 shadow-5xl rounded-3xl p-8 grid sm:grid-cols-1 xl:grid-cols-2 bg-opacity-30">
            <div className="flex flex-col gap-10 items-center justify-center">
                <div className="flex items-center justify-center flex-col">
                    <div className="flex items-center justify-center h-full w-full">
                        <h1 className="text-4xl md:text-6xl font-aquire text-customBlue">
                            Heriot Hive
                        </h1>
                    </div>
                    <p className="font-medium text-center text-black text-[12px] md:text-lg">Fill in the details to get started with the best chat app in Heriot</p>
                </div>
                <div className="flex items-center justify-center w-full">
                    <Tabs className="w-3/4">
                        <TabsList className="bg-transparent rounded-none w-full">
                            <TabsTrigger value="login" className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-customBlue data-[state=active]:border-b-customBlue p-3 transition-all duration-300">Log In</TabsTrigger>
                            <TabsTrigger value="signup" className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-customBlue data-[state=active]:border-b-customBlue p-3 transition-all duration-300">Sign Up</TabsTrigger>
                        </TabsList>
                        <TabsContent className="flex flex-col gap-5 mt-10" value="login">
                            <Input
                                placeholder="Email"
                                type="email"
                                className="rounded-full p-6"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <Input
                                placeholder="Password"
                                type="password"
                                className="rounded-full p-6"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <Button className="rounded-full p-6" onClick={handleLogin}>Login</Button>
                        </TabsContent>
                        <TabsContent className="flex flex-col gap-5" value="signup">
                            <Input
                                placeholder="Email"
                                type="email"
                                className="rounded-full p-6"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <Input
                                placeholder="Password"
                                type="password"
                                className="rounded-full p-6"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <Input
                                placeholder="Confirm Password"
                                type="password"
                                className="rounded-full p-6"
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                            />
                            <Button className="rounded-full p-6" onClick={handleSignup}>Sign Up</Button>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
            <div className="hidden xl:flex justify-center items-center pointer-events-none">
                {/* <img src={login} alt="background login" className="h-[700px]" /> */}
                <Lottie
                    options={defaultOptions}
                    width={400}
                    height={400}
                    preserveAspectRatio="xMidYMid meet"
                />
            </div>
        </div>
    </div>
};

export default Auth;