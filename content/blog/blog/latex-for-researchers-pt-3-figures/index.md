---
date: "2014-06-06"
title: "LaTeX for Researchers, Part 3: Figures"
---

If you're just joining us, it's probably best to start out with my first two
posts:

- [Setting Up](http://www.schuetzler.net/blog/latex-for-researchers-pt-1/)
- [Citations](http://www.schuetzler.net/blog/latex-for-researchers-pt-2/)

Now that we've covered how to do create a document and how to add citations, the
next major items we need to be able to put in a research manuscript are
figures. First we'll talk about differences between LaTeX and Word in how they
handle figures. Then we'll dig into how to include figures in our document.

<!-- more -->

## Floats in LaTeX

When you have a desire to put a figure or table into a Word document, you throw
it in. Then you keep working on the document, and all of a sudden you have a
figure on a page by itself with a half-empty page before it. Or even better, the
formatting of the document is completely screwed up, and you've got text going
all over the place (these are all personal experiences). And heaven forbid you
want to change a picture, or remove the table. Odds are that will break
everything forever.

LaTeX handles things a bit differently. There are several ways to handle tables
and figures, but the most commonly used is to place them in a "float"
environment. This gives LaTeX the freedom to place them in the place it thinks
is best to make your document look as clean as possible. No pain of half-empty
pages, and no broken formatting. And the best part is that it places them
automatically each time you compile the document. So if you add a paragraph of
text above a figure, LaTeX will figure out how that affects the placement to
make it look nice.

## Figures in LaTeX

Hopefully that description helps you understand what LaTeX is doing when you
tell it to place an image into your file. Now we'll cover how to place an image,
and some of the settings you can tweak to make it look nice.

The first thing to note is that, since LaTeX documents are stored in text, you
are obviously not going to embed the image in the file. For our example, we'll
create a directory in the same directory as our `.tex` file and call it
figs. Then we'll point LaTeX to that directory using the following pair of
commands in the preample:

    \usepackage{graphicx}
    \graphicspath { {figs/} }

The `graphicx` package gives us useful features for including graphics, and the
`\graphicspath` command tells LaTeX where the figures are stored. You could omit
the `\graphicspath` and just put the figures in the same directory with your
`.tex` file, but things get cluttered that way. I find it best to keep them in a
separate directory.

Now we're all set up to add figures to our document. We just need some figures
to add. LaTeX is pretty good about image formats, but I pretty much always use
PNG for my figures and screenshots, so that's what we'll use now. For the
example I'll use
[this smiley face](http://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/640px-Smiley.svg.png)
that I've saved to my figs folder and named `smiley.png`. When I want to include
it in my document, I do so with the following code:

`gist:b16d49ca8ee29cde55ca`

Let's deconstruct what exactly we have here. First off, we start a `figure`
environment. This environment is a floating environment, so it takes the
arguments associated with floats. The arguments I've chosed to include are
`ht`. The
[LaTeX wikibook page on figures](http://en.wikibooks.org/wiki/LaTeX/Floats,_Figures_and_Captions)
has an excellent explanation of what all possible arguments are for floats. Like
I mentioned above, LaTeX wants your document to look nice. To do that, it has to
have some freedom in where to place your figures. These arguments tell LaTeX
what your preferences are, and it does its best to accommodate those. The `h`
argument says that you want this figure to appear approximately where you've
placed it, if possible. `t` says that you would like it at the top of the
page. LaTeX takes these preferences into account, but may override them if it
determines it will have a negative effect on the appearance of your document. If
placing it at the bottom of the page will result in a huge empty space, LaTeX
won't do it. If you want to tell LaTeX to put a document exactly where you tell
it to, use the `!` argument with another, such as `h!`.

Next we included the `\centering` command. This is not necessary unless you want
your figures centered. I do, so I almost always include it. The next command is
`\includegraphics`, which takes one value, the name of the image you want to
include. Finally, we end the figure environment with `\end{figure}`.

If you compile the document, you'll notice that the figure is ginormous. Often
you will want to resize the image. If your default graphic is too large,
you have several options for resizing. The first, and possibly most difficult is
the `scale` argument, which would be used as follows:

    \includegrpahics[scale=0.45]{smiley.png}

This shrinks the image to 0.45x its original size. You can also specify one
dimension of the image and it will be proportionally scaled, like so:

    \includegraphics[width=3in]{smiley.png}

We can even do fancy multiplication. If you want the graphic to be 1/2 the width
of the text, just throw in:

    \includegraphics[width=0.5\textwidth]{smiley.png}

This will give you a figure in your document. Of course, that's rarely all you
want to do. Good style dictates that each figure be given a caption. LaTeX
provides a way to do that by including a `\caption` command inside the figure
tags, like so:

    \caption{This is our awesome smiley face}

Recompile the document and you will see that the caption has been added. If you
put the `\caption` above the `\includegraphics` command, the caption will appear
above the image in the document. If you put it below, it will appear
below. LaTeX also numbers figures for you automatically, so if a new figure is
inserted above, all subsequent figures will be renumbered appropriately.

Finally, you may also want to reference your figure in the text of your
document. For this, LaTeX provides labels. These work similarly to Word's
cross-references, but they actually work and don't break. You add a label
(basically a name) to your figure like so:

    \begin{figure}[ht]
      \centering
      \includegraphics[width=0.5\textwidth]{smiley.png}
      \caption{Prototype system for embodied agent condition}
      \label{fig:agent}  % This is our new line
    \end{figure}

The content of the label can be whatever you want, but I recommend using a
useful name. Since you can also use labels with tables and other numbered items,
you might want to include the "fig:" as part of the name as we did here. Now if
you want to reference that figure in the text, you can simply use the label name
to reference it. Put the following snippet into the document to see it in
action:

    This is me referencing Figure~\ref{fig:smile}.

The `\ref` automatically fills in the number of the image labeled
fig:smile. That way when you add more figures or move things around, the
reference in the text is always the same. I used the tilde `~` to provide a
non-breaking space. This means that there will never be a line break between the
word Figure and the figure number. It's just a good idea to keep things looking
nice.

So here is the complete LaTeX file demonstrating how to caption, label,
reference, and resize your images:

`gist:3e6030ad739fe2718ea3`

And now you've got it. You have everything you need to make figures show up in
your documents. It may not be as easy as adding them in Word, but it's
guaranteed to break a whole lot less often. If you want to do more, you can
check out the LaTeX wiki's guides to
[importing graphics](http://en.wikibooks.org/wiki/LaTeX/Importing_Graphics) and
[managing floats](http://en.wikibooks.org/wiki/LaTeX/Floats,_Figures_and_Captions).
Alternatively, leave a comment and I'd be happy to look into it. I'm always up
for learning new things.
