// pages/transalt/transalt.js
const jiami = require("../../utils/libs/md5.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    input:"你好",
    output:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(jiami)
    
    this.translate()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  translate(){
    //获取接口
    var value = 'https://fanyi-api.baidu.com/api/trans/vip/translate?';
    //获取当前时间
    var date = Date.now();
    //此处拼接接口数据,好转换成jsonp数据格式,实现跨域访问
    var str = '20170605000052254' + '我' + date + '63r1c42X7_buc4OrXm1g';
    //使用加密算法计算数据
    var md5 = jiami.MD5(str);
    //然后得到的数据
    var data = 'q=' + '我' + '&from=auto&to=' + 'en' + '&appid=20170605000052254' + '&salt=' + date + '&sign=' + md5 + "&callback=callbackName";
    //引入src路径
    var src = value + data;
    //调用创建script标签函数
    console.log(src)
    // createScript(src);
    wx.request({
      url: src,
      success(res){
        console.log(res)
      }
    })
  }
})