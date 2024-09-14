def func(array):
    array = iter(array)
    try:
        first = next(array)
    except StopIteration:
        return True
    
    return all(first == x for x in array)


array = [1,2,3]
print(func(array))