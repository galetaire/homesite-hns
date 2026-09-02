## Description

This is a brief guide to how host a website on a self-controlled Handshake top-level domain (TLD). Handshake is an experimental DNS rootzone (based on P2P blockchain system). We do not cover how to obtain a HNS domain name, we do not recommend crypto investment; skepticism around blockchain project is rather right than wrong, but I consider HNS DNS to be a decent exception as a healthy and valid ICANN alternative.

## What do you need?

- Bob wallet, with your top-level domain (TLD) and at least 10 HNS coins.
- Yeil account
- GitHub account

1. Bob Wallet

You need to have a domain stored in your personal Bob Wallet. You can bid for domains using Bob Wallet, which is both a node and a self-custodial wallet that allows you to interact directly with the HNS blockchain.

2. Yeil DNS account

Yeil DNS is a service that allows you to connect your self-custodied domain on Bob Wallet to a third-party DNS nameserver, enabling you to manage your domain records without losing custody of your name. At any time, you can use your Bob Wallet to delete all records associating your domain with Yeil, effectively breaking the connection. Yeil is developed by eskimo.software:

- https://yeil.org

3. Connect your domain with Yeil

Once your domain is in your Bob wallet, you need to connect it to Yeil DNS. Go to your Yeil DNS account > New zone > type the domain you own, and > add zone.

Your new zone should appear with records you need to add to your domain in Bob Wallet to connect it with Yeil.

In Bob Wallet go to "Domain Manager", press on your domain, a new screen will open. In the "Records" section, add the records provided by Yeil:

    Add 2 NS records, something like a.ns.yeil.org and b.ns.yeil.org.

    Add 1 DS record, with whatever string of value you have in your Yeil account

"Submit" the changes. It will take approximately 10-20 minutes to update (the time it takes for each block to be created on the Handshake network). After 10–20 minutes, you should be able to see the new records on any HNS explorer, such as https://shakeshift.com

4. Configure GitHub

Create a "New repository", put the name of your choice, and "create". At your new repository, click on the "Add file" > "Create new file" button. Name the file "index.html" and type some HTML content into the editor. Like:

<h1>Hi, It's me!</h1>

Commit changes.

Still on GitHub, click on the "Settings" tab and scroll down to the GitHub "Pages" section. Select the main branch source "/root" and click on the "Save" button. After 5 minutes, you can refresh the Pages section, and at the top, you will see an information message indicating that your site is live at a URL similar to this: https://youraccount.github.io/yourrepository, visit the site. At this point, your website is online.

In the "Pages" section, go to "Custom Domain" and add your desired domain. Note that it must be a second-level domain (e.g., something.yourdomain). GitHub will not recognize a HNS pure top-level domain:

    hi.yourdomain, for example.

Because it’s not an ICANN domain, GitHub will tell you it doesn’t work. Even though it will always show as "DNS Check in Progress," your site will be online. It will take around 30 minutes for the site to go live.

5. Set up your domain as the address for your site

Finally, you need to connect Yeil with GitHub. Go to you Yeil account > "Manage" for your domain, and add an "A" record:

    Type: A

    Name: hi.yourdomain

    Content: 185.199.111.153 (this is the IP address of GitHub)

The record update will take 6 hours to go live. But after that time, your site will be online at your domain address:

    http://hi.yourdomain/

Note that for resolving the handshake DNS protocol you will need a resolver since browsers do not support it, consider using Fingertip: https://github.com/imperviousinc/fingertip.

Congrats! The next step is to personalize your website (at this point only the "index.html"), you can ask some AI to create you a better one. The low cost of the HNS network allows you to have a almost infinite number of sites at no cost.

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
