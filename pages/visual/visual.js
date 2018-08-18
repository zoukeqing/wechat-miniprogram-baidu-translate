// pages/visual/visual.js
const Base64 = require("../../utils/libs/base64.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.visual()
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
  // 百度视觉
  visual(){
    wx.request({
      url: 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=L4j0XISc8ny1aSq2cIPEr5xW&client_secret=RjD1POdvogwmPM9p1ApEoM3ddG6CrNEe',
      success(res){
        console.log(res)
        console.log(res.data.access_token)
        var accessToken = res.data.access_token
        // 选择图片
        wx.chooseImage({
          success: function(res3) {
            console.log(res3.tempFilePaths)
            // console.log(wx.arrayBufferToBase64(res3.tempFilePaths))
            // console.log(Base64.CusBASE64.encoder(res3.tempFilePaths))
            wx.request({
              url: 'https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic?access_token=' + accessToken,
              data: {
                微信小程序暂不能支持base64编码
                // image:res3.tempFilePaths
                // url:'http://dynamic-image.yesky.com/600x-/uploadImages/2014/223/36/4AHK6EJ33Y3L_11_500.png'
              },
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              method: 'POST',
              success(res2) {
                console.log(res2)
              }
            })
          },
        })

      }
    })
  }
})