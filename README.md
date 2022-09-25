# Find Characters with Lazy Matching (freeCodeCamp Challenge)
Inspired by Game of Thrones, House of The Dragon sequel ❄️🔥

## "Regular Expressions" ➡️ Chapter 3
##  Part of the JavaScript Certification ➡️ Lesson 14

### In regular expressions there are 2 types of matches:
1. greedy match (by default) = it finds the *longest possible* part of a string that matches the regex pattern
2. lazy match = it finds the *shortest possible* part  

#### Complete the Challenge:
Fix the regex `/<.*>/` to return the HTML tag `<h1>` and not the text `"<h1>Winter is coming</h1>"`

Initially we have `let myRegex = /<.*>/;` that we have to change

let's analyze the solution `/.h[0-9]*?>/`
- wildcard `.` corresponds to any character 
- [0-9] any number between 0 and 9 to follow the letter `h`
- `?` corresponds to lazy matching that ends with this character `>`





