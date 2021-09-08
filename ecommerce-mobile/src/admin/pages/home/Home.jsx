import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import BieuDo from './BieuDo';
import '../../pages/home/home.css';

import thongKeApi from '../../../api/thongKeApi';
import { useEffect } from 'react';
import { useState } from 'react';
function Home() {
  const [data, setData] = useState();
  const [doanhThuNam, setDoanhThuNam] = useState();
  const [doanhThuThang, setDoanhThuThang] = useState();
  console.log('data', data);
  useEffect(() => {
    (async () => {
      const res = await thongKeApi.getAll();
      setData(res);
      const rp = await thongKeApi.getDoanhThuNam();
      setDoanhThuNam(rp);
      const rs = await thongKeApi.getDoanhThuThang();
      setDoanhThuThang(rs);
    })();
  }, []);
  // const listDTTheoThang = data.listDTTheoThang;
  // const listTheoTheLoai = data.listTheoTheLoai;

  return (
    <div className="home">
      {doanhThuNam && doanhThuThang && (
        <FeaturedInfo doanhThuNam={doanhThuNam} doanhThuThang={doanhThuThang} />
      )}
      {data && <BieuDo data={data} />}
    </div>
  );
}
export default Home;
