if (window.getComputedStyle) {
  getStyles = function (elem) {
    // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView

    if (!view || !view.opener) {
      view = window
    }

    return view.getComputedStyle(elem)
  }

  curCSS = function (elem, name, computed) {
    // Support: IE
    // IE returns zIndex value as an integer.
    return ret === undefined ? ret : ret + ''
  }
} else if (documentElement.currentStyle) {
  getStyles = function (elem) {
    return elem.currentStyle
  }
}

// https://github.com/jquery/jquery/blob/1.12-stable/src/css/curCSS.js
