#
# print("Ведите число")
# num = input()
# print(num[0])
# print(num[1])
# print(num[2])
# print(num[3])

# def digits_v2(number):
#     for char in str(number):
#         print(char)
#     print()
def digits_v2(number):
    thousands = number // 1000
    hundreds = number % 1000 // 100
    tens = number % 100 // 10
    singles = number % 10
    print(thousands)
    print(hundreds)
    print(tens)
    print(singles)
print(1986%1000)
# print("Гарри банок прострелил?")
# garryBanks = int(input())
# print("Larry банок прострелил?")
# larryBanks = int(input())
#
# result = larryBanks-garryBanks
# if(result==0):
#     print(larryBanks,"larry")
#     print(garryBanks,"garry")
# else:
#     print(larryBanks-1,"Larry banks not shouted")
#     print(garryBanks-1,"Garry banks not shouted")




# // S  пи * r**2
