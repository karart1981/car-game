export const canvas = document.querySelector("canvas");
export const ctx = canvas.getContext("2d");
canvas.width = innerWidth - 3.5;
canvas.height = innerHeight - 3.5;

export const grn = (limit, start = 0) => {
    return start + Math.floor(Math.random() * (limit - start));
}
export const grcolor = () => {
    return "#" + grn(0xffffff).toString(16);
}




