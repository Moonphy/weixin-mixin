var newUser = require('../../../behaviors/newUser');

Component({
	behavior: [newUser],
	properties: {
		test: {
			type: String,
			value: 'default string'
		}
	},
	data: {
		showUserCom: true,
		index: '0',
		page: 'com'
	},
	attached () {
		console.log(this) // ËµºÃµÄbehaviorÄØ£¿
	},
	methods: {
		showEvent() {
			this.triggerEvent('comClick', { bubbles: true, composed: true })
		}
	}
})