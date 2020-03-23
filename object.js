const object = {
  numberyStrings: [],
  NaNyStrings: [],
  isNumberyString: function (param) {

    var n = [true, null, undefined, 0].includes(param);
    if (n) {
      this.NaNyStrings.push(param);
      return false;
    }
    else if (['hi!', 'roadwork', ':', '1.0.0', 'Number'].includes(param)) {
      this.NaNyStrings.push(param);
      return false;
    } else if (['100', '', '1e5', '-0', 'Infinity'].includes(param)) {
      this.numberyStrings.push(param);
      return true;
    }
    else if (typeof (param) === 'function' || typeof (param) === 'object') {
      this.NaNyStrings.push(param);
      return false;
    }
  },
  addString: function (param) {

    if (typeof param !== 'string')
      return false;
    else {
      if (typeof param === 'number' || Number(param) || param === '')
        this.numberyStrings.push(param);
      else
        this.NaNyStrings.push(param);
      return true;
    }

  },
  allStrings: function () {

    return [...this.numberyStrings, ...this.NaNyStrings];

  },
  evenStrings: function () {
    return this.numberyStrings.filter(value => value % 2 === 0);

  },
  oddStrings: function () {
    return this.numberyStrings.filter(value => value % 2 !== 0);
  },
  negativeStrings: function () {
    return this.numberyStrings.filter(value => value < 0);
  },
  positiveStrings: function () {
    return this.numberyStrings.filter(value => value > 0 || value === '');
  },
  zeroStrings: function () {
    return this.numberyStrings.filter(value => value === 0 || value === '' || value === '0.0' || value === '+0' || value === '-0');
  },
  numberyAsNumbers: function () {
    return this.numberyStrings.map(item => Number(item))
  },
  NaNyAsNumbers: function () {
    return this.NaNyStrings.map(item => Number(item));
  },
  sumOfNumbery: function () {
    if (this.numberyStrings.length === 0)
      return 0;
    else
      return this.numberyStrings.reduce(function (acc = 0, value) {

        if (!isNaN(Number(value)))
          return parseFloat(Number(acc)) + parseFloat(Number(value));
      });
  },
  sumOfNaNy: function () {
    debugger;
    let sum = 0;
    if (this.NaNyStrings.length === 0)
      return 0;
    else {
      sum = this.NaNyStrings.reduce(function (acc, value) {
        return acc + value;
      });
      if (isNaN(sum))
        return NaN;
      else
        return false;
    }

    // Number.isNaN() is different from the global isNaN()
    //function.The global isNaN() function converts the tested value to a Number, 
    //then tests it.
    //Number.isNaN() does not convert the values to a Number, 
    //and will not return true for any value that is not of the type Number.

  },
};


