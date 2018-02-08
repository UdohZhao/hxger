//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    movies: [
      { url: '../../dist/images/1.jpg'},
      { url: '../../dist/images/2.jpg' },
      { url: '../../dist/images/3.jpg' },
      { url: '../../dist/images/4.jpg' },
    ],
    //附近配送数量
    merchantNum:2,
    modelShow:false,
    indicatorDots: false,
    autoplay: false,
    inputShowed: false,
    inputVal: "",
    num:1,
    sData:[
      {
        path:'../../dist/images/s1.jpg',
        name:'本地青菜',
        spec:'1斤3根左右',
        sprice:'4.3',
        zprice:'3'
      },
      {
        path:'../../dist/images/s2.jpg',
        name:'本地青菜',
        spec:'1斤3根左右',
        sprice:'4.3',
        zprice:'3'
      },
      {
        path:'../../dist/images/s3.jpg',
        name:'本地青菜',
        spec:'1斤3根左右',
        sprice:'4.3',
        zprice:'3'
      },
      {
        path:'../../dist/images/s4.jpg',
        name:'本地青菜',
        spec:'1斤3根左右',
        sprice:'4.3',
        zprice:'3'
      },
      {
        path:'../../dist/images/s5.jpg',
        name:'本地青菜',
        spec:'1斤3根左右',
        sprice:'4.3',
        zprice:'3'
      },
       {
        path:'../../dist/images/s5.jpg',
        name:'本地青菜',
        spec:'1斤3根左右',
        sprice:'4.3',
        zprice:'3'
      },
    ],
    rData:[
      {
        path:'../../dist/images/r1.jpg',
        name:'本地青菜',
        spec:'1斤3根左右',
        sprice:'4.3',
        zprice:'3'
      },
      {
        path:'../../dist/images/r2.jpg',
        name:'本地青菜',
        spec:'1斤3根左右',
        sprice:'4.3',
        zprice:'3'
      },
      {
        path:'../../dist/images/r3.jpg',
        name:'本地青菜',
        spec:'1斤3根左右',
        sprice:'4.3',
        zprice:'3'
      },
      {
        path:'../../dist/images/r4.jpg',
        name:'本地青菜',
        spec:'1斤3根左右',
        sprice:'4.3',
        zprice:'3'
      },
      {
        path:'../../dist/images/r5.jpg',
        name:'本地青菜',
        spec:'1斤3根左右',
        sprice:'4.3',
        zprice:'3'
      },
      {
        path:'../../dist/images/r5.jpg',
        name:'本地青菜',
        spec:'1斤3根左右',
        sprice:'4.3',
        zprice:'3'
      },
    ],
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 搜索框
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  //跳转到商品详情页面
  gotoDetail:function(e){
    wx.navigateTo({
      url: '/pages/goodsdetail/goodsdetail',
    })
  },
  goToGroupList: function (e) {
    wx.navigateTo({
      url: '/pages/groupList/groupList',
    })
  },
  goToDailyDeals:function(e){
    wx.navigateTo({
      url: '/pages/dailyDeals/dailyDeals',
    })
  },
 //跳转到优惠
  goToyouhui:function(e){
    wx.navigateTo({
      url: '/pages/youhui/youhui',
    })
  },
//跳转到分享有礼
  goToshare:function(e){
    wx.navigateTo({
      url: '/pages/share/share',
    })
  },
//跳转到菜谱
  goTocookBook:function(e){
    wx.navigateTo({
      url: '/pages/cookbook/cookbook',
    })
  },
//跳转到分类
  goTogroup:function(e){
    wx.reLaunch({
      url: '/pages/group/group',
    })
  },
  //弹出加入购物车
  /**
  * 显示遮罩层
  */
  showModel: function () {
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.opacity(0).step()
    animation.opacity(1).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.opacity(1).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  /**
  * 隐藏遮罩层
  */
  hideModal: function () {
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.opacity(1).step()
    animation.opacity(0).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.opacity(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false,
        showModalHeaderStatus:false
      })
    }.bind(this), 200)
  },
  /**
   * 点击减号
   */
  bindMinus: function () {
    var num = this.data.num;
    // 如果大于1时，才可以减
    if (num > 1) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },

  /**
   * 点击加号
   */
  bindPlus: function () {
    var num = this.data.num;
    // 不作过多考虑自增1
    num++;
    // 只有大于一件的时候，才能normal状态，否则disable状态
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },

  /**
   * 输入框事件
   */
  bindManual: function (e) {
    var num = e.detail.value;
    // 将数值与状态写回
    this.setData({
      num: num
    });
  },
  //显示配送店铺选择框
  ShowAddModel:function(e){
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.opacity(0).step()
    animation.opacity(1).step()
    if(this.data.showModalHeaderStatus == false){
      this.setData({
            animationData: animation.export(),
            showModalHeaderStatus:true
      })
    }else{
      this.setData({
            animationData: animation.export(),
            showModalHeaderStatus:false
      })
    }
    setTimeout(function () {
      animation.opacity(1).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  
})
