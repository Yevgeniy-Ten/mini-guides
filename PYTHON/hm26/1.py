import datetime


# class Cat:
#     def meow(self):
#         print("Meow")
#
#     @classmethod cls будет указывать на Cat
#     def kitten(cls, parent, name):
#         return cls(name, 0, parent.color)
#
#
# murka = Cat()
# print(murka.meow())
# class Rectalngle:
#     def __init__(self, x, y):
#         self.x = x
#         self.y = y
#
#     def getPerimetr(self):
#         return (self.x + self.y) * 2
#
#     def getSquare(self):
#         return self.x * self.y
#     def getFullInfo(self):
#         return f'{self.getSquare()} {self.getPerimetr()} {self.x} {self.y}'
#
#
# newRectanlnge = Rectalngle(5, 6)
# print(newRectanlnge.getFullInfo())
class Date:
    def __init__(self, day, month, year):
        self.day = day
        self.month = month
        self.year = year

    @classmethod
    def getReverseDate(cls, parent):
        date = cls(parent.day, parent.month, parent.year)
        return date

    def getDateWithMonth(self):
        x = datetime.date(self.year, self.month, self.day)
        print(x.strftime("%B"))

    def printDate(self):
        print("%02d/%02d/%d" % (self.day, self.month, self.year))


date = Date(2, 3, 2000)
date.printDate()
