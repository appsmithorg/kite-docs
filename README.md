# Kite Documentation

Documentation site for [Kite](https://kite.ai), built with [Docusaurus](https://docusaurus.io/).

Kite is your AI marketer in Slack. It researches your business, builds a growth strategy, and ships the work that brings you new customers. Most AIs wait for instructions. Kite finds what needs doing and does it. Building and hosting your website is one of the ways it executes that strategy.

## Development

```bash
cd website
npm install
npm start
```

## Build

```bash
npm run build
```

## Search

Search is powered by the offline [`@easyops-cn/docusaurus-search-local`](https://github.com/easyops-cn/docusaurus-search-local)
plugin, which builds the index from Markdown at build time. The index is **only
generated during `npm run build`, not during `npm start`**, so to test search
locally, run a production build and serve it:

```bash
npm run build
npm run serve
```
## Deployment

App is deployed via Vercel integration
