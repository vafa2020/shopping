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
        data = ProductDataList?.filter(x => x.categoryId === categoryItem.id)
    }
    return data
}

export {
    getProducts,
    Category,
}