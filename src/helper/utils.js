/**
 * Converts a string date in the format "DD MONTH" (e.g. "12 СЕНТЯБРЯ") to a JavaScript Date object.
 *
 * @param {string} dateStr - The string date in the format "DD MONTH".
 * @returns {Date} A JavaScript Date object representing the converted date.
 * @throws {Error} If an invalid month is encountered in the input date string.
 *
 * @example
 * const russianDateStr = "12 СЕНТЯБРЯ";
 * const convertedDate = convertRussianDate(russianDateStr);
 * console.log(convertedDate); // Output: 2023-09-11T19:00:00.000Z
 */
export function convertRussianDate(dateStr) {
    const monthsRussian = {
        ЯНВАРЯ: 0,
        ФЕВРАЛЯ: 1,
        МАРТА: 2,
        АПРЕЛЯ: 3,
        МАЯ: 4,
        ИЮНЯ: 5,
        ИЮЛЯ: 6,
        АВГУСТА: 7,
        СЕНТЯБРЯ: 8,
        ОКТЯБРЯ: 9,
        НОЯБРЯ: 10,
        ДЕКАБРЯ: 11,
    };

    const [day, monthRussian] = dateStr.split(" ");
    const monthIndex = monthsRussian[monthRussian.toUpperCase()];

    if (monthIndex === undefined) {
        throw new Error("Invalid month in the input date string.");
    }

    const currentDate = new Date();
    const convertedDate = new Date(
        currentDate.getFullYear(),
        monthIndex,
        parseInt(day, 10)
    );

    return convertedDate;
}

/**
 * Formats a given date string to the Russian date format "DD MONTH".
 *
 * @param {string} dateStr - The input date string in a valid date format parsable by JavaScript's Date constructor.
 * @returns {string} The formatted date string in the format "DD MONTH", where MONTH is the Russian month name.
 * @throws {Error} If the input date string is invalid or cannot be parsed.
 *
 * @example
 * const formattedDate = formatDateRussian("2023-09-12T00:00:00Z");
 * console.log(formattedDate); // Output: "12 СЕНТЯБРЯ"
 *
 * @example
 * const formattedDate = formatDateRussian("2023-13-01T00:00:00Z");
 * console.log(formattedDate); // Will throw an error due to invalid month.
 *
 */
export const formatDateRussian = (dateStr) => {
    const months = [
        "ЯНВАРЯ",
        "ФЕВРАЛЯ",
        "МАРТА",
        "АПРЕЛЯ",
        "МАЯ",
        "ИЮНЯ",
        "ИЮЛЯ",
        "АВГУСТА",
        "СЕНТЯБРЯ",
        "ОКТЯБРЯ",
        "НОЯБРЯ",
        "ДЕКАБРЯ",
    ];

    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.getMonth();

    if (isNaN(day) || month === undefined || months[month] === undefined) {
        throw new Error(
            "Invalid date format or month in the input date string."
        );
    }

    return `${day} ${months[month]}`;
};

/**
 * Filters an array of event objects to remove duplicates based on date and city.
 *
 * @param {Array} data - An array of event objects, each containing a `date` and `city` property.
 * @returns {Array} A new array containing unique event objects based on date and city.
 *
 * @example
 * const eventData = [
 *   { date: new Date("2023-09-12"), city: "Moscow", title: "Event 1" },
 *   { date: new Date("2023-09-12"), city: "Moscow", title: "Event 2" },
 *   { date: new Date("2023-09-13"), city: "St. Petersburg", title: "Event 3" }
 * ];
 * const filteredEvents = filterEvents(eventData);
 * console.log(filteredEvents);
 * // Output: [
 * //   { date: Sun Sep 12 2023 00:00:00 GMT+0000 (Coordinated Universal Time), city: "Moscow", title: "Event 1" },
 * //   { date: Sun Sep 13 2023 00:00:00 GMT+0000 (Coordinated Universal Time), city: "St. Petersburg", title: "Event 3" }
 * // ]
 */
export const filterEvents = (data) => {
    return data.reduce((acc, curr) => {
        let isDuplicate = false;

        for (let el of acc) {
            if (
                el.date.toString() === curr.date.toString() &&
                el.city === curr.city
            ) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            acc.push(curr);
        }

        return acc;
    }, []);
};
