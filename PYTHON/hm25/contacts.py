
contactsFile = open("./hm25/contacts.txt","r+")
contacts = contactsFile.readline()
# contactsFile.write("Mir, 8707567252 \n") # чтобы добавить в конец
print(contacts)



# for contact in contacts: # вывод контактов на экранов
#     print("%(name)s phone :%(phone)s" % contact)


# def findContactAndPrintName(name): нахождение контакта
#     for contact in contacts:
#         if (contact["name"] == name):
#             print(contact["phone"])
#
# findContactAndPrintName("yevgeniy")
# удаление контакта
def addContact(name, phone):
    newContact = {"name":name, "phone":phone}
    contacts.append(newContact)
def deleteContact(name):
    for i in range(len(contacts)):
        if contacts[i]["name"] == name:
            contacts.pop(i)
            break


