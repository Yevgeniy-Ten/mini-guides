from random import randint


class Field:
    def __init__(self, size):
        self.field = self._generate_field(size)

    def _generate_field(self, size):
        field = []
        line_count = 0
        while line_count < size:
            i = 0
            line = []
            while i < size:
                line.append(0)
                i += 1
            field.append(line)
            line_count += 1
        return field

    def print_square(self):
        field_str = ""
        header = f'{"":3s}'
        lines_quantity = len(self.field)
        for i in range(0, lines_quantity):
            line = self.field[i]
            header += f'{i:^4}'
            line_str = f'{i}: '
            for itmIdx in range(len(line)):
                item = line[itmIdx]
                item_str = f'{"" if item == 0 else item:_^3}' + ("|" if len(line) - 1 != itmIdx else "")
                line_str += item_str
            line_str += "\n"
            field_str += line_str
        print(header)
        print(field_str)


class Player:
    def __init__(self, symbol, game_field):
        self.symbol = symbol
        self.game_field = game_field

    def make_step(self, x, y):
        self.game_field[y][x] = self.symbol


class Bot(Player):
    def __init__(self, game_field, bot_symbol="b"):
        super().__init__(bot_symbol, game_field)

    def make_step(self):
        x, y = self.__generate_coordinates()
        print("I go to by x: %d, y: %d" % (x, y))
        super().make_step(x, y)

    def __generate_coordinates(self):
        field_size = len(self.game_field) - 1
        y = randint(0, field_size)
        x = randint(0, field_size)
        is_valid_coordinate = False
        while not is_valid_coordinate:
            if self.game_field[y][x] == 0:
                is_valid_coordinate = True
            else:
                y = randint(0, field_size)
                x = randint(0, field_size)
        return x, y


class Checker:
    def __init__(self, field):
        self.field = field

    def check_player_is_win(self, player):
        symbols_quantity_for_win = len(self.field)
        is_win = False
        for line in self.field:
            symbol_quantity_in_line = 0
            for item in line:
                if player.symbol == item:
                    symbol_quantity_in_line += 1
            if symbol_quantity_in_line == symbols_quantity_for_win:
                is_win = True
                break
        return is_win  # нужно доделать вертикальный выигрыш


#
class Game(Field, Checker):
    def __init__(self, size, mode=1):
        Field.__init__(self, size)
        self.mode = mode

    def play(self):
        if self.mode == 1:
            gamer_symbol = input("Введите символ которым будете ходить: ")
            user = Player(gamer_symbol, self.field)
            bot = Bot(self.field)
            super().print_square()
            while True:
                x = int(input("Введите координату x"))
                y = int(input("Введите координуту y"))
                user.make_step(x, y)
                super().print_square()
                bot.make_step()
                super().print_square()
                if super().check_player_is_win(bot):
                    print("Bot win!")
                    break
                if super().check_player_is_win(user):
                    print("User win!")
                    break


#
# field = Field(3)
# field.print_square()
game = Game(3)
game.play()
