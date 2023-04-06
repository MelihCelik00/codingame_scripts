import math

weather = input().strip()
total_rainfall = 0

for r in weather:
    if r is "R":
        total_rainfall+=4
    if r is "S":
        pass
    else:
        pass

print(total_rainfall)
