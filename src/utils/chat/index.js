
const today = new Date();

export const chatTime = () => {
    const hours = today.getHours();
    const minutes = today.getMinutes();
    return `${hours}:${minutes}`;
}

export const chatDate = () => {
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    return `${year}-${month+1}-${date}`;
}