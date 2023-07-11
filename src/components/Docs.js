import React, { useEffect, useState } from "react";
import { marked } from "marked";

const Docs = () => {
  const [data, setData] = useState([]);
  //   useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         const response = await fetch(
  //           "https://www.markdownguide.org/api/v1/cheat-sheet.json"
  //         );
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         const JSON_RESPONSE = await response.json();
  //         console.log(JSON_RESPONSE);
  //         setData(JSON_RESPONSE);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     }
  //     fetchData();
  //   }, []);

  const markdown = `
# Markdown Syntax Guide

## Headers

#H1 <br>
##H2<br>
###H3<br>
####H4<br>
#####H5<br>
######H6

## Emphasis

*italic*<br>
**bold**<br>
***bold italic***

## Lists

### Unordered

* Item 1
* Item 2
* Item 3

### Ordered

1. Item 1
2. Item 2
3. Item 3

## Links

[Link text](https://example.com)

## Images

![Alt text](https://example.com/image.jpg)

## Code

\`\`\`
// Code block
console.log("Hello, world!");
\`\`\`

## Blockquotes

> Quote text

## Horizontal Rule

---

## Tables

| Column 1 | Column 2 |
| -------- | -------- |
| Row 1, Column 1 | Row 1, Column 2 |
| Row 2, Column 1 | Row 2, Column 2 |
`;

  const html = marked(markdown);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Docs;
