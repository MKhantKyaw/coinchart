import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import millify from 'millify';
import { useState } from 'react';
import useTable from '../../hooks/useTable';
import './datatable.scss'


const data = [
    {
        rank: 1,
        icon: "https://static.coinstats.app/coins/1650455588819.png",
        name: 'Bitcoin',
        symbol: 'BTC',
        price: '25000$',
        priceBtc: 1,
        marketcap: '11000000$',
        volume: '11000000$',
        priceChange1d: -0.56,
        priceChange1w: -1.07,
    },
    {
        rank: 2,
        icon: "https://static.coinstats.app/coins/1650455588819.png",
        name: 'Bitcoin',
        symbol: 'BTC',
        price: '25000$',
        priceBtc: 1,
        marketcap: '11000000$',
        volume: '11000000$',
        priceChange1d: -0.56,
        priceChange1w: -1.07,
    },
    {
        rank: 3,
        icon: "https://static.coinstats.app/coins/1650455588819.png",
        name: 'Bitcoin',
        symbol: 'BTC',
        price: '25000$',
        priceBtc: 1,
        marketcap: '11000000$',
        volume: '11000000$',
        priceChange1d: 0.56,
        priceChange1w: -1.07,
    },
    {
        rank: 3,
        icon: "https://static.coinstats.app/coins/1650455588819.png",
        name: 'Bitcoin',
        symbol: 'BTC',
        price: '25000$',
        priceBtc: 1,
        marketcap: '11000000$',
        volume: '11000000$',
        priceChange1d: 0.56,
        priceChange1w: -1.07,
    },
    {
        rank: 3,
        icon: "https://static.coinstats.app/coins/1650455588819.png",
        name: 'Bitcoin',
        symbol: 'BTC',
        price: '25000$',
        priceBtc: 1,
        marketcap: '11000000$',
        volume: '11000000$',
        priceChange1d: 0.56,
        priceChange1w: -1.07,
    },
    {
        rank: 3,
        icon: "https://static.coinstats.app/coins/1650455588819.png",
        name: 'Bitcoin',
        symbol: 'BTC',
        price: '25000$',
        priceBtc: 1,
        marketcap: '11000000$',
        volume: '11000000$',
        priceChange1d: 0.56,
        priceChange1w: -1.07,
    },
]

const header = ["#", "Name", "Price", "Change (24h)", "Price in BTC", "Market Cap", "Volume"]

const DataTable = () => {
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(3);
    const { slice, range } = useTable(data, page, rowsPerPage);

    return (
        <div className="datatable">
            <table>
                <thead>
                    <tr>
                        {header.map((col, index) => (
                            <th key={index}>{col}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.rank}</td>
                            <td>
                                <div className="coinName">
                                    <img src={row.icon} alt="" />
                                    <p>{row.name}</p>
                                    <span>{" " + row.symbol}</span>
                                </div>

                            </td>
                            <td>{row.price}</td>
                            <td>
                                <div className={`priceChange ${row.priceChange1d < 0 ? "decline" : "rise"}`}>
                                    {row.priceChange1d < 0 ? <ArrowDropUp className="icon" /> : <ArrowDropDown className="icon" />}
                                    <div className="status">
                                        {row.priceChange1d + "%"}
                                    </div>
                                </div>

                            </td>
                            <td>{row.priceBtc}</td>
                            <td>{millify(row.marketcap)}</td>
                            <td>{millify(row.volume)}</td>


                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;