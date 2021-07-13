import React from 'react';
import PropTypes from 'prop-types';
import "../../pages/home/home.css";
import Chart from "../../components/chart/Chart";
import Chart2 from "../../components/chart/Chart2";
BieuDo.propTypes = {
    data: PropTypes.object,
};

function BieuDo({data = {}}) {
    
    const {listDTTheoThang, listTheoTheLoai} = data;
    console.log('listTheoTheLoai', listTheoTheLoai);
    return (
        <div className="home">
            <Chart data={listDTTheoThang} title="Doanh Thu Theo Tháng" grid dataKey="doanhThu"/>
            <Chart2 data={listTheoTheLoai} title="Số Lượng bán được" grid />
        </div>
    );
}

export default BieuDo;