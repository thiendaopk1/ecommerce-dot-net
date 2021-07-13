
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import BieuDo from './BieuDo';
import "../../pages/home/home.css";

import thongKeApi from '../../../api/thongKeApi'
import { useEffect } from "react";
import { useState } from "react";
function Home() {
  const [data, setData] = useState();
  console.log('data', data);
  useEffect(() => {
    (async () => {
      const res = await thongKeApi.getAll();
      setData(res);
    })();
  },[])
  // const listDTTheoThang = data.listDTTheoThang;
  // const listTheoTheLoai = data.listTheoTheLoai;
  
  return (
    <div className="home">
      <FeaturedInfo />
      { data && <BieuDo data={data}/> }
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
export default Home;
