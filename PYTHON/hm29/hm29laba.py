class ValidFraction:
    def __init__(self, numerator, denominator):
        self.numerator = numerator
        self.denominator = denominator
        if not denominator:
            raise Exception("invalid dominator")


class Fraction(ValidFraction):
    def __str__(self):
        return f'${self.numerator} / ${self.denominator}'


w = Fraction(2, 3)
print(str(w))
