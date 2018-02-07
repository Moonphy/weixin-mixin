// pages/mixin/mixin.js

var newUserMx = require('../../mixins/newUserMx')
import pageMixin from '../../utils/mixin'

Page(pageMixin({

	mixins: [newUserMx],
  /**
   * 页面的初始数据
   */
  data: {
		item: {
			index: 2,
			page: 'mixin',
			test: 'mixin-test'
		}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		console.log(this.data)
		console.log(typeof this.hideTemp)
  }
}))