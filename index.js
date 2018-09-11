function rafAfter(callback) {
  requestAnimationFrame(function () {
    requestAnimationFrame(callback);
  });
}

export default rafAfter;