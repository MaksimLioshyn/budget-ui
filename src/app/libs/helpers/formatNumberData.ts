export const formatNumberWithSpaces = (input: number) => {
  const [integerPart, decimalPart] = `${input}`.split('.');
  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ' '
  );

  const formattedNumber =
    decimalPart !== undefined
      ? formattedIntegerPart + '.' + decimalPart
      : formattedIntegerPart;

  return formattedNumber;
};
