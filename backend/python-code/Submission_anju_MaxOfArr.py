# Read input: first value is n, rest are array elements
values = list(map(int, input().split()))
n = values[0]
arr = values[1:]

# Write your solution here

maxi = max(arr)
print(maxi)