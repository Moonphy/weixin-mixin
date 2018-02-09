// pages/showComponent/showComponent.js

var newUser = require('../../behaviors/newUser');

Page({
  data: {
		showUserCom: true,
		index: '1',
		page: 'show',
		test: 'hehe',
		slot: '无聊的slot'
  },

  onLoad: function (options) {
		// console.log(this)
  },
	comClick(e) {
  	console.log('component click', e.detail)
	}
})