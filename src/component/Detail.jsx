import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from '../Navbar'

const Detail = () => {
  const { id } = useParams();

  const [details, setDetails] = useState([]);

  const getDetails = async () => {
    try {
      let response = await axios.get("https://6377cfde5c47776512277c1f.mockapi.io/api/v3/detailrs");
      console.log();
      setDetails(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

return (
    <>
        <Navbar />
        <div className="pt-6 pb-16 bg-teal-400 mt-10 w-11/12 ml-16 mr-14">
            <div className="container ml-100 mt-10">
                <div className=" px-4">
                    <div className="max-w-xl mx-auto text-center mb-19 mt-10">
                    {details.filter((item) => item.id === id).map((item) => {
                        return (
                            <div key={item.id} className="block p-10 bg-white rounded-lg w-150 h-300">
                                <h1 className="mb-10 text-5xl font-bold tracking-tight text-black ">{item.profil}</h1>
                                <p className="font-normal text-gray-700 dark:text-gray-400">{item.detail}</p>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default Detail;