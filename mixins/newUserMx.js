module.exports = {
	data: {
		showUserTemp: true,
		item: {
			index: 0,
			page: 'test'
		}
	},
	methods: {
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
}