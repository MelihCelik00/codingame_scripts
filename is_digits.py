import sys
import math
s = input()
c = input()
digits = [c for c in s if c.isdigit()]
print(c.join(digits))
