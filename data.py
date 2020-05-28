from random import seed, gauss as g

seed(1)

with open('data.csv', 'w') as file:
  file.write(f'n,x,y,z\n')
  for n in range(1_000_000):
    x, y, z = g(0.0, 1.0), g(0.0, 1.0), g(0.0, 1.0)
    file.write(f'{n},{x},{y},{z}\n')
