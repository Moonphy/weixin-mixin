const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const ObjectCopy = (optObj, mixObj) => {
  let mixinObj = mixObj || {}
  for(let key in mixinObj){
    if(typeof mixinObj[key] === 'object' && typeof optObj[key] === 'object'){
			Object.assign(mixinObj[key], optObj[key])
			ObjectCopy(optObj[key], mixinObj[key])
    } else if(mixinObj[key]){
      optObj[key] = mixinObj[key]
    }
  }
  return optObj
}
module.exports = {
  formatTime: formatTime,
  ObjectCopy: ObjectCopy
}
