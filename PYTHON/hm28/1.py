err = TypeError("ekkek")
# raise err  # это как throw


class Log:
    PARAGRAPH_INDENT = ''

    def __init__(self):
        self.entries = []

    def _protected_method(self): # двойное подчеркивание спрячет
        print("kek")

k = Log()
k._protected_method()
class Kek(Log):
    pass

# print(Kek.__bases__) # bases будет указывать от какого обьекта он произошел