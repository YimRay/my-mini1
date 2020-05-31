/**
 * 1.页面加载的时候
 *  1从缓存中获取购物车数据，渲染到页面中
 */
import {getSetting,chooseAddress,openSetting,showModal,showToast} from "../../utils/asyncWx.js"

Page({

  data:{
    address:{},
    cart:[],
    allChecked:false,
    totalPrice:0,
    totalNum:0
  },
  onShow(){
    //1.获取缓存中的收货地址信息
    const address = wx.getStorageSync("address");
    //1获取缓存中 购物车数据
    let cart = wx.getStorageSync("cart")||[];
    //  过滤后的购物车数组
    cart = cart.filter(v=>v.checked)
    this.setData({
      address
    })

     //1总价格总数量
     let totalPrice=0
     let totalNum=0
     cart.forEach(v=>{
         totalPrice+=v.num*v.goods_price;
         totalNum+=v.num;
     })

     this.setData({
       cart,
       totalPrice,totalNum,
       address
     })

  }
,
  
  
  
  
 
  

})