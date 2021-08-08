module.exports = function toReadable (number) {
    
    //get number from 1 to 9
  let getNumberOneToNine = (numberOne) => {
      switch (numberOne) {
          case '1': return 'one';
          case '2': return 'two';
          case '3': return 'three';
          case '4': return 'four';
          case '5': return 'five';
          case '6': return 'six';
          case '7': return 'seven';
          case '8': return 'eight';
          case '9': return 'nine';
          default: return '';
      }     
  }

  //get dozen numbers from 10 to 19
  let getNumberTenToNineteen = (numberDozen) => {
      switch (numberDozen) {
          case '10': return 'ten';
          case '11': return 'eleven';
          case '12': return 'twelve';
          case '13': return 'thirteen';
          case '14': return 'fourteen';
          case '15': return 'fifteen';
          case '16': return 'sixteen';
          case '17': return 'seventeen';
          case '18': return 'eighteen';
          case '19': return 'nineteen';      
          default:
              break;
      }
  }

  //get dozens 20, 30 ... 90
  let getNumberUnitDozens = (numberUnitDozen) => {
      switch (numberUnitDozen) {
          case '2': return 'twenty';
          case '3': return 'thirty';
          case '4': return 'forty';
          case '5': return 'fifty';
          case '6': return 'sixty';
          case '7': return 'seventy';
          case '8': return 'eighty';
          case '9': return 'ninety';
          default: return '';
      }
  }

  //get readable number 10, 11 ... 99
  let getNumberDozens = (dozen) => {
      if (dozen[0] === '1') {
          return getNumberTenToNineteen(dozen);
      } else {
          return `${getNumberUnitDozens(dozen[0])} ${getNumberOneToNine(dozen[1])}`.trim();
      }
  }

  let numberStr = number.toString();
  const lenNumber = numberStr.length;
  let result = '';

  if (numberStr === '0') {
      return 'zero';
  }
  
  if (lenNumber === 1) {
    result = getNumberOneToNine(numberStr);
  } else if (lenNumber === 2) {
      result = getNumberDozens(numberStr);
  } else {
      result = `${getNumberOneToNine(numberStr[0])} hundred ${getNumberDozens(numberStr.slice(1))}`.trim();
  }

  return result;





}
