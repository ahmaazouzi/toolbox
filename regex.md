# REGEX, THE ABSOLUTE BASICS
- Credits go to [Daniel Schiffman](https://github.com/shiffman) of Coding Train.
- **regex** are a *sequence of characters* that define a *search patterns*.
- **Literal characters** are literal characters.
- **Meta characters**refer to a generic pattern. An example is 'any three numbers enclosed by parentheses' such `(11123)` and `(456)`. The following regex pattern can be used to find such a pattern:
```regex
\(\d\d\d\)
```
- `\d` is a metacharacter that means any digit between 0 and 9 inclusive.
- Another important metacharacter is the **`.`** which stands for anything in the universe.
- The star **`*`** is a **quantifier** and it means '0 or more of something'.
- The combination **`.*`** means the whole universe!
-- There are different types of metacharacters such as **quantifiers**, **single characters** and **positions** (this might be wrong :smile:).
- Single character metacharacters include:
  + **`\d`** -> **`[0-9]`** stands for any digit.
  + **`\w`** -> **`[a-zA-Z0-9]`** stands for word and can include any alphanumeric character.
  + **`\s`** is any whitespace (space, tab but probably not a line break).
  + **`\D`** is anything that's not a digit
  + **`\W`** is anything that's not word.
  + **`S`** is anything that's not whitespace.
  + **`.`** matches any character whatsoever. 
- **Quantifiers** are metacharacters that modify the previous characters in the regex and indicate their quanity. They include:
  + <span style="color:red">**`*`**</span> -> zero or more.
  + **`+`** -> one or more.
  + **`?`** -> is for 0 or one (optional character).
  + **`{min, max}`** between min and max.
  + **`{n}`** these many characters.
- **Positions** indicators include:
  + **`^`** is beginning of the line.
  + **`$`** is end of a line.
  + **`\b`** is a word boundry (beginning or end of a word.)
