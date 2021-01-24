
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length === 0) return [];
    const newArr = matrix.map((item, i) => {
        if ((i +1) % 2 === 0) {
            return item.reverse()
        } else return item
    });
    return newArr.flat();
}
