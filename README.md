# ⚡ Web Performance & Tracking Utilities (`web-perf-utils`)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

A lightweight, zero-dependency suite of production-tested JavaScript utilities designed to optimize DOM performance, handle dynamic event listeners, and prevent main-thread blocking during third-party tag execution.

---

## 🎯 Overview & Mission

Modern open-source CMS ecosystems and web applications often suffer from significant main-thread latency caused by bulky event-tracking scripts and unoptimized DOM access patterns. 

**`web-perf-utils`** bridges the gap between high-frequency analytics/conversion tracking and high Core Web Vitals performance. It offers a collection of modular scripts and event wrappers engineered to execute asynchronously without triggering unnecessary reflows or blocking layout paint.

---

## 🚀 Key Features

* **Zero Dependencies:** Written in plain, modular ECMAScript for minimal footprint (< 1.5 KB minified).
* **Non-Blocking DOM Listeners:** Efficient DOM interaction handlers (e.g., dynamic form submission hooks, call conversion tags) leveraging passive listeners and `requestAnimationFrame`.
* **Async `dataLayer` Dispatcher:** Safe queue-based wrapper for pushing structured JSON events without execution delay.
* **Layout Thrashing Prevention:** Batched DOM read/write execution pipelines.
* **Open Source & Extensible:** Easily integrable into WordPress, React, Webflow, or custom backend frameworks under an MIT license.

---

## 📦 Installation & Setup

### Option 1: Direct Script Injection
Include the production bundle before the closing `</body>` tag:

```html
<script src="[https://cdn.jsdelivr.net/gh/your-username/web-perf-utils@main/dist/perf-utils.min.js](https://cdn.jsdelivr.net/gh/your-username/web-perf-utils@main/dist/perf-utils.min.js)" defer></script>
