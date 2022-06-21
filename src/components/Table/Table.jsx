import './table.scss'
import { ArrowDropUp, ArrowDropDown } from '@mui/icons-material'

const Table = ({ header, data }) => {
    return (
        <div className="table">
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
                            <td style={{ width: "10%" }}>{row.rank}</td>
                            <td style={{ width: "40%%" }} >
                                <div className="coinName">
                                    <img src={row.icon} alt="" />
                                    <p>{row.name}</p>
                                    <span>{" " + row.symbol}</span>
                                </div>

                            </td>
                            <td style={{ width: "30%" }}>{row.price}</td>
                            <td style={{ width: "20%" }} >
                                <div className={`priceChange ${row.priceChange1d < 0 ? "decline" : "rise"}`}>
                                    {row.priceChange1d < 0 ? <ArrowDropUp className="icon" /> : <ArrowDropDown className="icon" />}
                                    <div className="status">
                                        {row.priceChange1d + "%"}
                                    </div>
                                </div>

                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
}

export default Table;