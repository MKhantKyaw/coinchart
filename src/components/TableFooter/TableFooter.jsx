import { useEffect } from 'react'
import './tablefooter.scss'

const TableFooter = ({ slice, range, setPage, page }) => {
    useEffect(() => {
        if (slice.length < 1 && page !== 1) {
            setPage(page - 1)
        }
    }, [slice, page, setPage])
    return (
        <div className="tfooter">
            {range.map((num, index) => (
                <button
                    key={index}
                    onClick={() => setPage(num)}
                    className={`pagination ${page === num ? "active" : "inactive"}`}
                >
                    {num}
                </button>
            ))}
        </div>
    );
}

export default TableFooter;