# Vue.js 3 Embedded Widget

## Overview

In certain scenarios, integrating a Single Page Application as an embedded widget into external websites becomes necessary. This project addresses the challenges associated with creating a versatile Vue.js 3 widget that seamlessly integrates into any website without imposing specific conditions.

## Features

- **Versatility:** The widget is designed to be easily integrated into any website, maintaining visual aesthetics and workflow while remaining self-contained.
  
- **Isolation:** The embedded widget ensures it remains isolated to prevent interference with the styling of the parent site or disruption of external site functions.

## Technologies Used

- [Vue.js 3](https://vuejs.org/): Application framework
- [Vite](https://vitejs.dev/): Build and compilation tool
- [Tailwind CSS](https://tailwindcss.com/): Styling
- [Custom Elements API](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements): Define and use custom HTML element as the widget
- [Shadow Root](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot?retiredLocale=uk): Part of Custom Elements API to encapsulate widget DOM element

## Example Use Case

This project serves as a comprehensive example of transforming a Vue.js 3 Single Page Application into a fully functional embedded widget. The practical example demonstrates creating a countdown widget for tracking the time remaining until a specific date or event, such as the start of the New Year or the end of discount campaigns.

It should be use like this in external site: 

- include widget.js script in <head></head> section of external site
- include <countdown-widget></countdown-widget> tag in <body></body> section of external site with required attributes that apply countdown logic.

Like this:

<countdown-widget 
   date="2024-06-14" 
   title="Euro 2024 will start in"
   end="Euro 2024 is started!"
   color="#FF0000">
</countdown-widget>

So at the end you need to configure your web server virtual host to reach the widget.js (like http://yourhost.com/widget.js)

## Installation

1. Clone (or fork) this project 

```bash
git clone git@github.com:labrodev/vuejs-widget-embedded.git
```

2. Install packages 

```bash
npm install
```

3. Build widget.js 

```bash
npx vite build
```

In /dist folder you may find compiled widget.js and styles.css files. 

4. Configure virtual host 

Nginx example:

```text
server {
     listen 80;

     root /var/www/vuejs-embedded-widget/dist;

     server_name yourhost;

     location / {
        try_files $uri $uri/ /index.html?$query_string;
     }
}
```

Make sure that virtual host works and yourhost/widget.js is reachable. 

## Usage

Implement embedded widget in your desired external site to check results. 

### Head Section:

```html
<script src="http://yourhost.com/widget.js" defer></script>
```

### Body Section:

```html
<countdown-widget 
   date="2024-06-14" 
   title="Euro 2024 will start in"
   end="Euro 2024 is started!"
   color="#FF0000">
</countdown-widget>
```

## Additional information 

You may find detailed step-by-step guide how to turn Vue.js 3 application to embedded widget in [our blog on Substack](https://labrodev.substack.com/p/turn-vuejs-30-spa-to-embedded-widget?r=2zv4d4&utm_campaign=post&utm_medium=web) (don't forget to subscribe!)

Enjoy and thanks for your attention! 

