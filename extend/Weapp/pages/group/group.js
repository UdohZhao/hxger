Page({

  /**
   * 页面的初始数据
   */
  data: {
    navLeftItems: [],  
    navRightItems: [],  
    curNav: 1,  
    curIndex: 0,
    inputShowed: false,
    inputVal: "",
    navLeftItems:[
      {
        id:1,
        title:'禽鱼肉类',
      },
      {
        id:2,
        title:'瓜果',
      },
      {
        id:3,
        title:'蔬菜',
      },
      {
        id:4,
        title:'海鲜',
      },
      {
        id:5,
        title:'鱼类',
      },
    ],
    navRightItems:[
        {
            id:0,
            name:'全部'
        },
        {
            id:1,
            name:'鱼类'
        },{
            id:2,
            name:'虾类'
        },{
            id:3,
            name:'牛肉'
        },{
            id:4,
            name:'羊肉'
        },{
            id:5,
            name:'猪肉'
        },
    ],
    sort:[
        {
            id:0,
            name:'综合排序'
        },
        {
            id:1,
            name:'销量排序'
        },
        {
            id:2,
            name:'价格排序'
        },
    ],
    dcData:[
        {
            id:1,
            name:'猪肉 4000g',
            price:20,
            path:'../../dist/images/r1.jpg'
        },
        {
            id:2,
            name:'牛肉 4000g',
            price:30,
            path:'../../dist/images/r2.jpg'
        },
        {
            id:3,
            name:'鲍鱼 40g/一个',
            price:200,
            path:'../../dist/images/r3.jpg'
        },
        {
            id:4,
            name:'海参 200元/个',
            price:150,
            path:'../../dist/images/r1.jpg'
        },
        {
            id:5,
            name:'海胆 555元/个',
            price:555,
            path:'../../dist/images/r1.jpg'
        },

    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 加载的使用进行网络访问，把需要的数据设置到data数据对象  
        // var that = this          
        // wx.request({  
        //     url: 'http://huanqiuxiaozhen.com/wemall/goodstype/typebrandList',  
        //     method: 'GET',  
        //     data: {},  
        //     header: {  
        //         'Accept': 'application/json'  
        //     },  
        //     success: function(res) {  
        //         console.log(res)  
        //         that.setData({  
        //             navLeftItems: res.data,  
        //             navRightItems: res.data  
        //         }) 
        //         console.log( res.data) 
        //     }  
        // }) 
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
   //事件处理函数  
  switchRightTab: function(e) {  
        // 获取item项的id，和数组的下标值  
        let id = e.target.dataset.id,  
            index = parseInt(e.target.dataset.index);  
        // 把点击到的某一项，设为当前index  
        this.setData({  
            curNav: id,  
            curIndex: index  
        })  
  },
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
    // 点击排序
    bindSort:function(e){
        // 获取item项的id，和数组的下标值  
        let id = e.target.dataset.id,  
            index = parseInt(e.target.dataset.index);  
        // 把点击到的某一项，设为当前index  
        this.setData({    
            sortActive: index  
        })  
      // 良好的用户体验
        wx.showLoading({
        title: '筛选中',
        })
        this.setData({
            sortActive:id
        })
        // 良好的用户体验
        setTimeout(function(){
          wx.hideLoading()
        },1000)
    },
    //点击选择
    bindtapDemo:function(e){
        // 获取item项的id，和数组的下标值  
        let id = e.target.dataset.id,  
            index = parseInt(e.target.dataset.index); 
            // 把点击到的某一项，设为当前index  
        this.setData({    
            demoActive: index  
        })  
    },
    //去商品详情
    gotoDetail:function(e){
        wx.navigateTo({
      url: '/pages/goodsdetail/goodsdetail',
    })
    }
    
})