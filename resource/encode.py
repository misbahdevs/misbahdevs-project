#this is tool for encoding string to hex

def brokensec():
  test = input(str("Masukan string: "))
  print(test.encode().hex())

brokensec()
