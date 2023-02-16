# Roman to Integer

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
<br><br>
Symbol&nbsp;       Value<br>
I&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       1<br>
V&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             5<br>
X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             10<br>
L&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       50<br>
C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             100<br>
D&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             500<br>
M&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                   1000<br>
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
<br><br>
Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII.<br>
Instead, the number four is written as IV. Because the one is before the five we subtract it making four.<br>
The same principle applies to the number nine, which is written as IX.<br>
There are six instances where subtraction is used:
<br><br>
I can be placed before V (5) and X (10) to make 4 and 9.<br>
X can be placed before L (50) and C (100) to make 40 and 90.<br>
C can be placed before D (500) and M (1000) to make 400 and 900.
<br><br>
Given a roman numeral, convert it to an integer.