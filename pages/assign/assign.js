// pages/assign/assign.js

var newUser = require('../../mixins/newUser')
var util = require('../../utils/util')
Page(util.ObjectCopy({

  /**
   * 页面的初始数据
   */
  data: {
		userInfo: {},
  	item: {
  		index: 1,
			page: 'assign',
			test: 'assign-test'
		}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  	console.log(this.data)
  	console.log(typeof this.hideTemp)
		this.sayHello()
  }
}, newUser))