import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import millify from 'millify';
import { useState } from 'react';
import { SpinnerDotted } from 'spinners-react';
import useTable from '../../hooks/useTable';
import TableFooter from '../TableFooter/TableFooter';
import './datatable.scss'



const header = ["#", "Name", "Price", "Change (24h)", "Price in BTC", "Market Cap", "Volume"]

const DataTable = ({ data, scroll }) => {
    const [page, setPage] = useState(1);
    const [rowsPerPage] = useState(20);
    const { slice, range } = useTable(data.coins, page, rowsPerPage);

    return (
        slice ? (
            <div className="datatable" ref={scroll}>
                <table>
                    <thead>
                        <tr>
                            {header.map((col, index) => (
                                <th key={index}>{col}</th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {slice.map((row, index) => (
                            <tr key={index}>
                                <td>{row.rank}</td>
                                <td>
                                    <div className="coinName">
                                        <img src={row.icon} alt="" />
                                        <p>{row.name}</p>
                                        <span>{" " + row.symbol}</span>
                                    </div>

                                </td>
                                <td>${row.price.toFixed(2)}</td>
                                <td>
                                    <div className={`priceChange ${row.priceChange1d < 0 ? "decline" : "rise"}`}>
                                        {row.priceChange1d < 0 ? <ArrowDropUp className="icon" /> : <ArrowDropDown className="icon" />}
                                        <div className="status">
                                            {row.priceChange1d + "%"}
                                        </div>
                                    </div>

                                </td>
                                <td>{row.priceBtc.toFixed(4)}</td>
                                <td>{row.marketCap === null ? "" : millify(row.marketCap)}</td>
                                <td>{row.volume === null ? "" : millify(row.volume)}</td>


                            </tr>
                        ))}
                    </tbody>
                </table>
                <TableFooter range={range} slice={slice} setPage={setPage} page={page} scroll={scroll} />
            </div>
        ) : (
            <SpinnerDotted color='#0057FF' />
        )

    )
}

export default DataTable;