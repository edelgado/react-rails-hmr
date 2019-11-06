# 🔥 Rails Hot Module Reloading 🔥 

Sample repo that demonstrates HMR in Rails. This repo uses:

- [`react-rails`](https://github.com/reactjs/react-rails) gem.
- [`react-hot-loader`](https://github.com/gaearon/react-hot-loader) JS module.

## Starting the App

```
$ yarn
$ bundle
$ ./bin/webpack-dev-server
$ rails s
```

Go to [http://localhost:3000/pages/home](http://localhost:3000/pages/home).

## 🔥 Try HMR

- 🔎 Note the time the page was rendered by Rails.
- 📝 Edit the implementation of `app/javascript/components/HelloWorld.js` and save the file.
- 🎉 See the changes happen without a page reload! 
