module.exports = Behavior({
	// behaviors: [],
	data: {
		// showUserCom: true,
		// item: {
		// 	index: 333,
		// 	page: 'test'
		// }
	},
	methods: {
		hideTemp () {
			this.setData({
				showUserCom: false
			})
		},
		showTemp () {
			this.setData({
				showUserCom: true
			})
		},
		sayHello () {
			console.log('hello')
		}
	}
})