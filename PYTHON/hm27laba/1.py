class Contact:
    def __init__(self, name, tel):
        self.name = name
        self.tel = tel


class PhoneBook:
    contacts = []

    def __init__(self, contacts=[]):
        self.contacts = contacts

    def addContant(self, contact):
        self.contacts.append(Contact(name="contact.name", tel="kekek"))

    def getContacts(self):
        return self.contacts


class Application:
    def __init__(self):
        pass

    def save_contacts(self):
        #         сохранять в файл.
        pass
