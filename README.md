# weixin-mixin

小程序使用mixin的扩展，一种简单copy合并，一种类似vue的mixins和定义methods里方法，可以自定义钩子

## 简单mixin使用
```
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
```


## pageMixin
```
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
```

