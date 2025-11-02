# Perfnow:

## Day 2 Intro - Tim Kadelac
<ul>
    <li>Stubborn Empathy - persistence with user understanding</li>
    <li>Monoculture - danger of one-sided development</li>
    <li>Machine - abstractions without accountability</li>
    <li><strong>The local host delusion</strong>missing problems that real users experience</li>
    <li>Cross-browser testing = user advocacy</li>
    <li>GitHub → cloudflare/telescope (useful tool)</li>
    <li><strong>AI slop</strong>Lots of code, generated very fast also 9% more bugs per developer</li>
    <li>4.3.1 indicator - quality measurement</li>
    <li>How efficiently and enjoyably can users complete their tasks?</li>
    <li>Uncompromising quality + user delight</li>
</ul>

## LoAF - Andy Davies
<ul>
    <li><a href='https://andydavies.me/'>Andy Davies</a> website</li>
    <li>JavaScript runtimes are hidden performance danger</li>
    <li>LOAF → Long Animation Frames</li>
    <li>Scripts can force style and layout</li>
    <li>Often one long task before DomContentLoaded</li>
    <li>Longest LoAF = maximum potential input delay</li>
    <li>Default thresholds need measurements</li>
    <li>Are third parties really the problem?</li>
    <li><a href='https://webperf-snippets.nucliweb.net/'>webperf-snippets</a> - useful code snippets</li>
</ul>

## Measuring Interactions and Navigations - Michal Mocney
<ul>
    <li>Rendering → layout shifts</li>
    <li><strong>Transitional web</strong>cross-document navigation & same-document - 20/50% of all websites</li>
    <li>Incoming + outgoing experience = total user experience</li>
    <li>Measuring key user interactions</li>
    <li>TaskAttribution - who does what?</li>
    <li>Container timing for paints</li>
    <li>Apply same heuristics</li>
    <li>Have single-app pages ruined the web?</li>
</ul>

## React, Rendering, Performance - Nadia Makarevich
<ul>
    <li><a href='https://www.developerway.com/'>DeveloperWay</a>website</li>
    <li>CSR (client-side rendering) - rendering in browser</li>
    <li>SSR (server-side rendering) - rendering on server</li>
    <li>React starts with "entry" and builds with components</li>
    <li>CSR = less secure</li>
    <li>Server routing + entry per page</li>
    <li>< suspense > splits code into chunks</li>
</ul>

## Web Performance Speculations - Barry Pollard
<ul>
    <li>@tunetheweb on social media</li>
    <li><strong>loading = Lazy</strong>in HTML voor < iframe > en < img ></li>
    <li><strong>fetchPriority = high</strong> HTML, Cheatcode to improve LCP (Largest Contentful Paint), < link > & < img ></li>
    <li><strong>scheduler.yield()</strong></li>
    <li>New features are more interesting</li>
    <li>More work than available time</li>
    <li>< link rel="prefetch" > - preload resources</li>
    <li>Prefetch less risky than prerender</li>
    <li>Prerender stops at scripts</li>
</ul>

## DevTools, AI, Insights - Vinicius Dallacqua
<ul>
    <li><a href='https://agent.perflab.io/'>Agent.perflab</a> - AI tool for performance</li>
    <li>Trace file: convert noise to useful signals</li>
    <li>AI SOK + Mastra - AI analysis tools</li>
</ul>

## Fine-grained Everything - Rich Harris (Sveltekit)
<ul>
    <li>Data problem not yet solved</li>
    <li>SSR is about performance</li>
    <li>Computers should work for us, not the other way around</li>
    <li>Feature = how it feels to use the app</li>
    <li>Multi page apps are expensive - but feel cheap</li>
</ul>