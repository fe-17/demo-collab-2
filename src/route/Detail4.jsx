import React from 'react'
import logo from "../assets/rs-corolus.png";

export const Detail4 = () => {
  return (
    <div className=''>
        <div id="home" className="pt-36">
            <div className="container bg-teal-400 w-11/12 ml-16 mr-14"> 
                <div className="flex flex-wrap">
                    <div className="w-full self-end px-4 lg:w-1/2">
                        <div className="relative mt-10 lg:mt-9 lg:right-0 ml-5">
                            <img src={logo} alt="logo" className="max-w-xs mb-10 mt-10 bg-white rounded-2xl " />
                        </div>
                    </div>
                    <div className="w-full self-center px-4 lg:w-1/2">
                        <h1
                            className="text-base font-semibold text-primary md:text-xl">
                            Welcome to,
                            <span className="block font-bold text-slate-900 text-4xl lg:text-5xl mb-5"
                            >Rumah Sakit St. Carolus 🏥</span>
                        </h1>
                        <h2 className="font-medium text-slate-500 text-lg  lg:text-2xl">
                            No.41, Jl. Salemba Raya, Paseban, Kec. Senen, Kota Jakarta Pusat,
                        </h2>
                        <p className="font-medium text-slate-500  leading-relaxed">
                            Daerah Khusus Ibukota Jakarta, Indonesia
                        </p>
                        <p className="font-medium text-slate-500 mb-8 leading-relaxed">
                            02123567990
                        </p>
                        <a href='tel:02123567990' className="text-base font-semibold text-black bg-white py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out ">Jadwalkan Konsultasi</a>
                    </div>
                </div>
            </div>
        </div>

        <div id="Layanan-detail-clinic" className="pt-6 pb-16 bg-teal-400 mt-10 w-11/12 ml-16 mr-14">
            <div className="container ml-100 mt-10">
                <div className=" px-4">
                    <div className="max-w-xl mx-auto text-center mb-19 mt-10">
                        <div className="block p-10 bg-white rounded-lg w-150 h-300" >
                            <h1 className="mb-10 text-5xl font-bold tracking-tight text-black ">Profil Rumah Sakit</h1>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Rumah Sakit St. Carolus mulai beroperasi sejak tanggal 21 Januari 1919, yang berada dibawah naungan Perkumpulan Perhimpunan St. Carolus Vereeniging (PPSC). Rumah Sakit St. Carolus memiliki Visi menjadi Rumah Sakit pilihan keluarga yang profesional dan aman. Dengan Misi memberi pelayanan yang bermutu tanpa membedakan ras dan agama, dan meningkatkan pendidikan dan penelitian.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
      <div className="grid lg:grid-cols-2  sm:grid-cols-1 gap-4">
          <div>
              <div className="block p-6  bg-teal-400 rounded-2xl ml-10 mr-10 mt-10 text-center h-96" >
                  <h1 className="mb-2 text-3xl font-bold tracking-tight text-black bg-primary ml-48 mr-48 rounded-2xl">Fasilitas</h1>
                  <div className="overflow-x-auto relative">
                      <table className="w-full text-left">
                          <tbody>
                              <tr className="bg-transparent">
                                  <th scope="row" className="py-4 px-6 font-normal whitespace-nowrap text-black">• Farmasi</th>
                                  <td className="py-4 px-6 font-normal whitespace-nowrap text-black">• Instalasi Laktasi</td>
                              </tr>
                              <tr className="bg-transparent">
                                  <th scope="row" className="py-4 px-6 font-normal whitespace-nowrap text-black">• Kantin</th>
                                  <td className="py-4 px-6 font-normal whitespace-nowrap text-black">• ATM</td>
                              </tr>
                              <tr className="bg-transparent">
                                  <th scope="row" className="py-4 px-6 font-normal whitespace-nowrap text-black">• Medical Check Up</th>
                                  <td className="py-4 px-6 font-normal whitespace-nowrap text-black">• Instalasi Rawat Inap</td>
                              </tr> 
                              <tr className="bg-transparent">
                                  <th scope="row" className="py-4 px-6 font-normal whitespace-nowrap text-black">• Instalasi radiologi</th>
                                  <td className="py-4 px-6 font-normal whitespace-nowrap text-black">• Instalasi Rawat Jalan</td>
                              </tr>
                              <tr className="bg-transparent">
                                  <th scope="row" className="py-4 px-6 font-normal whitespace-nowrap text-black">• Unit Gawat Darurat</th>
                                  <td className="py-4 px-6 font-normal whitespace-nowrap text-black">• Instalasi Laboratorium</td>
                              </tr>
                          </tbody>
                      </table>  
                  </div>
              </div>     
          </div>
              
          <div>
              <div className="block p-6 bg-teal-400 rounded-2xl mr-10 ml-10 mt-10 h-96" >
                  <h1 className="mb-2 text-3xl font-bold tracking-tight text-black text-center bg-primary ml-48 mr-48 rounded-2xl">Kontak Kami</h1>
                  <div className="overflow-x-auto relative">
                      <table className="w-full text-lg text-left text-gray-500 rounded-lg border-black">
                          <tbody className=''>
                              <tr className="bg-transparent">
                                  <th scope="row" className="py-4 px-6 whitespace-nowrap">
                                    <a href="/#" className="w-12 h-12 mr-5 rounded-full flex justify-center items-center border border-slate-300 hover:border-pink-500 hover:bg-pink-400 hover:text-white text-slate-300"> 
                                        <svg role="img" width="26" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                                    </a>

                                  </th>
                                  <td className="py-4 px-6 font-normal whitespace-nowrap text-black">- </td>
                              </tr>
                              <tr className="bg-transparent">
                                  <th scope="row" className="py-4 px-6 whitespace-nowrap">
                                    <a href="tel:02123567990"  className="w-12 h-12 mr-5 rounded-full flex justify-center items-center border border-slate-300 hover:border-green-400 hover:bg-green-400 hover:text-white text-slate-300"> 
                                            <svg role="img" width="26" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                                        </a>
                                  </th>
                                  <td className="py-4 px-6 font-normal whitespace-nowrap text-black">02123567990</td>
                              </tr>
                              <tr className="bg-transparent">
                                  <th scope="row" className="py-4 px-6 font-normal whitespace-nowrap text-black"> 
                                    <a href='/#' className='w-12 h-12 mr-5 rounded-full flex justify-center items-center border border-slate-300 hover:border-red-500 hover:bg-red-500 hover:text-white text-slate-300'>
                                            <svg role="img" width="26" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mail.Ru</title><path d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12"/></svg>
                                    </a>
                                  </th>
                                  <td className="py-4 px-6 font-normal whitespace-nowrap text-black">-</td>
                              </tr>                               
                          </tbody>
                      </table> 
                  </div>
              </div>
          </div>
      </div>
  </div>

    </div>

        
  );
}
 export default Detail4