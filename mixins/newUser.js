module.exports = {
  data: {
    showUserTemp: true,
		item: {
    	index: 0,
			page: 'test',
		}
  },
	hideTemp () {
    this.setData({
			showUserTemp: false
    })
  },
	showTemp () {
		this.setData({
			showUserTemp: true
		})
	},
	sayHello () {
  	console.log('hello')
	}
}