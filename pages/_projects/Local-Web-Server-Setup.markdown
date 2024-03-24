---
layout: page
title: Local Web Server Setup
---

<div class="single-project-container">
    <h1>{{ page.collection | upcase }}</h1>
    <h2>{{ page.title }}</h2>
    <p class="description">
        Bash script that <strong>downloads</strong>, <strong>installs</strong> and <strong>configures</strong> automatically all the packages needed to run a <strong>web server</strong> on the <strong>local network</strong>.<br>
        The script has been tested and works perfectly using <a href="https://github.com/M4rga/debian12-server-setup" target="_blank">M4rga's debian12 preseed</a> and uses <strong>HTTP protocol</strong>, so it is a real basic setup for testing or just personal purpose.
    </p>
    <h3>Before running the script</h3>
    <p class="description">
        With the debian 12 virtual machine <u>closed</u> , right click on the machine &rarr; settings &rarr; network and <strong>change</strong> the entry `"Connected to"` from <strong>NAT</strong> to <strong>Board with bridge</strong>. - <em>if you are not using a virtual machine you do not need to do this step.</em><br>
        <blockquote><strong>NOTE</strong>: This won't allow you to connect with SSH anymore.</blockquote>
    </p>
    <p class="description">
        After starting the VM again, type<br>
        <code>ip a</code><br>
        so you can see the <strong>ip</strong> and <strong>gateway</strong> your machine is using.<br>
        Now type<br>
        <code>sudo nano main.sh</code><br>
        and edit the file where the <strong>*!</strong> mark can be seen <u>(follow the instructions written on the file)</u>.<br>
        <blockquote><strong>NOTE</strong>: I advise you not to change anything except the one highlighted by <strong>*!</strong>.</blockquote>
    </p>
    <h3>How to run</h3>
    <p class="description">
        With your file on your <strong>home directory</strong>(Should be `/home/mainuser`), type<br>
        <code>sudo ./main.sh</code><br>
        and <strong>wait</strong> until the <strong>entire process has finished</strong>.
        Once you have done this, your virtual machine will <strong>work as a web server</strong>.
    </p>
    <h3>Final steps</h3>
    <p class="description">
        You can simply <strong>copy</strong> your <em>html</em>, <em>css</em>, <em>js</em> and <em>php</em> files in `/var/www/html/name-of-your-site`.<br>
        You can see the <strong>index page of your web server</strong> by typing `your-ip/name-of-your-site`.<br>
        e.g. `192.168.x.x/site`<br>
        If you want to access your site with the <strong>name</strong> you <strong>assigned prievously</strong>, you have to modify the <strong>hosts</strong> file.
    </p>
    <h3>Modify hosts file</h3>
    <p class="description">
        Open with notepad the <strong>file hosts</strong> wich you can find at `C:\Windows\System32\drivers\etc` if you are on <strong>Windows</strong>. If you are on <strong>Linux/MacOs</strong> type the following command in the terminal:<br>
        <code>sudo nano /etc/hosts</code><br>
        Now write in the bottom of the file the <strong>ip</strong> and the <strong>name</strong> you assigned at the web server seprated by <strong>TAB</strong> key.
        e.g. `192.168.x.x   site`.
        Make sure to <strong>save the file</strong> and <strong>restart your pc</strong>.
        <a class="download-link" href="https://github.com/SaaS-28/file-manager-php/archive/refs/heads/main.zip" target="_blank">Link to download</a>
    </p>
</div>