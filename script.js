const sum = (value1, value2) => {
  try {
    if (typeof value1 === 'number' && typeof value2 === 'number') {
      return value1 + value2;
    } else {
       throw new Error('Precisa ser um número');
    }
  } catch (error) {
    return error;
  }
};

console.log(sum('1', 2));

module.exports = {
  sum,
};
