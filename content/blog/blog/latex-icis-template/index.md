---
date: '2014-03-06'
title: LaTeX ICIS Template
---

As most everyone who works with me knows, I'm a huge advocate of LaTeX. If not
for LaTeX, at least a huge opponent of Word. Word is sometimes okay if you're
doing a simple document without a lot of formatting, but once I start dealing
with formatting a large document according to some specification, things always
seem to go downhill. I'll press enter in the wrong place and all of a sudden my
entire paragraph is formatted as a section header. Or a number list will decide
to continue from previously, or not continue, depending on Word's temperament
that day.

That is why I love LaTeX. It has a pretty steep startup cost (in terms of time),
but the benefits in longer documents or with fancier formatting are huge. I love
the way a LaTeX document looks, and most importantly I love that if something is
screwed up in my document, I can fix it. If something isn't behaving how I want,
I go back to the document and figure out what's going on. I'm no longer at the
mercy of Word's formatter.

I'm currently preparing a few documents for submission to the
[International Conference on Information Systems](https://icis2014.aisnet.org/)
(ICIS). The good folks at ICIS have allowed PDF submissions, which is
unfortunately not true for some others. Unfortunately, they only provide the
document specifications in a Word template. So I took this as an opportunity to
expand my skills and achieve LaTeX ninja-hood. Rather than deal with Word's
template and its formatting issues, I decided to create a special document class
for ICIS this year.

~~Currently it's a work in progress, but it's nearly complete. The only remaining
task is to get bibtex to properly format citations. ICIS has elected to use the
MISQ citation style rather than a standard style like Chicago or APA, so I'll
get to dig into the depths of bibtex to get those formatted correctly.~~

In the meantime, it's a fully functioning template. Download it from Github at
the link below, take it for a spin, and let me know if you run into any
problems. Any bugs would just be further opportunity to learn about the
details of LaTeX.

[LaTeX ICIS template on Github](https://github.com/rschuetzler/latex-icis-template)

UPDATE: The MISQ citation format has been added. It has handled books, articles,
proceedings, and collections that I've thrown at it. Please let me know if you
find anything that breaks.
