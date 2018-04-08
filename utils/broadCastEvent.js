/*
 * ¹ã²¥ÊÂ¼þ
 */
export default class BroadCastEvent {
	constructor() {
		this.BroadCastCache = {
			$uid: 0
		};
	}

	on(type, handler) {
		let cache = this.BroadCastCache[type] || (this.BroadCastCache[type] = {});

		handler.$uid = handler.$uid || this.BroadCastCache.$uid++;
		cache[handler.$uid] = handler;
	}

	emit(type, ...param) {
		let cache = this.BroadCastCache[type],
				key,
				tmp;

		if(!cache) return;

		for(key in cache) {
			tmp = cache[key];
			cache[key].call(this, ...param);
		}
	}

	off(type, handler) {
		let counter = 0,
				$type,
				cache = this.BroadCastCache[type];

		if(handler == null) {
			if(!cache) return true;
			return !!this.BroadCastCache[type] && (delete this.BroadCastCache[type]);
		} else {
			!!this.BroadCastCache[type] && (delete this.BroadCastCache[type][handler.$uid]);
		}

		for($type in cache) {
			counter++;
		}

		return !counter && (delete this.BroadCastCache[type]);
	}
	static test() {
		// console.log(this.BroadCastCache);
	}
}