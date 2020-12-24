---
date: "2016-08-14T12:56:25-04:00"
description: ""
tags:
- finance
- ledger
title: Plain Text Accounting with Ledger
topics: []
---

I dropped out of accounting in college. I hated every minute of it and could not
make two columns balance under any circumstances. 

I have always had trouble budgeting. For me, the balance in my checking account
represented how much I could blow on whatever impulse purchase suited me that
day. Prior to my daughter's wedding, I looked for help. I found it in
[YNAB](https://www.youneedabudget.com). YNAB uses a sort of "envelope" system
for tracking where money needs to be. It worked very well, the proof being was
that I was actually able to afford to pay for the wedding. 

Then YNAB went to an online-only subscription plan and I started looking
elsewhere. Their online version works fine, but no longer *feels* right. Plus, I
don't need yet another service with access to my financial accounts.

What I found was [Ledger](http://ledger-cli.org). Ledger is a command-line
double-entry accounting tool that uses a plain-text format for entries. Ledger
was created in 2003 by [John Wiegley](https://twitter.com/jwiegley), the current
maintainer of Emacs. I love plain-text for most things,
[most of the time](https://baty.net/2014/all-text-all-the-time/), so I dove in.

One of the things I've learned while struggling with spending is that it's
beneficial to enter every transaction by hand. That's right *every transaction
should be entered by hand*. This forces me to *feel* everything I spend. It's also
why I still prefer to hand-write checks. I'm reminded that it's real money.
Also, small monthly subscriptions that I may have missed become visible. I've
saved hundreds of dollars simply by forcing myself to pay attention.

Here's an example of an entry in my Ledger file:

```
2016-08-08 * Betterment Transfer
    Assets:Betterment:Roth IRA                         $250.00
    Assets:Checking

2016/08/09 * Blue Apron
    Expenses:Food:Groceries                             $59.94
    Assets:Checking
```

Since Ledger forces double entry, each transaction must contain both the target
and source accounts. These accounts need not be set up ahead of time, they just
become accounts the first time they are used. They are hierarchical and can be
nested as deeply as I like. I try to keep things at just a few levels deep. I'm
learning accounting as I go!

To mimic the "bucket" functionality of YNAB, I use Ledger's "virtual" accounts.
These are separate accounts that can be either shown or hidden when generating
balances or other reports. Here's an example in which I move $100 from Checking
into my "Vacation" bucket.

```
2016-08-14 * Vacation Fund
    [Bucket:Vacation]   $100
    [Assets:Checking]
```

Notice the brackets around each entry. This indicates that those are virtual,
but should balance. If I look at my balance with Ledger after that it will show
my Checking account has $100 less than before, even though it *really* still has
the $100. To see the balances without virtual transactions, I use the `--real`
switch. With `--real`, Ledger shows what I actually have in the account. Without
using `--real` I see what is left after moving the $100 to "Vacation". I'm still
getting the hang of it, but this is all easier to do than to explain.

Emacs comes with ledger-mode, making data entry easy using auto-completion for
accounts and automatically copying accounts from similar entries. It all
sounds like a lot of work, but I find that it's easier for me than using Quicken
or YNAB. Plus, it's all *mine*, and it's all free.

Ledger does lots more, including handling multiple currencies, commodities and
pricing, automatic transactions, etc. I'm trying to start simple, but this all
feels very good. Being in complete control of my data using an open, simple
format makes me feel more in control of my finances.

You can find lots of good resources at [plaintextaccounting.org](http://plaintextaccounting.org)

