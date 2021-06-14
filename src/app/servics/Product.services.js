import {ProductDataList} from "../data/Product.data";
import {CategoryData} from "../data/Category.data";


const getProducts = (id) => {
    const a = parseInt(id, 10)
    return ProductDataList.find(x => x.id === a)
}

let data = ''
const Category = (category,ProductDataList) => {

    if (category === undefined) {
        data = ProductDataList
    } else {
        const categoryItem = CategoryData.find(x => x.latinTitle === category)
        data = ProductDataList.filter(x => x.categoryId === categoryItem.id)
    }
    return data
}

const getDatabase = () => {
    let list = [];
    let db = localStorage.getItem('Cart')  // [{"id":17,"qty":1},{"id":13,"qty":1}]
    list = JSON.parse(db)
    if (list !== null) {
        return list = ProductDataList.filter(p => list.map(x => x.id).indexOf(p.id) !== -1)
    } else {
        return list = []
    }


}

export {
    getProducts,
    Category,
    getDatabase
}