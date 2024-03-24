---
layout: page
title: Cpp Environment Setup
---

<div class="single-project-container">
    <h1>{{ page.collection | upcase }}</h1>
    <h2>{{ page.title }}</h2>
    <p class="description">
        Powershell script that <strong>downloads</strong>, <strong>installs</strong> and <strong>configures</strong> the c and c++ compiler <strong>automatically</strong>.<br>
        This script is written based on the <a href="https://code.visualstudio.com/docs/cpp/config-mingw" target="_blank">Visual Studio Code guide</a> and using <a href="https://www.msys2.org/" target="_blank">MSYS</a>.
    </p>
    <h3>How to run</h3>
    <p class="description">
        First, make sure you have <strong>permission</strong> to run the scripts locally. To do this you simply open PowerShell as <strong>administrator</strong> and type the following command.<br>
        <code>Set-ExecutionPolicy RemoteSigned.</code><br>
        You will now need to type `A` and then you will be able to run the script.<br>
        Select the main.ps1 file then `right-click` &rarr; `Run with PowerShell`.<br>
        <blockquote><strong>NOTE:</strong> Do not press any key during the whole process</blockquote>
    </p>
    <h3>Visual Studio Code</h3>
    <p class="description">
        Open <a href="https://code.visualstudio.com/Download" target="_blank">Visual Studio Code guide</a>, download and install the <a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools-extension-pack" target="_blank">C/C++ Extension Pack</a>.<br>
        Now press the `Run C/C++ File` button on the top-right corner.<br>
        Select the <strong>g++ compiler</strong>. If you missclick this just press `F5` and select again.<br>
        <blockquote><strong>NOTE</strong> You might need to press the button a second time</blockquote>
    </p>
    <h3>Windows defender problems</h3>
    <p class="description">
        You might have some <strong>problems</strong> with <strong>Windows Defender</strong> while running yout c++ scripts so read this only if you get a Windows Defender notification just after you start compiling your script.<br>
        To <strong>fix</strong> this just go to the `Virus & threat protection settings`, scroll down and click on the `Add or remove exclusions` under the <strong>Exclusion</strong> section.<br>
        You now have to click on the `Add an exclusion button` and press <strong>folder</strong>. Select the folder where you save your c++ files.<br><br>
        <a class="download-link" href="https://github.com/SaaS-28/cpp-environment/archive/refs/heads/main.zip" target="_blank">Link to download</a>
    </p>
</div>