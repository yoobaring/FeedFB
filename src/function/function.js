import moment from 'moment'

export function setReverseFormatDate(date) {
      return moment.utc(date, 'DD-MM-YYYY').format('YYYY-MM-DD')
}

export function setFormatDate(date) {
      return moment.utc(date).format('DD/MM/YYYY')
}
  
export function setFormatDateTime(date) {
      return moment.utc(date).format('DD/MM/YYYY HH:mm')
}

export function setFormatDateGMT(date) {
      return moment.utc(date).local().format('YYYY-MM-DDTHH:mm:ss')
}

export function setFormatDayDateTime(date) {
      return moment.utc(date).format('ddd, DD MMM YYYY HH:mm')
}

export function expireFormatNumDate(date) {
      return moment.utc(date).startOf('day').diff(moment().startOf('day'), 'days')
}

export function AddObject(object,obj) {
      const arr = new Array()
      object.map((el)=> arr.push({'value': el}))
      const obj_ = arr.map((el, i)=> Object.assign(obj[i], el))
      return  obj_ 
}

export function ArrToObject(arr) {
      const obj = []
      const array = []
      let element = []
      for (let i = 0; i < arr[0].length; i++) {
            for(let k = 0; k < arr.length; k++){
                  array.push(arr[k][i])
            }
      } 
      for (let j = 0; j < array.length; j++) {
            if(element.length < arr.length){
                  element.push(array[j])
                  if(j == array.length-1){ obj.push({...element})}
            }
            else {
                  obj.push({...element})
                  element = []
                  element.push(array[j])
            }
      }
      return  obj
}

export function Buttoncolor(date) {
      const active = {label: 'Active', color: 'btn-success'}
      const no_active = {label: 'No Active', color: 'btn-primary'}
      const status = date <= 0 ? no_active : active
      return status
}

export function Buttonstatus(status) {
      const confirm = {label: 'ยืนยัน', color: 'btn-success'}
      const no_confirm = {label: 'ไม่ยืนยัน', color: 'btn-primary'}
      const status_ = status == 1 ? confirm : no_confirm
      return status_
}

export function Buttoncheck(status) {
      const confirm = [{label: 'ยืนยัน', color: 'btn-success'},{label: 'ไม่ยืนยัน', color: 'btn-primary'}]
      const cencel = [{label: 'เรียบร้อย', color: 'btn-success'},{label: 'ยกเลิก', color: 'btn-primary'}]
      const status_ = status == 1 ? cencel : confirm
      return status_
}

export function Calculatorexpire(date) {
      return expireFormatNumDate(date) <= 0 ? 0 : expireFormatNumDate(date)  
}

export function Calculatorstatus(date_res,date_ex) {
      return  moment(setReverseFormatDate(date_res)).isBefore(setReverseFormatDate(date_ex)) ? 'อัพเกรด' : date_ex == undefined ? 'สมัครครั้งแรก' : 'ต่ออายุ'
}

export function Balance(el) {
            const payment =  parseInt(el).toLocaleString()
      return payment
}

export function Asc(str) {
     let num = str.charCodeAt(0)+1
     return String.fromCharCode(num.toString())
}

export function CalculatorNumberDateTime(dateReg, dateEx) {
      return moment(dateEx).diff(moment(dateReg), 'days');
}



