# print('kek \'kek\' ')
# print('123\b q') # \b стирает символ находящиеся левее от него
# print("kekk \n kek") # new line
# print("\t kek") # отступ слева
# s = 'string literal'
# print(f'This is formatted {s}')
#
# a = input("Type: number")
# 1 задание найти совпадения
# str_1 = set(input("first sentences \n").split(" "))
# str_2 = set(input("second sentences \n").split(" "))
# similars = []
# for sim in str_1:
#     if(sim in str_2):
#         similars.append(sim)
#
# print(', '.join(similars))
# 2 Нарисовать пирамиду
# height = int(input("Pyramid height: \n"))
# symbol = "*"
# resultString = ""
# length = height
# while height > 0:
#     string = symbol * height
#     print('{:_^{len}}'.format(string,len=length))
#     height -= 2
# среднее значение
# sums = [67.33, 67.41, 69.55, 68.83]
#
# def average(list):
#     sum = 0
#     for s in list:
#         sum += s
#     ave =sum / len(list)
#     print('%.5f' % ave) average(sums)
#
# print("%10s" % "string ten length")  # строка из 10 символов
# print('%04d' % 315)  # 4 символа, если символ 1, то будет 0 вначале
prices = [10, 5, 20.5, 7.15, 2.99]
items = ['Milk', 'Bread', 'Cheese', 'Chocolate', 'Water']

for i in range(0, len(prices)):
    productName = items[i]
    productPrice = prices[i]
    print("%s.10s price :%.6f" % (productName,productPrice))
