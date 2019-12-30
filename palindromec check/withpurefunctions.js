// W matches any non-word character (equal to [^a-zA-Z0-9_])

function panlindromeCheck(string) {
    return string.replace(/[\W_]/g, '').toLowerCase() ===
           string.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
  }
  
  console.log(panlindromeCheck("MadridReal"));
  
  