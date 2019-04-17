---
date: '2015-01-04'
title: LaTeX vs Word (again)
---

A recently published article in PLoS ONE, entitled "An Efficiency Comparison of Document
Preparation Systems Used in Academic Research and Development"
([link here](http://www.plosone.org/article/info:doi/10.1371/journal.pone.0115069))
lit the world on fire. Okay, not really. In fact, most people, including researchers and
even LaTeX enthusiasts have probably not read it. And that's fine. Because it's not very
good. And I'm
[not the only one who thinks so](http://serialmentor.com/blog/2014/12/27/post-publication-review-of-the-plos-one-paper-comparing-ms-word-and-latex-how-not-to-compare-document-preparation).

The article focuses on the differences in "efficiency" of LaTeX and Word when writing
academic research articles. Authors Knauff and Nejasmic apparently have some sort of bone
to pick with LaTeX users, because the entire article, but most especially the conclusions,
have a very clear pro-Word bias. To add my voice to the article linked above, I wanted to
express my frustration with a few aspects of the article that I found particularly poor.

## Experimental Task

The researchers used a set of 30 minute document duplication tasks to measure efficiency
between Word and LaTeX users. Experienced and novice users of LaTeX and Word were given a
single page of a research article to reproduce in their preferred method, and were given
30 minutes to do so. Efficiency was measured in words typed, typographical errors, and
formatting and other errors produced. The three types of task were (1) a plain text
article, including a page header, (2) a shorter article with a table, and (3) a one-page
article with several mathematical formulas. On both (1) and (2), Word users "outperformed"
LaTeX users, while on the formula-filled page, LaTeX users redeemed themselves.

My immediate thought on reading about the task was to question how many hours of research
are spent duplicating an existing document. Sure, I'll freely admit that LaTeX is not as
easy as Word when it comes to matching formatting rules. I spent several hours last spring
creating a LaTeX template for the ICIS conference
([here](http://www.schuetzler.net/blog/latex-icis-template/)), and it was at times
frustrating. Quickly and easily matching arbitrary formatting requirements is not where
LaTeX shines.

But it's also not what research is about. Matching formatting requirements for a journal
is at times frustrating and time consuming, but it's hardly what most of us think of when
we think of writing a paper. Document organization, references, statistics, collaboration,
version control (at least when collaborating, but even if not), and who knows what else
are all much more important when creating a research paper. These (yes, even statistics
with knitr) are where LaTeX and its magic shine through. I've
[written](http://www.schuetzler.net/blog/intro-to-using-git-and-bitbucket-for-collaboration/)
[multiple](http://www.schuetzler.net/blog/latex-for-researchers-pt-1/)
[times](http://www.schuetzler.net/blog/latex-for-researchers-pt-2/) about the learning
curve of LaTeX, but throughout it all I will continue to sing its praises, though maybe
it's just cognitive dissonance (more on that in a bit).

LaTeX's big draw, and it's main selling point to me, is that it separates the formatting
of the document and the content of the document in a decent, logical way. About a year ago
I was collaborating with a colleague preparing an article for submission to a
conference. I'd bullied and badgered him into using LaTeX, and it was going really
well. We were able to create the entire document and review it in a nice, double-spaced
format. When it came time for submission, we found the conference's LaTeX style, applied
it to the document, and in about 15 seconds our entire document was reformatted to meet
the requirements. We'd saved at least an hour, probably more, of battling with Word to
reformat everything.

If a journal or conference provides both a LaTeX and Word template, there is absolutely no
doubt in my mind that adapting an existing article to the formatting requirements would be
easier in LaTeX than in Word. The benefit of the separation of content and formatting is
that changing the formatting can be done independent of the content of the document.

So, in summary, the task was basically rigged (either intentionally or not) to favor
Word. And it's barely related to what writing a paper looks like.

## Discussion and Conclusions

Woo-wee did the authors overreach with their conclusions. After seeing that Word users
outperformed LaTeX users on the 30 minute sprint tasks, they took extensive creative
liberty in extrapolating their findings. Here are the highlights:

* Because Word users outperformed LaTeX on all but the equation text, only journals that
  use equations should accept LaTeX formatted documents.
* LaTeX users were more satisfied about their experience creating a document, but only
  because they have cognitive dissonance and essentially lie to themselves about enjoying
  it to justify the time they have spent learning and using it.
* Tax dollars are spent supporting research, and some of those dollars pay to create LaTeX
  documents, and so are wasted because people aren't using a more efficient document
  preparation system (i.e., Word) instead.
* Therefore, leading journals should ban LaTeX submissions in order to save researchers
  from themselves, and to save tax money.

Pretty strong claims for a single experiment with 40 participants. I guess the validity of
their conclusions really hinges on the validity of their task as a proxy for research. I
have made my opinion pretty clear: I think the experimental task stinks, is a
Word-friendly, but LaTeX-nonfriendly task, and that it's not a valid proxy for what doing
research and writing a paper looks like. Given that, their conclusions are an even bigger
stretch.

## Suggestions for improvement

I understand that doing experiments is difficult, time consuming, and often
frustrating. No experiment will perfectly mirror the real world environment it is
attempting to represent. However, this paper has a few major shortcomings that prevent my
recommending it for publication. The following are my suggestions for the authors:

* Find a new task. One that more closely mirrors actual research. Add in a few
  LaTeX-friendly items like a bibliography with a couple dozen citations. Or dealing with
  figures, tables, and cross-references when those things move around.
* Compare the ease of adapting an existing text to new requirements. That's what research
  looks like when, say, a paper is rejected from one journal and must be submitted to a
  new one.
* Compare the different LaTeX tools. You mention in the article that the different tools
  are vastly different in capability. To quote: "Another characteristic of our study is
  that it is practically impossible to evaluate LaTeX without also evaluating the used
  editors." You said it yourself. Do it.
* Please please please tone down your discussion section. I know it is tempting to
  extrapolate your findings to saving billions of dollars in wasted research time due to
  LaTeX, but the limitations of your current design simply don't allow you to make those
  claims.

Just because, in this one task Word performs better does not mean that you can throw LaTeX
out with the bath water.