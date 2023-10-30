# Remove print statements to reduce runtime


def add_binary(a: str, b: str) -> str:
    # get shorter bit string out of 'a' and 'b'
    shorter_str = a
    if len(a) > len(b):
        print("b is shorter")
        shorter_str = b

    # add leading zeros to shorter bit string
    leading_zeros = ""
    length_diff = abs(len(list(a)) - len(list(b)))
    for i in range(length_diff):
        leading_zeros = leading_zeros + "0"
    shorter_str = leading_zeros + shorter_str

    # update relevant input with 'shorter_str'
    if len(a) < len(b):
        a = shorter_str
    elif len(a) > len(b):
        b = shorter_str

    # initialize variables to store carry and result
    carry = 0
    result = ""

    # loop through 'a' anc 'b' and perform full-adder operation bit by bit
    for i in range(len(a) - 1, -1, -1):
        if carry == 0:
            print(f"Carry is currently {carry}")
            if a[i] == "0" and b[i] == "0":
                print("Carry-0 A-0 B-0")
                result = "0" + result
            elif a[i] == "1" and b[i] == "1":
                print("Carry-0 A-1 B-1")
                result = "0" + result
                carry = 1
            else:
                print("Carry-0 A-X B-X")
                result = "1" + result
        else:
            print(f"Carry is currently {carry}")
            if a[i] == "0" and b[i] == "0":
                print("Carry-1 A-0 B-0")
                result = "1" + result
                carry = 0
            elif a[i] == "1" and b[i] == "1":
                print("Carry-1 A-1 B-1")
                result = "1" + result
                carry = 1
            else:
                print("Carry-1 A-X B-X")
                result = "0" + result
                carry = 1

    # add 1 to the front is the carry is not 0
    if carry == 1:
        result = "1" + result

    # return statement
    return result


a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
print(add_binary(a, b))
