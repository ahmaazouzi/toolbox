# REGEX, THE ABSOLUTE BASICS
- Credits go to [Daniel Schiffman](https://github.com/shiffman) of Coding Train.
- **regex** are a *sequence of characters* that define a *search patterns*.
- **Literal characters** are literal characters.
- **Meta characters** refer to a generic pattern. An example is 'any three numbers enclosed by parentheses' such as `(11123)` and `(456)`. The following regex pattern can be used to find such a pattern:
```regex
\(\d\d\d\)
```
- `\d` is a metacharacter that means any digit between 0 and 9 inclusive.
- Another important metacharacter is the **`.`** which stands for anything in the universe.
- The star **`*`** is a **quantifier** and it means '0 or more of something'.
- The combination **`.*`** means the whole universe!
-- There are different types of metacharacters such as **quantifiers**, **single characters** and **positions** (this might be wrong :smile:).
- **Single character** metacharacters include:

| Character | Alternative | meaning
| --- | --- | --- |
| **`\d`** | **`[0-9]`** | stands for any digit.
| **`\w`** | **`[a-zA-Z0-9]`** | stands for word and can include any alphanumeric character.
| **`\s`** | | any whitespace (space, tab but probably not a line break).
| **`\D`** | | anything that's not a digit
| **`\W`** | | anything that's not word.
| **`\S`** | | anything that's not whitespace.
| **`.`** | | any character whatsoever. 

- **Quantifiers** are metacharacters that modify the previous characters in the regex and indicate their quanity. They include:

| Quantifier | Meaning
| --- | --- |
| **`*`** | zero or more.
| **`+`** | one or more.
| **`?`**  | 0 or one (optional one character).
| **`{min, max}`** | between min and max.
| **`{, max}`** | between 0 and max.
| **`{n}`** | these many characters.

- **Positions** indicators include:

| Symbol | Meaning 
| --- | --- |
| **`^`** | beginning of the line.
| **`$`** | end of a line.
| **`\b`** | word boundry (beginning or end of a word.)

- **Character classes** is stuff that appears between square brakcets. It's similar to an `OR` operation. E.g. **`[abc]`**  means either `a`, `b` or `c` can be matched.
- Inside the character class square brackets, many metacharacters need not be escaped except for **`^`**, **`-`**, **`]`**, and **`\`**.
- A dash **`-`** inside a character class is tricky. Because a dash is used to indicate a range of characters as in **`[a-zA-Z]`**, it has a special meaning inside a character class. Just to be safe, always put the dash at the beginning of a character class, less it be interpreted as indicating a range of some sort.
- The caret **`^`** is also special inside a character class. It means `NOT` and its position inside a character class is meaningful. 
  + In the expression **`[^abc]`**, it means anything but `a`, `b`, or `c`.
  + **`[^0-5]`** is anything but numbers in the range 0 to 5.
  + In **`[a^bc]`** the caret is a literal character, so if the caret is in the beginning of the character class, it's a negation metacharacter, otherwise it is just a literal character.
- **Alternation** is similar to character classes but they are used for alternating between multiple characters in a string and not just a single character. E.g. **`(net|com|org|edu)`**.
- **Capturing groups** is done with enclosing parts of a regular expression in parentheses. This will result in capautring parts of such expressions and, for example, replace parts of them individually. You are not now dealing with the expression as a whole but handling little parts of it separately. This how parts of phone numbers, social security numbers and credit card numbers get hidden, I believe. This is also one way of splitting a pattern and having more control over how you can modify it.
- The following example gives you a glimpse of the infinite power you can have when you start using regex. This regex **`\(?\d{3}[-.)]?\s?\d{3}[-.]?\s?\d{4}`** matches all the following phone number formats:
```
(541)754-3010
(541) 754-3010
(541)754-3010
541.754.3010
541.754-3010
5417543010
541 754 3010
```
- If you replace the pattern **`(^(\w*\.?)\s+(\w+)\s+(\w+)$)`** with the pattern **`Full Name: $1\nTitle: $2\nFirst Name: $3\nLast Name: $4\n`**, you can change this text:
```
Mr. Howard Carter
Pasha Mehmet Han
Mr. Gaston Maspero
```
to:
```
Full Name: Mr. Howard Carter
Title: Mr.
First Name: Howard
Last Name: Carter

Full Name: Pasha Mehmet Han
Title: Pasha
First Name: Mehmet
Last Name: Han

Full Name: Mr. Gaston Maspero
Title: Mr.
First Name: Gaston
Last Name: Maspero
```
- In the example $1, $2, etc. are references to the captured groups and are used in replacing parts of the expressions.
- Group `$0` is the whole matched pattern. If you use parentheses to capture the whole pattern, it is still 'referenced' by $0, but also becomes referenced by $1. 
- The whole universe **`.*`** is greedy. If you append an **`?`** to it, it stops being greedy. When coupled with a **`?`** quantifiers stop being greedy. This is diffferent from when it's coupled with characters and means 0 or more characters.
- You can also refer to a group inside the regular expression itself. A classic scenario is when searching for double words. This can be done with this expression: **`\b(\w+)\s\1\b`**.
- **Flags** change the behavior of regex. For example, the **`\g`** flag in javascript is for global matching.