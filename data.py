from random import seed, random as r

seed(0)

with open('data.csv', 'w') as file:
  file.write(f'n,x,y,z\n')
  for n in range(1_000_000):
    file.write(f'{n},{r()},{r()},{r()}\n')
