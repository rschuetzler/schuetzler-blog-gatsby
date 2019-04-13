---
date: '2014-07-18'
title: 'LaTeX for Researchers, Part 4: Tables'
---

So far we've covered some of the basics of creating a functional document in LaTeX:

* [Installation and Formatting](http://www.schuetzler.net/blog/latex-for-researchers-pt-1/)
* [Citations](http://www.schuetzler.net/blog/latex-for-researchers-pt-2/)
* [Figures](http://www.schuetzler.net/blog/latex-for-researchers-pt-3-figures/)

One of the last true essentials for social science researchers like me is
tables. Maybe somewhere down the line I'll have a need for LaTeX's awesome
equation editing, but today is not that day. So let's make some tables!!!

Now, tables is definitely the part of LaTeX that I have the least experience
creating. Not because I don't use them, but because I rarely create them
myself. The purpose of a table in an academic paper is usually to contain
correlation coefficients or something of that sort. If you use the awesome
statistical programming language [R](http://www.r-project.org/) to do your
stats, then there are already a few good ways to generate LaTeX tables. The R
packages [xtable](http://cran.r-project.org/web/packages/xtable/index.html) and
[Hmisc](http://cran.r-project.org/web/packages/Hmisc/index.html) have functions
to create LaTeX tables for you that you can then paste or import directly into
your document. The
[stargazer](http://cran.r-project.org/web/packages/stargazer/vignettes/stargazer.pdf)
package does as well, though it's a bit more limited in what types of data it
will table-ify for you. Nonetheless, if you have ever manually typed correlation
matrices into a paper, you might want to look into using R and these packages to
make your life easier.

In the previous post about figures, we talked about floats in LaTeX. They are
LaTeX's way of managing placement of figures and tables to make the document
look as good as possible. To continue my trend of Word-bashing, have you ever
had a small table span across a couple pages just because of where it happened
to fall in a paragraph? Then the next page has no headers, so you have to
manually recreate them. Then you change something in the document above the
table, and the duplicated headers are now in the middle of the table? Ya, it
happens. Word sucks. Anyway, placing tables in a floating environment lets them
avoid those trouble.

The name of the float environment for a table is `table`. Putting it in the
float allows us to give it a label and a caption just like a figure. The label
allows us to cross-reference the table just like we can a figure. The name of
the environment for the table itself is `tabular`. This environment takes an
argument to specify the alignment of each column in the table (right, center, or
left alignged). Inside the `tabular` environment, table cells are separated with
`&`, and table rows are separated with `\\`. If you are familiar with HTML, you
can think of `&` somewhat like `<td>` and `\\` as `<tr>`. Sort of.

When you specify the alignment, you can also specify whether you want vertical
rules (lines) between your columns or bordering your table using the pipe `|`
character. You specify the horizontal lines inside the table itself using
`\hline`. So a very basic (and ugly) table with two columns will look a little
bit like this:

\begin{table}
\centering
\caption{This is an excellent table.}
\label{tab:test1}
\begin{tabular}{|l|r|}
\hline
Item & Cost \\
\hline
Test content & 1.50 \\
\hline
Tutorial & Free \\
\hline
\end{tabular}
\end{table}

Notice that I threw the `\centering` in there to make the whole thing
centered. I can't see any reason why you would ever not want that, so we're
going with it. You may also notice that my columns are not aligned in the source
code. While that would make it more readable, it doesn't change the format of
the output. Because I use Emacs and AucTeX, I can use `M-x align-current` to
align my tables' source code. Your favorite tool may have something similar, so
look around for it.