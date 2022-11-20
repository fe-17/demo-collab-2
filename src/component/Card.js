import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigation = useNavigate();

  const handleClick = (id) => {
    navigation(`/detail/${id}`);
  };
  return (
    <>
      <div class="mb-12 p-4 md:w-1/3">
        <div class="flex justify-center">
          <div class="rounded-md shadow-md bg-primary max-w-sm sm:rounded-md max-w-xs ">
            <img class="px-2 py-2 lg:items-center rounded-3xl" width="400" src={props.imgUrl} alt="Waktu" />
            <div class="p-6 text-center">
              <h5 class="text-white text-xl mb-1 font-bold">{props.nama}</h5>
              <p class="text-white text-sm font-normal mb-4">{props.lokasi}</p>
              <button class="bg-white  hover:bg-secondary hover:text-white text-primary font-bold py-2 px-4 rounded-full" onClick={() => handleClick(props.id)}>
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
