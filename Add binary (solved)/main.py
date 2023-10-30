def add_binary(a: str, b: str) -> str:
    short = a
    if len(a) > len(b):
        short = b

    lz = ""
    dif = abs(len(list(a)) - len(list(b)))
    for i in range(dif):
        lz = lz + "0"
    short = lz + short

    if len(a) < len(b):
        a = short
    elif len(a) > len(b):
        b = short

    c = 0
    res = ""

    for i in range(len(a) - 1, -1, -1):
        if c == 0:
            if a[i] == "0" and b[i] == "0":
                res = "0" + res
            elif a[i] == "1" and b[i] == "1":
                res = "0" + res
                c = 1
            else:
                res = "1" + res
        else:
            if a[i] == "0" and b[i] == "0":
                res = "1" + res
                c = 0
            elif a[i] == "1" and b[i] == "1":
                res = "1" + res
                c = 1
            else:
                res = "0" + res
                c = 1

    if c == 1:
        res = "1" + res

    return res


a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
print(add_binary(a, b))
