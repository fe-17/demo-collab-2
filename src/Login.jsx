function login() {
    return(
        <section className="flex flex-col md:flex-row h-screen items-center">
            <div className="bg-gray-200 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <h1><a className="text-lg font-bold" href="npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch">Kembali ke Homepage</a></h1>
                <img src="https://images.unsplash.com/photo-1604480132736-44c188fe4d20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=990&q=80" alt="" className="w-full h-full object-cover"/>
            </div>

            <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
                flex items-center justify-center">
                <div className="w-full h-100">
                    <img className="mt-2" src="logo.png" alt=""/>
                    <h1 className="text-2xl md:text-2xl font-bold leading-tight mt-12 text-center">LOGIN</h1>

                    <form role="form" onsubmit="signIn(event);" className="mt-6" action="#" method="POST">
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <input type="email" name="" id="email" placeholder="Masukan Email" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" value="asd@example.com" autofocus autocomplete required></input>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700">Password</label>
                            <input type="password" name="" id="pwd" placeholder="Masukan Password" minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                                    focus:bg-white focus:outline-none" value="123456" required></input>
                        </div>
                        
                        <div className="text-right mt-2">
                            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Lupa Password?</a>
                        </div>

                        <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                                px-4 py-3 mt-6">Log In</button>
                    </form>
                    <p className="mt-8">
                        Belum punya akun? 
                        <a href="register.html" className="text-blue-500 hover:text-blue-700 font-semibold">
                            Daftar Disini
                        </a>
                    </p>
                </div>
          </div>
        </section>
    )
}