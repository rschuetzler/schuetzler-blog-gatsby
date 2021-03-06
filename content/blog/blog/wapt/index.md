---
date: '2010-03-19'
title: 'QA Tool Review: WAPT 5.0'
---

Okay, I decided to get the last of the QA tool reviews out on the site so I don't have to think about them any more. Here it is:
<h2 style="text-align: center;">Description</h2>
WAPT is a performance/load testing tool developed by SoftLogica. It is a Windows-only tool designed to be very easy to use. A free 30-day trial is available at the <a href="http://www.loadtestingtool.com/download.shtml">company website</a> that allows full functionality with the restriction of 20 virtual users.
<h2 style="text-align: center;">Overview</h2>
<h3>Pros</h3>
<ul>
	<li>Very easy to record and run tests</li>
	<li>Decent reporting</li>
</ul>
<h3>Cons</h3>
<ul>
	<li>Not Free</li>
	<li>No scripting capability</li>
	<li>Doesn�t do well recording AJAX calls</li>
</ul>
<h3>Pricing</h3>
<ul>
	<li>Standard license - $350 with price per license decreasing with volume
<ul>
	<li>No distributed load generation</li>
	<li>Unlimited VUs</li>
</ul>
</li>
	<li>WAPT Pro - $700 includes 1 standard license and 2 load agents
<ul>
	<li>Additional Load Agents - $200</li>
	<li>Provides distributed load generation</li>
</ul>
</li>
</ul>
<h2 style="text-align: center;">Ease of Use</h2>
<h3>Ease of Installation</h3>
WAPT was super easy to install. It installs just as easily as any Windows program. The installer puts everything where it needs to be and you�re set to go.<!--more-->
<h3>Setting up a Test</h3>
Setting up a test is as simple as starting to record, then going to the sites you want to test. WAPT records all your activity. You then organize it into Initial, Main, and Final actions. The initial actions are executed once per VU per round. These would include things like logging in. The main actions are completed as many times as you tell it to in the virtual user profile. Final actions are completed after all iterations of the main actions.<strong> </strong>

Once the tests are recorded, you set the Test Volume information and run the test.

I docked WAPT 1 point in this category because the recorder does not do a very good job with AJAX applications. It did okay with Gmail but not so much with LDS Maps.
<h3>Running a Test</h3>
Running a test is a piece of cake. Once it�s all set up, click the run button and you�re on your way.<strong> </strong>
<h3>Technical Knowledge Needed</h3>
Little to no technical ability is needed, since there is no scripting or programming required. You can do most tests just by recording them and playing them back.<strong> </strong>
<h3>Platform</h3>
WAPT is Windows-only. Requirements:<strong> </strong>
<ul>
	<li>Windows 98/Me/2000/XP/Vista (also works on Windows 7 RC)</li>
	<li>Internet Explorer 5.5 or higher</li>
	<li>At least 100 MB free hard drive space (for program + logs)</li>
</ul>
Recommended:
<ul>
	<li>Pentium 4 or Athlon XP processor</li>
	<li>512 MB+ RAM</li>
	<li>Gigabit ethernet</li>
</ul>
<!--StartFragment-->
<h2 style="text-align: center;">Functionality</h2>
<h3>Recording a test</h3>
WAPT uses an in-application browser to record test cases. This is a great feature when recording https test cases. Most other tools use a proxy which is unable to detect https GET/POST data.<strong> </strong>

Unfortunately WAPT doesn�t do a great job recording AJAX application scenarios. Some AJAX requests are missed by the recorder, and thus would have to be created manually. With the Internet moving more and more toward rich applications, this will be a problem if they can�t get it resolved in future versions.
<h3>Scripting</h3>
WAPT does not support any kind of scripting.<strong> </strong>
<h3>Reporting</h3>
The reports can be saved as html files which includes some summary data and basic graphs. Results can also be saved to a CSV file if a more detailed data analysis is needed. Figure 1 and Figure 2 below show examples of the information that is available in the HTML reports. As you can see from Figure 2, the data is grouped together by time period. These groupings can be adjusted. The current setting groups them into 10 different segments. That number can be raised or lowered as desired. The list below is all the statistics that are calculated and included in the HTML reports.<strong> </strong>
<ul>
	<li>Avg response time (also min/max per page)</li>
	<li>Avg download time (also min/max per page)</li>
	<li>Pages per second</li>
	<li>Hits/sec</li>
	<li>Sessions/sec</li>
	<li>Total Kbytes sent and received</li>
	<li>Received and sent kbits/sec</li>
	<li>Received and sent kbits/sec/user</li>
	<li>HTTP errors (including user-defined validation errors)</li>
	<li>Socket errors</li>
	<li>Timeouts</li>
	<li>Active users</li>
	<li>Total pages, hits, and sessions</li>
</ul>
[caption id="attachment_85" align="alignnone" width="588" caption="WAPT Report Graph (HTML)"]<a href="http://lh5.ggpht.com/_1K1I6RHdbSw/TAsgi92CauI/AAAAAAAAAHI/AztbdPb4w5M/WAPT1.png"><img class="size-full wp-image-85 " title="WAPT Report Graph (HTML)" src="http://lh5.ggpht.com/_1K1I6RHdbSw/TAsgi92CauI/AAAAAAAAAHI/AztbdPb4w5M/WAPT1.png" alt="" width="588" height="416" /></a>[/caption]

