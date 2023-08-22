import Button from "../../../../Components/Button/Button";

const FeaturedMenu = ({ menu,img }) => {
  const { name, about, recipe, price } = menu;
  return (
    <div className=" my-6">
      <div className="w-[85%] mx-auto h-[500px]  shadow-xl">
        <div className=" relative">
          <img src={img} alt="" className="h-48 w-full" />
          {
            price && <p className="absolute right-4 top-4 bg-black text-white px-1 font-bold">${price}</p>
          }
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold">{name}</h2>
         
          {
            recipe ? (<p>{recipe}</p>) :  (<p>{about}</p> )
          }
          <div className="card-actions">
           <Button value={'Add To Cart'}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMenu;
