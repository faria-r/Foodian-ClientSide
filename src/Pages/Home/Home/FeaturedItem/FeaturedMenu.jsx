import Button from "../../../../Components/Button/Button";

const FeaturedMenu = ({ menu,img }) => {
  const { name, about } = menu;
  return (
    <div className=" my-6">
      <div className="w-[85%] mx-auto h-96  shadow-xl">
        <div className="h-1/2 ">
          <img src={img} alt="" className="h-48 w-full" />
        </div>
        <div className="card-body items-center text-center h-1/2">
          <h2 className="card-title font-bold">{name}</h2>
          <p>{about}</p>
          <div className="card-actions">
           <Button value={'Add To Cart'}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMenu;
