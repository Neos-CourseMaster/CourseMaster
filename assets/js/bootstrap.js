"use strict";
!(function () {
  var e = document.querySelectorAll(".svg-shim > svg");
  /MSIE \d|Trident.*rv:/.test(navigator.userAgent) &&
    [].forEach.call(e, function (e) {
      !(function (e) {
        var t = window.getComputedStyle(e, null).getPropertyValue("color"),
          n = new XMLSerializer().serializeToString(e);
        n =
          "data:image/svg+xml," +
          (n = (n = (n = (n = (n = (n = n.replace(/currentColor/g, t)).replace(
            /\s\s+/g,
            " "
          )).replace(/</g, "%3C")).replace(/>/g, "%3E")).replace(
            /#/g,
            "%23"
          )).replace(/"/g, "'"));
        var o = document.createElement("img");
        (o.src = n), (o.alt = "...");
        var a = e.parentNode;
        a.appendChild(o), a.removeChild(e);
      })(e);
    });
})(),
  "undefined" != typeof AOS &&
    AOS.init({
      duration: 700,
      easing: "ease-out-quad",
      once: !0,
      startEvent: "load",
    }),
  (function () {
    var e = document.querySelectorAll("[data-choices]");
    "undefined" != typeof Choices &&
      e &&
      [].forEach.call(e, function (e) {
        !(function (e) {
          var t = e.dataset.choices ? JSON.parse(e.dataset.choices) : {},
            n = {
              searchEnabled: !1,
              classNames: {
                containerInner: e.className,
                list: "none",
                listSingle: "none",
                listDropdown: "dropdown-menu",
                itemChoice: "dropdown-item",
                activeState: "show",
                selectedState: "active",
              },
            },
            o = Object.assign(n, t);
          new Choices(e, o);
        })(e);
      });
  })(),
  (function () {
    var e = document.querySelectorAll('[data-toggle="countup"]');
    function n(e) {
      var t = e.dataset.from ? +e.dataset.from : null,
        n = e.dataset.to ? +e.dataset.to : null,
        o = e.dataset.decimals ? +e.dataset.decimals : null,
        a = e.dataset.duration ? +e.dataset.duration : null,
        l = e.dataset.options ? JSON.parse(e.dataset.options) : null,
        i = new CountUp(e, t, n, o, a, l);
      i.error
        ? console.error(i.error)
        : (i.start(), e.classList.add("counted"));
    }
    "undefined" != typeof CountUp &&
      e &&
      [].forEach.call(e, function (e) {
        "countup:in" !== e.getAttribute("data-aos-id") && n(e);
      }),
      document.addEventListener("aos:in:countup:in", function (e) {
        if (e.detail instanceof Element) n(e.detail);
        else {
          var t = document.querySelectorAll(
            '.aos-animate[data-aos-id="countup:in"]:not(.counted)'
          );
          [].forEach.call(t, function (e) {
            n(e);
          });
        }
      });
  })(),
  (function () {
    var e = document.querySelectorAll(".countdown");
    if (null != e)
      for (var t = 0; t < e.length; t++) {
        var n,
          o,
          a,
          l,
          i = e[t].dataset.countdown,
          r = e[t].querySelector(".countdown-days .countdown-value"),
          c = e[t].querySelector(".countdown-hours .countdown-value"),
          d = e[t].querySelector(".countdown-minutes .countdown-value"),
          s = e[t].querySelector(".countdown-seconds .countdown-value");
        if (((i = new Date(i).getTime()), isNaN(i))) return;
        setInterval(u, 1e3);
      }
    function u() {
      var e = new Date().getTime(),
        t = parseInt((i - e) / 1e3);
      0 <= t &&
        ((n = parseInt(t / 86400)),
        (t %= 86400),
        (o = parseInt(t / 3600)),
        (t %= 3600),
        (a = parseInt(t / 60)),
        (t %= 60),
        (l = parseInt(t)),
        null != r && (r.innerHTML = parseInt(n, 10)),
        null != c && (c.innerHTML = o < 10 ? "0" + o : o),
        null != d && (d.innerHTML = a < 10 ? "0" + a : a),
        null != s && (s.innerHTML = l < 10 ? "0" + l : l));
    }
  })(),
  (function () {
    var e = document.querySelectorAll(
        ".navbar-nav .dropdown, .navbar-nav .dropright"
      ),
      o = ["mouseenter"],
      a = ["mouseleave", "click"];
    [].forEach.call(e, function (t) {
      var n = t.querySelector(".dropdown-menu");
      o.forEach(function (e) {
        t.addEventListener(e, function () {
          !(function (e) {
            window.innerWidth < 992 ||
              (e.classList.add("showing"),
              setTimeout(function () {
                e.classList.remove("showing"), e.classList.add("show");
              }, 1));
          })(n);
        });
      }),
        a.forEach(function (e) {
          t.addEventListener(e, function (e) {
            !(function (e, t) {
              window.innerWidth < 992 ||
                (t.classList.contains("show") &&
                  (("click" === e.type &&
                    e.target.closest(".dropdown-menu form")) ||
                    (t.classList.add("showing"),
                    t.classList.remove("show"),
                    setTimeout(function () {
                      t.classList.remove("showing");
                    }, 200))));
            })(e, n);
          });
        });
    }),
      $(".quantity-plus, .quantity-minus").on("click", function (e) {
        var t = $(e.target).closest(".quantity-minus").is(".quantity-minus"),
          n = $(e.target).closest(".quantity-increment").find("input");
        n.is("input") && (t ? n[0].stepDown() : n[0].stepUp());
      });
  })(),
  (function () {
    var e = document.querySelectorAll("[data-dropzone]");
    "undefined" != typeof Dropzone &&
      e &&
      ((Dropzone.autoDiscover = !1),
      (Dropzone.thumbnailWidth = null),
      (Dropzone.thumbnailHeight = null),
      [].forEach.call(e, function (e) {
        !(function (e) {
          var t = void 0,
            n = e.dataset.dropzone ? JSON.parse(e.dataset.dropzone) : {},
            o = {
              previewsContainer: e.querySelector(".dz-preview"),
              previewTemplate: e.querySelector(".dz-preview").innerHTML,
              init: function () {
                this.on("addedfile", function (e) {
                  1 == n.maxFiles && t && this.removeFile(t), (t = e);
                });
              },
            },
            a = Object.assign(o, n);
          (e.querySelector(".dz-preview").innerHTML = ""), new Dropzone(e, a);
        })(e);
      }));
  })(),
  jQuery().fancybox &&
    (($.fancybox.defaults.image.preload = !1),
    ($.fancybox.defaults.toolbar = !1),
    ($.fancybox.defaults.clickContent = !1)),
  (function () {
    var e = document.querySelectorAll(".highlight");
    "undefined" != typeof hljs &&
      e &&
      [].forEach.call(e, function (e) {
        !(function (e) {
          hljs.highlightBlock(e);
        })(e);
      });
  })(),
  (function () {
    var e = $("[data-isotope]");
    $("[data-filter]").on("click", function () {
      var e = $(this),
        t = e.data("filter"),
        n = e.data("target");
      $(n).isotope({ filter: t });
    }),
      e.imagesLoaded().progress(function () {
        e.isotope("layout");
      });
  })(),
  (function () {
    var e = document.querySelectorAll('[data-toggle="map"]');
    "undefined" != typeof mapboxgl &&
      e &&
      [].forEach.call(e, function (e) {
        !(function (e) {
          var t = e.dataset.options;
          t = t ? JSON.parse(t) : {};
          var n = {
              container: e,
              style: "mapbox://styles/mapbox/light-v9",
              scrollZoom: !1,
              interactive: !1,
            },
            o = Object.assign(n, t);
          (mapboxgl.accessToken =
            "pk.eyJ1IjoiZ29vZHRoZW1lcyIsImEiOiJjanU5eHR4N2cybDU5NGVwOHZwNGprb3E0In0.msdw9q16dh8v4azJXUdiXg"),
            new mapboxgl.Map(o);
        })(e);
      });
  })(),
  (function () {
    var e = document.querySelectorAll(".modal");
    function t() {
      var e = window.innerWidth - document.documentElement.clientWidth;
      (document.documentElement.style.overflow = "hidden"),
        (document.body.style.paddingRight = e + "px");
    }
    $(e).on({
      "show.bs.modal": function () {
        t();
      },
      "hidden.bs.modal": function () {
        (document.documentElement.style.overflow = ""),
          (document.body.style.paddingRight = "");
      },
    });
  })(),
  (function () {
    var e = document.querySelectorAll(".navbar-togglable"),
      t = document.querySelectorAll(".navbar-collapse"),
      n = ["load", "scroll"],
      o = !1;
    function a(e) {
      var t = window.pageYOffset;
      t &&
        !o &&
        (function (e) {
          e.classList.remove("navbar-dark"),
            e.classList.add("navbar-light"),
            e.classList.add("bg-white"),
            (o = !0);
        })(e),
        t ||
          (function (e) {
            e.classList.remove("navbar-light"),
              e.classList.remove("bg-white"),
              e.classList.add("navbar-dark"),
              (o = !1);
          })(e);
    }
    function l() {
      var e = window.innerWidth - document.documentElement.clientWidth;
      (document.documentElement.style.overflow = "hidden"),
        (document.body.style.paddingRight = e + "px");
    }
    [].forEach.call(e, function (t) {
      n.forEach(function (e) {
        window.addEventListener(e, function () {
          a(t);
        });
      });
    }),
      [].forEach.call(t, function (e) {
        $(e).on({
          "show.bs.collapse": function () {
            l();
          },
          "hidden.bs.collapse": function () {
            (document.documentElement.style.overflow = ""),
              (document.body.style.paddingRight = "");
          },
        });
      });
  })(),
  [].slice
    .call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    .map(function (e) {
      return new bootstrap.Popover(e);
    }),
  (function () {
    var e = document.querySelector('[data-toggle="price"]');
    "undefined" != typeof CountUp &&
      e &&
      e.addEventListener("change", function (e) {
        !(function (e) {
          var t = e.target,
            r = t.checked,
            n = t.dataset.target,
            o = document.querySelectorAll(n);
          [].forEach.call(o, function (e) {
            var t = e.dataset.annual,
              n = e.dataset.monthly,
              o = e.dataset.decimals ? e.dataset.decimals : null,
              a = e.dataset.duration ? e.dataset.duration : 1,
              l = e.dataset.options ? JSON.parse(e.dataset.options) : null,
              i = r
                ? new CountUp(e, t, n, o, a, l)
                : new CountUp(e, n, t, o, a, l);
            i.error ? console.error(i.error) : i.start();
          });
        })(e);
      });
  })(),
  (function () {
    var e = document.querySelectorAll("[data-quill]");
    "undefined" != typeof Quill &&
      e &&
      [].forEach.call(e, function (e) {
        !(function (e) {
          var t = e.dataset.quill ? JSON.parse(e.dataset.quill) : {},
            n = Object.assign(
              {
                modules: {
                  toolbar: [
                    ["bold", "italic"],
                    ["link", "blockquote", "code", "image"],
                    [{ list: "ordered" }, { list: "bullet" }],
                  ],
                },
                theme: "snow",
              },
              t
            );
          new Quill(e, n);
        })(e);
      });
  })(),
  (function () {
    var e = '[data-toggle="smooth-scroll"]';
    "undefined" != typeof SmoothScroll &&
      new SmoothScroll(e, {
        header: ".navbar.fixed-top",
        offset: function (e, t) {
          return t.dataset.offset ? t.dataset.offset : 24;
        },
      });
  })(),
  [].slice
    .call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    .map(function (e) {
      return new bootstrap.Tooltip(e, { trigger: "hover" });
    }),
  (function () {
    var e = document.querySelectorAll('[data-toggle="typed"]');
    "undefined" != typeof Typed &&
      e &&
      [].forEach.call(e, function (e) {
        !(function (e) {
          var t = e.dataset.options;
          t = t ? JSON.parse(t) : {};
          var n = Object.assign(
            { typeSpeed: 40, backSpeed: 40, backDelay: 1e3, loop: !0 },
            t
          );
          new Typed(e, n);
        })(e);
      });
  })(),
  "undefined" != typeof Parallax &&
    (function () {
      for (
        var e = document.querySelectorAll(".cs-parallax"), t = 0;
        t < e.length;
        t++
      )
        new Parallax(e[t]);
    })();
