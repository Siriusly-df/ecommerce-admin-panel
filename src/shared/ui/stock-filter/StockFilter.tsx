import type { StockFilter } from "../../../entities/product/model/stockFilter";
import "./StockFilter.scss"

type StockFilterProps = {
    stockFilter: StockFilter;
    setStockFilter: (stockFilter: StockFilter) => void;
};

export function StockFilterSelect({stockFilter, setStockFilter}: StockFilterProps) {
    return(
       <select 
        className="stock-filter"
        value={stockFilter}
        onChange={(event) => {
            setStockFilter(event.target.value as StockFilter)
        }}
       >
        <option value="all">All</option>
        <option value="in-stock">In Stock</option>
        <option value="out-of-stock">Out of Stock</option>
       </select>
    )
}