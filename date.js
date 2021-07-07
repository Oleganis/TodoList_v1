exports.getDate = function() {
  const today = new Date();
  options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  return day = today.toLocaleDateString("en-US", options);
}

exports.getDay = function() {
  const today = new Date();
  options = {
    weekday: 'long',
  };

  return day = today.toLocaleDateString("en-US", options);
}
