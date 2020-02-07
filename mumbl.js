function accum(s) {
    const letters = s.toLowerCase().split('');
    let answer = [];
    for (let i = 0; i<letters.length; i++) {
      answer.push(letters[i].repeat(i+1))
    }
  answer = answer.map(str => str.replace(/\b\w/g, letter => letter.toUpperCase())).join('-');
    return answer;
  }
  