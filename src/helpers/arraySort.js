const arraySort = (arr, type) => {
    type === 'price-asc' ? arr.sort((a, b) => a.price - b.price) :
        type === 'price-desc' ? arr.sort((a, b) => b.price - a.price) :
            type === 'rating-asc' ? arr.sort((a, b) => a.rating - b.rating) :
                type === 'rating-desc' ? arr.sort((a, b) => b.rating - a.rating) : arr.sort((a, b) => a.id - b.id)
    return arr;
}

export default arraySort 