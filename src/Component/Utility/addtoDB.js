import { toast } from "react-toastify";

const getDataStoreReadList = () =>{
    const getStoreListstr = localStorage.getItem('read-list')
    if(getStoreListstr){
        const storeList = JSON.parse(getStoreListstr)
        return storeList;
    }
    return [];

}

const addToStoreReadList = (id)=>{
    const storeList = getDataStoreReadList();
    if(storeList.includes(id)){
        console.log(id,"Already Exist");
    }
    else{
        storeList.push(id);
        const storedListStr = JSON.stringify(storeList)
        localStorage.setItem('read-list',storedListStr)
        toast("book is Added")
    }
}

//WishList
const getDataStoreWishlist = () =>{
    const storeWishlistData = localStorage.getItem('wishlist-item');
    if(storeWishlistData){
        return JSON.parse(storeWishlistData)
    }
    return [];
}

const addToWishlist = (id) =>{
    const getWishlistData = getDataStoreWishlist();
    if(getWishlistData.includes(id)){
        console.log(id,"Already Exist");
    }
    else{
        getWishlistData.push(id);
        const wishListDataStr = JSON.stringify(getWishlistData);
        localStorage.setItem('wishlist-item',wishListDataStr)
    }
}
export {addToStoreReadList,addToWishlist,getDataStoreReadList,getDataStoreWishlist}