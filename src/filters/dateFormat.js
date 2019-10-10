import Vue from "vue";

Vue.filter('formatDate', (value) => {
  if (value) {
    let d = new Date(value)
    let ld = (v) => {
      let s = v.toString()
      return s.length<2 ? '0'+s : s
    }
    return ld(d.getDay()) +'/'+
          ld(d.getMonth()+1) +'/'+
          d.getFullYear() +' '+
          ld(d.getHours()) +':'+
          ld(d.getMinutes()) +':'+
          ld(d.getSeconds())
  }
  return ''
})
