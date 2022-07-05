
export function toDate(unix) {
    let date = new Date(unix);
    return date.toDateString().split(' ').slice(1).join(' ')
}

export function toDigit(date) {
    let digit = new Date(date).getTime()
    return digit
}
