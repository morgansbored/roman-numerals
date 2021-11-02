# Roman Numeral Generator

## My approach

A roman numeral is a sequence of characters (or combinations of characters) moving L-R from largest value to smallest value. I began by creating a 'reference' object with corresponding key/value pairs, large to small.

We begin with an empty string for the roman numeral output.

An index variable r moves across the 'reference' object, and comparing the input integer value to the value at each index, and until such time as the input integer is smaller than the indexed reference value, the key is added to the output string while its value is deducted from the input integer.

The end result, when the input integer reaches 0, is a string of characters accurately representing the input as a roman numeral.

This seemed like a clear and sensible approach to me. It was easy to restrict read input values to guard against values &lt;0, &gt;3999 or NaN.