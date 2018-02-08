Page({

  /**
   * 页面的初始数据
   */
  data: {
    cookbook:[
      {
        id:1,
        cname:'莲藕排骨汤',
        path:'../../dist/images/s1.jpg',
        star:10,
        eye:222,
        desc:'本汤可清热消痰、补血养颜，凡贫血、心慌失眠者皆可食用。另外还具有补肾养血、滋阴润燥、强健胃粘膜、预防贫血、改善肠胃、止血的功效。'
      },
      {
        id:2,
        cname:'冬笋炒肉',
        path:'../../dist/images/s2.jpg',
        star:57,
        eye:54,
        desc:'冬笋炒肉是一道美味的菜肴。特别适合秋冬季节滋补，去燥。笋一般都是吃春笋或者冬笋，冬笋更难采集，一般都难以发现，这种有着竹笋的清香和肉片的滑嫩，味道鲜香可口，做法简单，这就是冬笋炒肉，冬笋炒肉是大众比较喜欢的一道家常菜，以冬笋和猪肉作为主要食材制作而成。'
      },{
        id:3,
        cname:'红烧五花肉',
        path:'../../dist/images/s3.jpg',
        star:230,
        eye:464,
        desc:'马上把焯好的五花肉放入，迅速翻炒使肉的表面都裹上糖色；然后，倒入料酒、酱油、葱段和姜片翻炒均匀，加入适量的水没过五花肉，大火烧开后，转成小火，盖上盖子炖1个小时左右。'
      },{
        id:4,
        cname:'清蒸排骨',
        path:'../../dist/images/s4.jpg',
        star:60,
        eye:2452,
        desc:'此汤用土猪肉和当地荷塘挖出来的莲藕搭配炖出，鲜香怡人'
      },{
        id:5,
        cname:'红烧猪蹄',
        path:'../../dist/images/s5.jpg',
        star:260,
        eye:2152,
        desc:'热气腾腾来一碗，可以泡米饭，也可以直接啃藕吃肉喝汤，给人强烈的满足感，风味悠长。'
      },
    ],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
  gotocookbookDetail:function(e){
    wx.navigateTo({
      url:'/pages/cookbookDetail/cookbookDetail'
    })
  }
})