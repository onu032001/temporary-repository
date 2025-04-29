def pos_input():
    x = float(input('Input x:\n'))
    y = float(input('Input y:\n'))
    print(f'You\'ve entered ({x}, {y}).\n')
    return x, y #Returns a tuple

p = []
f = []

for point_index in range(1, 5):
    print(f'Point {point_index}')
    p.append(pos_input())

def find_f(p1, p2):
    if (p1[0] != p2[0]):
        a = (p1[1] - p2[1]) / (p1[0] - p2[0])
        b = (p1[0] * p2[1] - p2[0] * p1[1]) / (p1[0] - p2[0])
        return a, b
    else:
        raise ValueError('We need some gaps for point x.')

f = [find_f(p[0], p[1]), find_f(p[2], p[3])]

var_a = f[0][0]
var_b = f[0][1]
var_c = f[1][0]
var_d = f[1][1]

def fText(num):
    if num > float(0):
        return f' + {num}'
    elif num < float(0):
        return f' - {-num}'
    else:
        return ''

print(f'Function 1: y = {var_a}x{fText(var_b)}')
print(f'Function 2: y = {var_c}x{fText(var_d)}')

if var_a == var_c:
    raise ValueError('The slopes are the same.')

var_x = (var_d - var_b) / (var_a - var_c)

if min([p[point_index][0] for point_index in range(4)]) < \
    var_x < max([p[point_index][0] for point_index in range(4)]):
    print('There is an intersection.')
else:
    print('There is no intersections.')