  /*  Vowel Count
    Return the number (count) of vowels in the given string.
    We will consider a, e, i, o, u as vowels for this Kata (but not y).

     The input string will only consist of lower case letters and/or spaces.
      */
  function getCount(str) {
      let number=0;
      for (let i=0;i<str.length;i++) {
          if (str[i]==="a") {
              number++;
          } else if ( str[i]==="e") {
              number++;
          } else if ( str[i]==="i") {
              number++;
          } else if ( str[i]==="i") {
              number++;
          } else if ( str[i]==="o") {
              number++;
          } else if ( str[i]==="u") {
              number++;
          }
      } return number;

  }
