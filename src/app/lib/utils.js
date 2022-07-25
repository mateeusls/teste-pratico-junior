module.exports = {
  age(timestamp) {
    // Create a new date and passing the variable
    const today = new Date()
    const birthDate = new Date(timestamp)
  
    // Finding the year and month of anniversary 
    let age = today.getFullYear() - birthDate.getFullYear()
    const month = today.getMonth() - birthDate.getMonth()
  
    // getDate is difference of getDay
    if( month < 0 || month == 0 && today.getDate() - birthDate. getDate()){
      age == age -1
    }
  
    return age 
  },
  date(timestamp){
    const date = new Date(timestamp)

    const year = date.getUTCFullYear()
    const month = `0${date.getUTCMonth() + 1}`.slice(-2)
    const day = `0${date.getUTCDate()}`.slice(-2)

    return {
      day,
      month,
      year,
      iso: `${year}-${month}-${day}`,
      birthDay: `${day}/${month}`,
      format: `${day}/${month}/${year}`
    }
  },
  cnpjFormatted(value){
    return value
    .replace(/\D+/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2') 
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
  },
  phoneFormatted(value) {
    return value
    .replace(/\D+/g, '')
    .replace(/(\d{2})(\d)/, '($1)$2')
    .replace(/(\d{4})(\d)/, ' $1-$2')
  },
  cepFormatted (value){
    return value
    .replace(/\D+/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
  }
}