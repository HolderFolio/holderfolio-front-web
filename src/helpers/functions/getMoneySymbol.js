export const getMoneySymbol = (devise) => {
  switch (devise) {
    case 'USD':
      return "$";
    case 'EUR':
      return "€";
    case 'GBP':
      return "£";
    default: return "$"
  }
}