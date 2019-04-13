---
date: '2014-05-07'
title: 'LaTeX for Researchers, Part 2: Citations'
---

## Review

In [Part 1](http://www.schuetzler.net/blog/latex-for-researchers-pt-1/) we
covered the very basics of creating a document. With that you have basically
everything you need to start writing your paper. Here's a quick review of the
basic commands:

1. `\documentclass{article}` is the first thing in your document, and it tells
LaTeX you want to use the "article" style.
2. `\title` and `\author` give LaTeX the basic information about your paper to
put in the Title area.
3. `\begin{document}` and `\end{document}` are the beginning and ending of the
content of your paper. Anything before the `\begin` is part of the preamble.
4. `\section`, `\subsection` and `\subsubsection` are the commands to create
section headers. That's imporant for styling your document.

A quick reminder here: the beauty of LaTeX comes from not worrying about the
formatting while you write your document. I used to think this was weird, since
I have to think about it when I put in the `\section` or whatever other
tags. But I was wrong. When you use a section tag, you are simply telling LaTeX
_what_ it is, not how it should look. The template, in this case `article`,
takes care of the looks for you. It also makes changing the formatting of a
document a much more consistent process than if you instead said "I want these 3
words to be 24pt font, bold, and with a 2 line break after." Simply saying
`\section` means you can change all section headers at the same time.

## Citations

One of the big issues when writing a research paper is citation management. For
this reason, about 150 tools exist to help researchers get through it. You can
use EndNote, Mendeley, Qiqqa, Zotero, Word's built-in (blech!), or a gajillion
other citation management packages to take care of it for you. Some of them work
better than others, but I have yet to find one that doesn't break for sometimes
silly reasons. Sometimes the bibliography isn't right, sometimes citations
aren't quite right, and I have never found one that works well when
collaborating with a bunch of people.

So, why not use LaTeX? As with all things LaTeX, it's going to take a bit of
work to learn, but in the long run, the payoff in terms of reduced headaches,
panic attacks, and nights spent crying wondering why you can't change the title
of this article to Title Case will make it all worthwhile. So let's get started.

<!-- more -->
### Requirements

There are two basic requirements for citing papers in LaTeX: (1) a .bib file
containing your references, and (2) the `biblatex` package. You can use other
packages to do citations, but `biblatex` is robust, powerful, and easier to
customize than the other common packages. I also recommend using the `Biber`
program, but we can get by without that for now.

### .bib File

So, the first thing you need is a .bib file that contains your references. Many
programs will make this for you. For simplicity's sake, let's start out with
[Zotero](https://www.zotero.org/). Zotero provides a relatively easy-to-use
interface for creating references. It's also free to use, and provides the
ability to share libraries, which comes in handy when you're collaborating with
others. So download the Zotero program (standalone or the Firefox plugin) and
create a few citations. I won't go into detail how to do that here, but if you
need help you can check out their tutorial on
[adding things to your Zotero library](https://www.zotero.org/support/getting_stuff_into_your_library).

Once you have the citations created in Zotero, you can export them into a .bib
file for use by BibLaTeX. To do this, highlight the citations you wish to
export, then right-click and select "Export Items...", select BibLaTeX from the
drop-down menu, then click "OK" and select where you would like to place the
file. You'll want this file in the same directory as the .tex file we'll create
shortly. You can uncheck the boxes for Exporting Notes, Files, and Journal
Abbreviations. The resulting file should look a bit like this:

<script
src="https://gist.github.com/rschuetzler/847aaf3ab9a57ca05afa.js"></script>

Since it will mostly be automatically generated, I won't go into too much detail
on the formatting, but there are a few tips I've come across for making your
bibliography generation as easy as possible:

1. __Put article titles in Title Case.__ BibLaTeX can handle automatic
de-captalization as required by formats like APA, but it cannot (at least
that I've found) do capitalization for you. So make everything Title Case
(initial caps) in your .bib file and you should be good to go.
2. __Use {} when you _need_ capitalization.__ Things like acronymns or company
names in titles might get messed up when BibLaTeX is formatting a
document. To force BibLaTeX to keep capitalization on a word, surround it
with {}. If you notice from my example, NJ in the location of the second
reference is surrounded as such {NJ}. That means that, no matter what
happens, NJ will always appear as NJ, and never nj or Nj.
3. __But don't surround everything with {}.__ You could go crazy and surround
entire titles with double-braces (Mendeley currently does this and it
sucks. If you do that, the title will always be capitalized exactly as it is
in your .bib file. But that means that BibLaTeX can't automatically change
the capitalization when the style requires it. For this reason, use {} only
when you have to.

So now we've got our .bib file, and we're ready to start citing things.

### Your .tex File Preamble

So before we get to cite things in the document, we've got to tell LaTeX that
we're going to be doing some citations. So let's look at what we need in the
preamble.

<script
src="https://gist.github.com/rschuetzler/2f63228952bd79d77213.js"></script>

It looks a lot like our basic preamble, with a couple small additions:

1. `\usepackage[backend=bibtex,style=authoryear]{biblatex}`. This tells LaTeX
that we'll be using the biblatex package to do our citations. It also tells
it how we want them to be styled. As a social science researcher, I like to
use author-year formats. Other options include `numeric` and `alphabetic`, if
you're into that kind of thing.
2. `\addbibresource{library.bib}`. This tells BibLaTeX where my references are
stored. Inside the braces is the name of the .bib file we created above. As I
said, this should go in the same directory as the .tex file we're creating
right now.

And that's it. `biblatex` has a bunch of options to customize the way your
citations and references section look, so if you want to tweak things to look
just right, take a look at the
[biblatex documentation](http://ctan.math.utah.edu/ctan/tex-archive/macros/latex/contrib/biblatex/doc/biblatex.pdf).
Otherwise, let's move on to how to actually cite things in our paper.

### Citing Things in .tex

The most important thing to know when citing a paper from your .bib file is its
cite key. That is the first string after the opening { of the reference. For
example, the cite key for the first article in my .bib file is
`ackoff\_management\_1961`. The cite key is how biblatex identifies which
reference you are referring to.

Citing a paper is very simple and consistent. Biblatex offers just about every
option you could need for citing, but all of them work the exact same way:
`\command{}` with a list of cite keys inside the braces. Here are some of the
commands, and what they do:

* `\autocite{}`. This will be your most used. This will create parenthetical
citations if the style calls for it (like most author-year styles do), or
include just the number if that's what the style wants
* `\textcite{}`. This is another favorite. This one is used when you want the
author(s)' name(s) in the body of your document. For example, if I wanted
"Achoff (1961) said that..." in my paper, I could just used
`\textcite{ackoff\_management\_1961} said that...`. This way if my citation
style changes, the citation is always done correctly.
* `\citeyear` and `\citeauthor` can be used when you want to cite just the
year or author, respectively.

There are dozens of other commands available in biblatex, but these are the most
commonly used (in my experience).

At the end of your document, you probably want to print a bibliography or
references section. This is done with the `\printbibliography` command.

So let's look at an example, using the .bib from above as our bibliography. In
this case, I've named it `blog.bib`.

<script src="https://gist.github.com/rschuetzler/eb448d4943a9d63e4096.js"></script>

You can see a couple things here that we haven't talked about yet.

1. __Multiple citations__. Sometimes you need to cite a few papers at once. For
that you can just use a comma to separate the cite keys. List them all in the
same cite command and you'll have them all together.
2. __Leaving citations out__. If you notice in my .bib file, I have a citation
to a Bonini paper that does not appear anywhere in the .tex document. If a
reference is not cited, it is left out of the reference section. This means
that you can have one giant .bib file containing every reference to every
paper you have ever seen, read, thought about, or heard of. It might make it
a bit tougher to find what you're looking for, but it won't cause an
explosion in your references section.

Well, I think that about covers it. You now have the tools you need to
automatically generate a bibliography as you are writing your master works. Next
time we'll cover how to insert figures and, if you're lucky, tables.

[Continue to Part 3: Figures](http://www.schuetzler.net/blog/latex-for-researchers-pt-3-figures/)