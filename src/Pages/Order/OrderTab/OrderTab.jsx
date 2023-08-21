import FeaturedMenu from '../../Home/Home/FeaturedItem/FeaturedMenu';

const OrderTab = ({menuType}) => {
    return (
        <div className="grid grid-cols-3 gap-2 ">
              {menuType.map((menu) => (
                <FeaturedMenu
                  key={menu._id}
                  img={menu.image}
                  menu={menu}
                ></FeaturedMenu>
              ))}
            </div>
    );
};

export default OrderTab;