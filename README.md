# How to Host a Website on a Handshake TLD

A brief guide to hosting a website on a self-controlled Handshake top-level domain (TLD). Handshake is an experimental DNS root zone based on a peer-to-peer (P2P) blockchain system.

> **Note:** This guide does not cover how to obtain an HNS domain name, and it does not recommend crypto investment. Skepticism around blockchain projects is more often right than wrong — but I consider HNS DNS to be a decent exception: a healthy and valid alternative to ICANN.

## What You Need

- **Bob Wallet**, with your top-level domain (TLD) and at least 10 HNS coins
- A **Yeil** account
- A **GitHub** account

## 1. Bob Wallet

You need a domain stored in your personal Bob Wallet. You can bid for domains using Bob, which is both a node and a self-custodial wallet that lets you interact directly with the HNS blockchain.

## 2. Yeil DNS Account

Yeil DNS is a service that lets you connect your self-custodied domain in Bob Wallet to a third-party DNS nameserver, so you can manage your domain records without losing custody of your name. At any time, you can use Bob Wallet to delete all records associating your domain with Yeil, effectively breaking the connection. Yeil is developed by eskimo.software:

- https://yeil.org

## 3. Connect Your Domain with Yeil

Once your domain is in your Bob Wallet, you need to connect it to Yeil DNS. In your Yeil account, go to **New zone**, type the domain you own, and click **Add zone**. Your new zone will appear with the records you need to add to your domain in Bob Wallet in order to connect it with Yeil.

In Bob Wallet, go to **Domain Manager** and click your domain to open a new screen. In the **Records** section, add the records provided by Yeil:

- **2 NS records** — for example, `a.ns.yeil.org` and `b.ns.yeil.org`
- **1 DS record** — using the value shown in your Yeil account

Click **Submit** to save the changes. Updating takes roughly 10–20 minutes (the time needed for each block to be created on the Handshake network). After that, you should be able to see the new records on any HNS explorer, such as https://shakeshift.com.

## 4. Configure GitHub

Create a **New repository**, give it a name of your choice, and click **Create**.

In your new repository, click **Add file → Create new file**. Name the file `index.html` and add some HTML content in the editor, for example:

```html
<h1>Hi, it's me!</h1>
```

Commit the changes.

Still on GitHub, open the **Settings** tab and scroll down to the **Pages** section. Set the source to the `main` branch and the `/ (root)` folder, then click **Save**. After about 5 minutes, refresh the Pages section — a message at the top will show that your site is live at a URL similar to:

```
https://youraccount.github.io/yourrepository
```

Visit the site. At this point, your website is online.

In the **Pages** section, go to **Custom domain** and add your desired domain. Note that it must be a second-level domain (e.g. `something.yourdomain`); GitHub will not recognize a pure HNS top-level domain:

```
hi.yourdomain
```

Because it is not an ICANN domain, GitHub will report that it doesn't work. Even though it will always show **"DNS Check in Progress,"** your site will still be online. It takes around 30 minutes to go live.

## 5. Set Your Domain as the Address for Your Site

Finally, connect Yeil with GitHub. In your Yeil DNS zone, click **New record** for your domain and add an **A** record:

| Type | Name            | Content                                    |
| ---- | --------------- | ------------------------------------------ |
| A    | `hi.yourdomain` | `185.199.111.153` (a GitHub Pages IP)      |

The record update takes about 6 hours to go live. After that, your site will be online at your domain:

```
http://hi.yourdomain/
```

> **Note:** To resolve the Handshake DNS protocol, you will need a resolver, since browsers do not support it natively. Consider using [Fingertip](https://github.com/imperviousinc/fingertip).

## Done!

Congratulations! The next step is to personalize your website (right now it's just `index.html`) — you can even ask an AI to build a nicer one for you. The low cost of the HNS network lets you host an almost unlimited number of sites for next to nothing.
