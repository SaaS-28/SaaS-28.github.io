---
layout: page
title: File Manager PHP
---

<div class="single-project-container">
    <h1>{{ page.collection | upcase }}</h1>
    <h2>{{ page.title }}</h2>
    <p class="description">
        Simple <strong>file manager</strong> made with <strong>HTML</strong>, <strong>CSS</strong>, <strong>JS</strong> and <strong>PHP</strong> languages.<br>
        The program handles <strong>sending</strong> and <strong>receiving data</strong> with PHP and JS. With <strong>JS</strong> the program <strong>handles</strong> the <strong>AJAX requests</strong> used for keeping the "database" always up to date.<br>
        <strong>PHP</strong> instead is <strong>used</strong> for all the <strong>other things</strong>.<br>
        <strong>HTML</strong> and <strong>CSS</strong> are <strong>used</strong> to give the user the <strong>best visual experience</strong> possible.
    </p>
    <h3>Installation and use</h3>
    <p class="description">
        The <strong>files</strong> are easilly installable and are <strong>arranged correctly</strong> within the <em>root folder</em>. You can change the code according to your needs very easily as most of the code is <em>commented</em>.<br>
        If you want to test the code and then its operation, you can do it by using <a href="https://www.apachefriends.org/it/index.html" target="_blank">XAMPP</a>. You can also test it on a real server. That’s why I made a guide for <a href="https://github.com/SaaS-28/local-web-server-setup" target="_blank">setupping a local web server with debian</a>.
    </p>
    <h3>Button-Version</h3>
    <p class="description">
        In this version you search for people by typing in the input field and then clicking the <strong>submit button</strong>. With the button clicked, the AJAX request is sent and processed into a <strong>separate file</strong>. This will bring the visualization of the part of the table concerned.
    </p>
    <h3>Real-Time-Update-Version</h3>
    <p class="description">
        In this version the whole process is done in <strong>postback</strong> and then in a single file. The AJAX request is sent simply by searching in the input field, in fact every time the <strong>field is updated</strong>, the request will show different parts of the table according to the one searched.
        <a class="download-link" href="https://github.com/SaaS-28/file-manager-php/archive/refs/heads/main.zip" target="_blank">Link to download</a>
    </p>
</div>