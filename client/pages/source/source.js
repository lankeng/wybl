// pages/source/source.js
var cityData = require('../../utils/city_data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    icon_seachbtn:"../../assets/icons/search.png",
    icon_newspaper:"../../assets/icons/icon_newspaper.png",
    icon_city: "../../assets/icons/icon_city.png",
    content:[],
    lineMouth:[],//线口数据
    draft:[],//发稿数数据
    qyopen:false,//省市打开
    qyshow:false,//省市内容区
    lineopen:false,//线口打开
    lineshow: false, //线口内容区
    gsopen: false,//发稿数打开
    gsshow: false, //发稿数内容区
    isfull:false,//遮罩层
    cityleft: cityData.getCity(),//获取省市数据
    citycenter: {},//城市
    cityright: {},//省份
    select1: '',//获取省份城市名字
    select2: '省市',//设置默认值
    shownavindex: '',//省份索引
    catalogSelect: 0,//设置发稿数索引值
    viewDataSet: '发稿数',//设置默认值
    lineDataSet: "线口",//设置默认值
    lineSelect: 0//设置线口索引值
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      lineMouth: [
        {
          "lineMouths":"科技",
          "select":0
        },
        {
          "lineMouths": "时政",
          "select": 1
        },
        {
          "lineMouths": "财经",
          "select": 2
        },
        {
          "lineMouths": "股票",
          "select": 3
        },
        {
          "lineMouths": "民生",
          "select": 4
        },
        {
          "lineMouths": "财政",
          "select": 5
        },
        {
          "lineMouths": "技术",
          "select": 6
        },
        ],
      draft: [{
        "gaoshu": "发稿数",
        "select": 0
      },
      {
        "gaoshu": "字数",
        "select": 1
      },
      {
        "gaoshu": "影响力",
        "select": 2
      },
      ]
    })
  },

  searchBtn:function(){//搜索页面跳转
    wx.navigateTo({
      url: "../search/search",
    })
  },
  sourcebtn:function(){//新建报料页
    wx.navigateTo({
      url: "../source/newsource/newsource",
    })
  },


  listqy:function(e){//省市
    console.log(e);
    if(this.data.qyopen){
     this.setData({
       qyopen: false,
       lineopen: false,
       gsopen: false,
       lineshow: false,
       gsshow: true,
       qyshow: false,
       isfull: false,
       shownavindex:0//索引
     })
    }else{
      this.setData({
        qyopen: true,
        lineopen: false,
        gsopen: false,
        lineshow: true,
        gsshow: true,
        qyshow: false,
        isfull: true,
        shownavindex: e.currentTarget.dataset.nav//索引
      })
    }
  },
  listline:function(e){//线口
    // console.log(e.currentTarget.dataset);
    if (this.data.lineopen){
      this.setData({
        lineopen: false,
        gsopen: false,
        qyopen: false,
        lineshow: false,
        gsshow: true,
        qyshow: true,
        isfull: false,
        shownavindex: 0
      })
    }else{
      this.setData({
        content: this.data.lineMouth,
        lineopen: true,
        gsopen: false,
        qyopen: false,
        lineshow: false,
        gsshow: true,
        qyshow: true,
        isfull: true,
        shownavindex: e.currentTarget.dataset.nav
      })
    }
  },
  listnumber:function(e){//发稿数
    if (this.data.gsopen){
      this.setData({
        lineopen: false,
        gsopen: false,
        qyopen: false,
        lineshow: true,
        gsshow: false,
        qyshow: true,
        isfull: false,
        shownavindex: 0
      })
    }else{
      this.setData({
        content: this.data.draft,
        lineopen: false,
        gsopen: true,
        qyopen: false,
        lineshow: true,
        gsshow: false,
        qyshow: true,
        isfull: true,
        shownavindex: e.currentTarget.dataset.nav
      })
    }
    console.log(e.target)
  },
  selectleft:function(e){//选择省份
    console.log(e.target.dataset);
    this.setData({
      cityright: {},
      citycenter: this.data.cityleft[e.currentTarget.dataset.city],
      select1: e.target.dataset.city,
      select2: '省市',
      
    });
  },
  selectcenter: function (e) {//选择城市
    console.log(e.target.dataset);
    this.setData({
      cityright: this.data.citycenter[e.currentTarget.dataset.city],
      select2: e.target.dataset.city,
      qyopen:false,
      isfull: false
     
    });
  },
 
  hidebg: function (e) { //遮罩层
    this.setData({
      qyopen: false,
      lineopen: false,
      gsopen: false,
      lineshow: true,
      gsshow: true,
      qyshow: true,
      isfull: false,
      shownavindex: 0
    })
  },
  
  chooseCatalog:function(e){ //发稿数列表
    // var viewId = e.target.id;
    // var viewDataSet = e.target.dataset;
    var viewDataSet1 = e.target.dataset.text;
    // var viewText = viewDataSet.text;
    // console.log(e.currentTarget.dataset);
    // console.log(viewId); //输出点击的view的id，第二种情况就不重复写了
    // console.log(viewText); //输出该文本
    console.log(viewDataSet1); //输出该文本
    console.log(e.currentTarget.dataset.select);
    var that = this;
    that.setData({//把选中值放入判断值
      catalogSelect: e.currentTarget.dataset.select,
      gsopen: false,
      isfull: false,
      viewDataSet:e.target.dataset.text,
      // gaoshu: '发稿数',
    })
  },
  lineMouthBtn:function(e){//线口列表
    var that = this;
    console.log(e.currentTarget.dataset.select);
    that.setData({
      lineSelect: e.currentTarget.dataset.select,
      lineopen: false,//线口
      isfull: false,
      lineDataSet: e.target.dataset.text,
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