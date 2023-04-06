s = input().strip()
result = ''
for c in s:
    if c == 'A':
        result += 'AA'
    elif c == 'T':
        result += 'TTT'
    elif c == 'C':
        result += 'C'
    else:
        pass
print(result) 
