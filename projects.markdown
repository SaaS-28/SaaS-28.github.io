---
layout: page
title: Projects
permalink: /projects/
---

<div class="projects-container">
    {% for project in site.projects %}
      <a href="{{ project.url }}">
        {{ project.title }}
      </a>
    {% endfor %}
</div>

<!-- <p style="text-align: center">Still working on this page :(</p> -->