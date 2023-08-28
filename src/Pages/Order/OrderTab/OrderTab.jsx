import Pagination from '../../../Components/Pagination/Pagination';
import FeaturedMenu from '../../Home/Home/FeaturedItem/FeaturedMenu';
import { useMemo, useState } from 'react';
import './pagination.css'
let PageSize = 3;
const OrderTab = ({menuType}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTabData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return menuType.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  
    return (
      <>
       <div className="grid grid-cols-3 gap-2 ">
              {currentTabData.map((menu) => (
                <FeaturedMenu
                  key={menu._id}
                  img={menu.image}
                  menu={menu}
                ></FeaturedMenu>
              ))}
            </div>
            <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={menuType.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
      </>
       
    );
};

export default OrderTab;