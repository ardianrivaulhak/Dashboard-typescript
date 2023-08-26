import moment from "moment";

// export function splitterString(text: string): number {
//     const output: string[] = [];
//     const json = text.split(" ");
//     json.forEach(function (item) {
//         const regex = /'/g;
//         const out = item.replace(regex, "");
//         const splitArray = out.split(/(\d+)/);
//         const filteredArray = splitArray.filter(Boolean);
//         Array.prototype.push.apply(output, filteredArray);
//     });
//     const value = parseFloat(output[1]);
//     return value;
// }

export function isAfterThisMonth(month: string): boolean {
    const dateNow = moment();
    const _isAfter = moment(month, "YYYYMMDD").isSameOrAfter(dateNow, "month");
    if (_isAfter) return true;
    return false;
}

export function isDateFormat(date: string): boolean {
    const DATE_FORMAT = "YYYY-MM-DD"; // STATIC 
    const checkDate = moment(date, DATE_FORMAT).format(DATE_FORMAT);
    if(checkDate == date) {
        return true;
    }
    return false;
}
