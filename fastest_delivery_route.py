import sys
import math

a = int(input())
gate = int(input())
b = int(input())
max_time = int(input())
delivery_time = 0

# Write an answer using print
time_a = a + gate

# compare time for route A with time for route B
if time_a < b:
    # take route A
    delivery_time = time_a
    route = "A"
else:
    # take route B
    delivery_time = b
    route = "B"

# check if delivery can be made on time
if delivery_time <= max_time:
    print(route)
else:
    print("no delivery")
