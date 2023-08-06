// dateTimeGenerator.js
function generateDateTimeString() {
    const currentDate = new Date();
    const year = currentDate.getFullYear().toString().substr(2);
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const hour = currentDate.getHours().toString().padStart(2, '0');
    const minute = currentDate.getMinutes().toString().padStart(2, '0');
  
    return `${year}${month}${day}${hour}${minute}`;
  }
  
module.exports = { generateDateTimeString };

