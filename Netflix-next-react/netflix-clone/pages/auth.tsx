import { useState } from "react";
import Input from "../components/Input";


const Auth = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState(''); 
    const [password, setPassword] = useState('');
    
    return( 
        // <div style={{ backgroundImage: url(${/images/hero.jpg}) }} 
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            {/* bg-cover : 꽉차게  */}
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="Logo" className="h-12"/>
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            Sign in
                        </h2>
                        <div className="flex flex-col gap-4">
                        <Input
                                label="Username"
                                onChange={(ev: any) => setName(ev.target.value)}
                                id = "name"
                                value={name}
                                />
                            <Input
                                label="Email"
                                onChange={(ev: any) => setEmail(ev.target.value)}
                                id = "email"
                                type="email"
                                value={email}
                                />
                              <Input
                                label="Password"
                                onChange={(ev: any) => setPassword(ev.target.value)}
                                id = "password"
                                type="password"
                                value={email}
                                />    
                        </div>
                        <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                            Login
                        </button>
                        <p className="text-neutral-500 mt-12"></p>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default Auth;