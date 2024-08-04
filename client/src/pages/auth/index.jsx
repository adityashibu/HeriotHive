import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


const Auth = () => {
    return <div className="h-[100vh] w-[100vw] flex items-center justify-center bg-customBlue">
        <div className="h-[80vh] bg-white bg-opacity-80 border-2 border-white text-opacity-90 shadow-2xl w-[80vw] rounded-3xl md:w-[90vw] lg:w-[70vw] xl:w-[60vw] grid">
            <div className="flex flex-col gap-10 items-center justify-center">
                <div className="flex items-center justify-center flex-col">
                    <div className="flex items-center justify-center h-full w-full">
                        <h1 className="text-5xl md:text-6xl font-aquire text-customBlue">
                            Welcome to Heriot Hive
                        </h1>
                    </div>
                    <p className="font-medium text-center text-customBrown">Fill in the details to get started with the best chat app in Heriot</p>
                </div>
                <div className="flex items-center justify-center w-full">
                    <Tabs className="w-3/4">
                        <TabsList className="bg-transparent rounded-none w-full">
                            <TabsTrigger value="login" className="data-[state=active]:bg-transparent text-customBrown text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-customBlue data-[state=active]:border-b-customBrown p-3 transition-all duration-300">Log In</TabsTrigger>
                            <TabsTrigger value="signup" className="data-[state=active]:bg-transparent text-customBrown text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-customBlue data-[state=active]:border-b-customBrown p-3 transition-all duration-300">Sign Up</TabsTrigger>
                        </TabsList>
                        <TabsContent className="" value="login">

                        </TabsContent>
                        <TabsContent className="" value="signup">

                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    </div>
};

export default Auth;