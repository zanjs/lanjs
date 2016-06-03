# Lanjs

```html
<body>

  <img src="img/loading.gif" Lan="img/photo.jpg">

  <script src="dist/Lan.js"></script>
  <script>
  Lan.init({
    offset: 100,
    throttle: 250,
    unload: false,
    callback: function (element, op) {
      console.log(element, 'has been', op + 'ed')
    }
  });

  // Lan.render(); is also available for non-scroll callbacks
  </script>
</body>
```


## License

MIT
