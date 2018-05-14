block('page-index').content()(function() {
  var data = this.data;
  return data.hello + ', ' + data.world + '!';
});
