export const parseToArray = (obj) => {
    const data = [];
    Object.keys(obj).map(key => {
        data.push({
            id: key,
            data: obj[key]
        })
    });
    return data;
}