import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "../../components/featuredInfo/featuredInfo.css";

export default function FeaturedInfo({doanhThuNam,doanhThuThang}) {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Doanh thu</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{doanhThuNam.sumMoneyOfYear}</span>
          <span className="featuredMoneyRate">
            11.4 %<ArrowUpward  className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">So với năm trước</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Doanh thu tháng</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{doanhThuThang.now.money}</span>
          <span className="featuredMoneyRate">
            {doanhThuThang.risingMoney} %
            {doanhThuThang.risingMoney>=0&&(<ArrowUpward className="featuredIcon"/>)}
            {doanhThuThang.risingMoney<0&&(<ArrowDownward className="featuredIcon negative"/>)}
          </span>
        </div>
        <span className="featuredSub">So với tháng trước</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Số lượng đã bán trong tháng</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{doanhThuThang.now.quantity} sp</span>
          <span className="featuredMoneyRate">
            {doanhThuThang.risingQuantity} %
            {doanhThuThang.risingQuantity>=0&&(<ArrowUpward className="featuredIcon"/>)}
            {doanhThuThang.risingQuantity<0&&(<ArrowDownward className="featuredIcon negative"/>)}
          </span>
        </div>
        <span className="featuredSub">So với tháng trước</span>
      </div>
    </div>
  );
}
