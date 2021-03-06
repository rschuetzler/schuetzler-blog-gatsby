---
date: '2010-07-08'
title: How to use PuTTY & SSH to proxy
---

<p>Worried that network monitoring at school or work is going to reveal passwords? How much do you trust the wireless Internet at the airport? If the network is unencrypted (and possibly even if it is), anyone could be watching your Internet browsing and maybe pick up a password or two. The following instructions will help you set up PuTTY and SSH on a Windows computer to secure traffic out of wherever you are.</p>

<p>First, you'll have to have a computer you can SSH into. I'm going to assume you already have that going for you. Next, you need to download <a href="http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html">PuTTY</a>. PuTTY is a free Telnet/SSH client for Windows. Once you have PuTTY downloaded, start it up. Then:</p>
<ol>
	<li>Enter the Host name and select SSH as the connection type. The port should be 22 unless you've done something special to your SSH server</li>
	<li>Go to Connection &gt;&gt; SSH &gt;&gt; Tunnels</li>
	<li>Enter "8080" as the Source Port. You can put whatever you want here. We'll use 8080 as our example.</li>
	<li>Under Destination, select Dynamic, then click "Add" To add this forwarded port.</li>
	<li>Go back to the Session section, enter a name for this connection and click "Save." You don't have to do this, but it makes it much easier later on down the road.</li>
	<li>Click "Open" and enter your username and password.</li>
</ol>
<p>Now you've got the SSH connection ready to go. All that's left is to tell your browser to direct traffic through the proxy.</p>

<p><strong>If you are using Firefox:</strong></p>
<ol>
	<li>Open Tools &gt;&gt; Options.</li>
	<li>Click "Advanced"</li>
	<li>Click "Network"</li>
	<li>Under "Connection" click "Settings"</li>
	<li>Select Manual proxy configuration</li>
	<li>Fill in SOCKS Host as 127.0.0.1 with Port set to 8080 (or whatever port you chose above).</li>
	<li>Click OK and close the preferences dialog.</li>
</ol>
<p>You should now be good to go. All of your web browsing (in Firefox) will pass through the secure tunnel between you and the SSH server.</p>

<p><strong>If you are using Google Chrome:</strong></p>

<p>Google Chrome is an excellent browser, but unfortunately you cannot configure a proxy server in the same way as Firefox. The settings do not exist. Fortunately developer Mhd Hejazi has created Proxy Switchy!, a Chrome extension that allows easy access to changing proxy settings.</p>
<ol>
	<li>Download and install <a href="https://chrome.google.com/extensions/detail/caehdcpeofiiigpdhbabniblemipncjj">Proxy Switchy!</a> from the Chrome extensions website.</li>
	<li>As soon as Proxy Switchy installs, it will pop up with a window where you can fill in your proxy server information</li>
	<li>Name the profile whatever you like. We'll call it "Home Proxy" just for fun.</li>
	<li>Leave all spaces blank except SOCKS Host and Port. Enter 127.0.0.1 for the host and 8080 (or whatever you chose above) for the port.</li>
	<li>I select SOCKS v5 in the radio button below. If that doesn't work for you, try SOCKS v4.</li>
	<li>Click Save</li>
	<li>Now all you have to do to enable the proxy is click the little globe icon next to the address bar and select "Home Proxy." To return to the unproxied Internet simply select Direct Connection.</li>
	<li>To quickly toggle back and forth between proxy enabled and disabled, you can change the "General" settings to enable quick switch and select Home Proxy for Profile 2 on the binary switch. Save your settings, and then just clicking the globe icon will toggle between your two connections.</li>
</ol>
<p>One thing you'll need to know about the proxy: It does not provide a completely encrypted Internet connection. It will only provide an encrypted connection between you and your SSH proxy server. If someone is monitoring the traffic between your SSH server and the sites you visit, this will not help. Using SSH to proxy essentially provides you the same security of browsing the Internet from your SSH server, whatever that means for you.</p>