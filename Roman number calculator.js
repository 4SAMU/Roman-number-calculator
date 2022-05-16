function convertToRoman(num) {
    const arabicToRoman = {3000: 'MMM', 2000: 'MM', 1000: 'M', 900: 'CM', 800: 'DCCC', 700: 'DCC', 600: 'DC', 500: 'D', 400: 'CD', 300: 'CCC', 200: 'CC', 100: 'C', 90: 'XC', 80: 'LXXX', 70: 'LXX', 60: 'LX', 50: 'L', 40: 'XL', 30: 'XXX', 20: 'XX', 10: 'X', 9: 'IX', 8: 'VIII', 7: 'VII', 6: 'VI', 5: 'V', 4: 'IV', 3: 'III', 2: 'II', 1: 'I'}; 
    const baseOfTens = [1000, 100, 10, 1]; //array to break the number into Thousands, Hundreds, Tens, and Ones (ex. 1987 - 1000, 900, 80, 7)
    const baseNum = []; //stores the broken down numbers from baseOfTens
    let romanStr = ''; //holds the converted numbers to roman numerals
    let modulo = 0; //used to capture and reuse 'remainder' to break down numbers
    
  
    if (num != 0) {
      for (let i = 0; i < baseOfTens.length; i++) {
        //breaks down inputted argument into thousands, hundreds, etc...starting where-ever baseOfTens is less than num
        while (baseOfTens[i] <= num) {
          modulo = num % baseOfTens[i];
          num -= modulo;
          baseNum.push(num)
          num = modulo; //re-assigns num to modulo - so num is continued to be broken down into smaller numbers
        }
      }
    }
    //converts the pushed broken down numbers to matching roman numeral values
    for (let number of baseNum) {
      for (let key in arabicToRoman) {
        //the '+' (plus sign) ppending key variable converts the string object key to a integer. Same as Number('stringValue');
        if (number === +key) {
          romanStr += arabicToRoman[key];
        }
      }
    }
    return romanStr; 
  }
  convertToRoman(36);