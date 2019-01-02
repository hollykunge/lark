# vue-nw-seed

> A seed project with Vue.js and Nw.js

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# only build nw
npm run build --onlyNW

# default is build `setup.exe` in windows
npm run build --noSetup
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## FAQ
### Why nw@0.14.7 ？
Not all of NW.js support `XP`, because from the beginning of `Chromium50` does not support the XP, so if your client want to support XP, the best of version is `0.14.7`. See NW.js's blog: [NW.js v0.14.7 (LTS) Released](https://nwjs.io/blog/v0.14.7/)
