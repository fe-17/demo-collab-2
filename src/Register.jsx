function Register() {
    return(
        <section className="flex flex-col md:flex-row h-screen items-center">
            <div className="bg-gray-200 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <h1><a className="text-lg font-bold" href="/landingpage/index.html">Kembali ke Homepage</a></h1>
                <img src="https://images.unsplash.com/photo-1604480132736-44c188fe4d20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=990&q=80" alt="" className="w-full h-full object-cover">
            </div>

            <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
                flex items-center justify-center">
                
                <div className="w-full h-100">
                    <img className="mt-2" src="logo.png" alt="">
                    <h1 className="text-2xl md:text-2xl font-bold leading-tight mt-8 text-center">REGISTER</h1>

                    <form role="form" onsubmit="signUp(event);" className="mt-6" action="#" method="POST">
                        <div>
                            <label className="block text-gray-700">Nama Awal</label>
                            <input type="text" name="" id="fname" placeholder="Masukan Nama Awal" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus required>
                        </div>
                        <div>
                            <label className="block text-gray-700">Nama Akhir</label>
                            <input type="text" name="" id="lname" placeholder="Masukan Nama Akhir" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus required>
                        </div>
                        <div>
                            <label className="block text-gray-700">Email Address</label>
                            <input type="email" name="" id="email" placeholder="Masukan Email" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
                        </div>
                        <div className="mt-2">
                            <label className="block text-gray-700">Password</label>
                            <input type="password" name="" id="pwd" placeholder="Masukan Password" minlength="5" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                                    focus:bg-white focus:outline-none" required>
                        </div>

                        <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                                px-4 py-3 mt-6">Daftar</button>
                    </form>
                        
                    <p className="mt-8">
                        Sudah punya akun? 
                        <a href="login.html" className="text-blue-500 hover:text-blue-700 font-semibold">
                            Login Disini
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
}