def priority_sentence():
  target = input().strip()
  M = int(input().strip())
  lines = [input().strip() for _ in range(M)]
  
  print("These are the lines: ",lines)
  
  #sort lines here
  lines.sort(key=lambda line: line.split().count(target))

  
  print("sorted lines here: ", lines)
  
  for line in lines:
    print(line)
    

priority_sentence()