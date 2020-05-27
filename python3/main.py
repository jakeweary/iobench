with open('data.csv') as file:
  x = 0.0
  y = 0.0
  z = 0.0

  next(file)
  for line in file:
    values = line.rstrip().split(',')
    x += float(values[1])
    y += float(values[2])
    z += float(values[3])

  print(x, y, z)