[caption id="attachment_86" align="alignnone" width="560" caption="WAPT Report Table"]<a href="http://lh5.ggpht.com/_1K1I6RHdbSw/TAsgjDcJv0I/AAAAAAAAAHM/E6UxH0yxoH4/WAPT2.png"><img class="size-full wp-image-86   " title="WAPT Report Table" src="http://lh5.ggpht.com/_1K1I6RHdbSw/TAsgjDcJv0I/AAAAAAAAAHM/E6UxH0yxoH4/WAPT2.png" alt="" width="560" height="397" /></a>[/caption]
<h4>Trend Reporting</h4>
WAPT�s graphs are great at showing the trend throughout the test. Each metric is measured for each time period and the graph shows the results live while the test is running. These results are also available in the CSV file exported.
<h4>Integration</h4>
The only external integration WAPT offers is the ability to export to CSV. <strong> </strong>
<h3>Data Functions</h3>
In WAPT this is possible, but not as smooth as with jMeter and others. It is done by creating a variable, selecting its function to be �Random from list� or �Ordered list�, and then loading the strings from a file. It this way, each parameter (e.g., street, address, city, etc.) needs its own file. Not the most efficient way. Other programs allow you to use a CSV with each column as its own variable.<strong> </strong>
<h3>Load Generation / Distributed Load Generation</h3>
WAPT does not support distributed load testing. WAPT Pro does, but the license for that costs twice what the regular license is. WAPT Pro includes the ability to generate load with 2 machines. More �load agents� as they are called cost $200. There is no limit on VUs, though, so your ability to create load is limited only by your hardware.<strong> </strong>
<h3>Server Monitoring</h3>
WAPT does not include any ability to perform server monitoring. WAPT Pro does.<strong> </strong>
<h3>Documentation</h3>
The documentation that comes with WAPT is great. Because the tool is so simple, it really doesn�t need a lot of documentation. WAPT is not feature-rich, so the little documentation that exists effectively covers all of its functionality.<strong> </strong>
<h3>User Interface</h3>
Fairly pretty UI. Bubbly icons look a little �90s, but it�s not bad.<strong> </strong>
<h3>Performance v. Stress Testing</h3>
WAPT supports both static-load performance testing and ramp-up stress testing. It also allows you to select whether you want the tests to run a certain number of times or just for a certain time frame. The screenshot below (Figure 3) shows the setup screen where you select how many VUs will be in the test, the ramp-up time (if there is any), and the final load. WAPT also provides an option for �Periodic� load, which alternates between two levels on a schedule you set.

[caption id="attachment_87" align="alignnone" width="300" caption="WAPT Load test setup"]<a href="http://lh6.ggpht.com/_1K1I6RHdbSw/TAsgjMamHKI/AAAAAAAAAHQ/1dIgFkyVnfY/s576/WAPT3.png"><img class="size-medium wp-image-87 " title="WAPT Load test setup" src="http://lh6.ggpht.com/_1K1I6RHdbSw/TAsgjMamHKI/AAAAAAAAAHQ/1dIgFkyVnfY/s576/WAPT3.png" alt="" width="300" height="256" /></a>[/caption]
<h3>Bugs/Weirdness</h3>
<ul>
	<li>The built-in report graphs are great, but they use both sides of the y-axis for different scales (Figure 4). There is no indication which line is associated with which scale. You have to turn items off and back on to be able to figure out what goes where.<strong> </strong></li>
</ul>
[caption id="attachment_88" align="alignnone" width="530" caption="WAPT report graph"]<a href="http://lh3.ggpht.com/_1K1I6RHdbSw/TAsd9V4yj4I/AAAAAAAAAHE/1bZs_lDuFIQ/WAPT4.png"><img class="size-full wp-image-88  " title="WAPT report graph" src="http://lh3.ggpht.com/_1K1I6RHdbSw/TAsd9V4yj4I/AAAAAAAAAHE/1bZs_lDuFIQ/WAPT4.png" alt="" width="530" height="482" /></a>[/caption]
<h2 style="text-align: center;">Project Info</h2>
<h3>History</h3>
SoftLogica is based out of Novosibirsk, Russia. Their website appears very out of date, with the most recent press release from 2007, and the newest newsletter from 2006.
<h3>Frequency of Releases</h3>
New major versions of WAPT are released on average every two years. The newest version (5.0) was released in May, 2007.
<h3>Active Forums</h3>
<h4>Official Forums</h4>
<ul>
	<li><a href="http://www.loadtestingtool.com/forum/index.php">Official WAPT Forum</a></li>
</ul>
<h4>Unofficial Forums</h4>
<ul>
	<li>N/A</li>
</ul>
<h3>Company URL</h3>
<a href="http://www.softlogica.com/">http://www.softlogica.com/</a><strong> </strong>

<!--EndFragment-->