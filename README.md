# Lanjs

[![Greenkeeper badge](https://badges.greenkeeper.io/zanjs/lanjs.svg)](https://greenkeeper.io/)

```html
<body>

  <img src="img/loading.gif" Lan="img/photo.jpg">

  <script src="dist/lan.js"></script>
  <script>
  Lan.init({
    callback: function (element, op) {
      console.log(element, 'has been', op + 'ed')
    }
  });

  // Lan.render(); 
  // 也可用于非滚动回调
  // is also available for non-scroll callbacks
  </script>
</body>
```

## default

```
offset: 100,
throttle: 250,
unload: false,
callback: function
```

## License

MIT
