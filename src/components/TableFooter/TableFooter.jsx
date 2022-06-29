import { useEffect } from 'react'
import './tablefooter.scss'

const TableFooter = ({ slice, range, setPage, page, scroll }) => {

    useEffect(() => {
        if (slice.length < 1 && page !== 1) {
            setPage(page - 1)
        }
    }, [slice, page, setPage])

    const executeScroll = (num) => {
        setPage(num)
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="tfooter">
            {range.map((num, index) => (
                <button
                    key={index}
                    onClick={() => executeScroll(num)}
                    className={`pagination ${page === num ? "active" : "inactive"}`}
                >
                    {num}
                </button>
            ))}
        </div>
    );
}

export default TableFooter;