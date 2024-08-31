def isValid(s: str) -> bool:
    stack = []
    map = {
    "}" : "{",
    "]" : "[",
    ")" : "(",
    }

    for i, item in enumerate(s):
        if item not in map:
          stack.append(s[i])
        else:
          if len(str) == 0: return False
          else:
            if s[i] != map[stack[-1]]: return False
            stack.pop()
        
    return len(stack) == 0

print(isValid("{}{}{}{}[]}}"))