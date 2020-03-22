const object = {
  numberyStrings: [],
  NaNyStrings: [],
  isNumberyString: function (param) {

    var n = [true, null, undefined, 0, {}, [], () => { }].includes(param);
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
    debugger;
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

  },
  evenStrings: function () {

  },
  oddStrings: function () {

  },
  negativeStrings: function () {

  },
  positiveStrings: function () {

  },
  zeroStrings: function () {

  },
  numberyAsNumbers: function () {

  },
  NaNyAsNumbers: function () {

  },
  sumOfNumbery: function () {

  },
  sumOfNaNy: function () {

  },
};


