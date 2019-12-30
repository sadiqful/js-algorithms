// With a for loop and straight forward regex
  
  function panlindromeCheck(string) {
    var regex = /[^A-Za-z0-9]/g;
    string = string.toLowerCase().replace(regex, '');
    var len = string.length;
    for (var i = 0; i < len/2; i++) {
      if (string[i] !== string[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }