import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import '../../components/featuredInfo/featuredInfo.css';

export default function FeaturedInfo({ doanhThuNam, doanhThuThang }) {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Doanh thu năm</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
              doanhThuNam.sumMoneyOfYear
            )}
          </span>
        </div>
        <span className="featuredMoneyRate">
            {doanhThuNam.sumQuantityOfYear}%
            <ArrowUpward className="featuredIcon" />
          </span>
        <span className="featuredSub">So với năm trước</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Doanh thu tháng</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
              doanhThuThang.now.money
            )}
          </span>
        </div>
        <span className="featuredMoneyRate">
            {doanhThuThang.risingMoney} %
            {doanhThuThang.risingMoney >= 0 && <ArrowUpward className="featuredIcon" />}
            {doanhThuThang.risingMoney < 0 && <ArrowDownward className="featuredIcon negative" />}
          </span>
        <span className="featuredSub">So với tháng trước</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Số lượng đã bán trong tháng</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{doanhThuThang.now.quantity} sản phẩm</span>
        </div>
        <span className="featuredMoneyRate">
            {doanhThuThang.risingQuantity} %
            {doanhThuThang.risingQuantity >= 0 && <ArrowUpward className="featuredIcon" />}
            {doanhThuThang.risingQuantity < 0 && (
              <ArrowDownward className="featuredIcon negative" />
            )}
          </span>
        <span className="featuredSub">So với tháng trước</span>
      </div>
    </div>
  );
}
