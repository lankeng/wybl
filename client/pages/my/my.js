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
    
  },
  realname:function(){//实名认证
    wx.navigateTo({
      url: "../autonym/autonym",
    })
  },
  feedbackBtn: function (options){//意见反馈
    wx.navigateTo({
      url: 'feedback/feedback',
    })
  },
  personalbtn:function(){//修改资料
    wx.navigateTo({
      url: "../my/editinfo/editinfo",
    })
  },
  seTup:function(){ //修改资料
    wx.navigateTo({
      url: "../my/editinfo/editinfo",
    })
  },
  personalAccount:function(){ //个人账户
    wx.navigateTo({
      url: "../my/account/account",
    })
  },
  sourceHistory:function(){//报料历史
      wx.navigateTo({
        url: "../my/history/history",
      })
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
    
  }
})