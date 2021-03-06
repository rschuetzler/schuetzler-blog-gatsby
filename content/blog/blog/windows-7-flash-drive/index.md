---
date: "2010-10-02"
title: How to install Windows 7 from a Flash Drive
description: Instructions for creating and using a Windows 7 boot USB drive
---

<p>I've got a netbook and a DVD image of Windows 7. I don't have a disc drive for the netbook, so I have to figure out a way to get Windows 7 onto a USB drive to install from. Thanks to <a href="http://www.thinkcomputers.org/install-windows-7-from-a-usb-flash-drive/">this site</a>, I was able to get it.</p>
<ol>
	<li>You'll need a flash drive that's at least 4 GB. You don't need one any bigger than that, but if that's all you have, it will work.</li>
	<li>If you have a CD, insert it into the computer. If not, you'll need to mount the ISO image. If you don't know how to do this, you can look it up. I use VirtualCloneDrive, but Daemon tools works too.</li>
	<li>Run the command prompt as administrator (All Programs -&gt; Accessories -&gt; Right-click on command prompt and select "Run as Administrator")</li>
	<li>Type <code>diskpart</code></li>
	<li>Type <code>list dis</code>k</li>
	<li>Find your drive and remember its number (our example will use 3</li>
	<li>Type <code>select disk 3</code></li>
	<li>Type the following commands:</li>
	<li><code>clean</code></li>
	<li><code>create partition primary</code></li>
	<li><code>select partition 1</code></li>
	<li><code>active</code></li>
	<li><code>format fs=fat32</code></li>
	<li><code>assign</code></li>
	<li><code>exit</code></li>
	<li>Now type the following command, replacing D with your ISO or CD drive letter, and E with your flash drive letter:</li>
	<li><code>xcopy d:*.* /s/e/f e:</code></li>
	<li>Once that finishes, you should be good to go. Just shut down the computer, and hit the key for "boot options" or something like that during your BIOS startup screen. Once you do that you can select the USB drive and the installation should begin normally.</li>
</ol>
<p>That way worked for me. And as a side note, I'm running Windows 7 Professional on a netbook with an Intel Atom N270 processor and 1 GB of RAM and I have no complaints. It starts up fairly quickly, the battery life is almost the same as with XP, and I have an OS that's less than 8 years old. Obviously I can't be running a whole bunch of stuff at once with that kind of RAM, but on a netbook I don't have much reason to.</p>
