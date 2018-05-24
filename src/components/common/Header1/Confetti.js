import jQuery from 'jquery';

var confettiColors = ["#f15b2a", "#ec008c", "#65316b", "#009eb5", "#4cba72", "#ffc20e"];
var confettiClear = true;

function createConfetti(a, b) {
    return Array.from({
        length: b
    }).map(function(e, d) {
        var c = confettiColors[d % confettiColors.length];
        var f = document.createElement("div");
        f.classList = ["fetti"];
        f.style["background-color"] = c;
        f.style['z-index'] = 999999;
        f.style.width = "10px";
        f.style.height = "10px";
        f.style.borderTopLeftRadius = "10px";
        f.style.borderTopRightRadius = "8px";
        f.style.borderBottomLeftRadius = "6px";
        f.style.borderBottomRightRadius = "12px";
        f.style.position = "absolute";
        f.style.opacity = 1;
        a.appendChild(f);
        return f
    })
}

function randomPhysics(e, c, a) {
    var b = e * (Math.PI / 180);
    var d = c * (Math.PI / 180);
    return {
        x: 70,
        y: -20,
        wobble: Math.random() * 10,
        velocity: 5 + Math.random() * a,
        angle2D: -b + (0.5 * d - Math.random() * d),
        angle3D: -(Math.PI / 4) + Math.random() * (Math.PI / 2),
        tiltAngle: Math.random() * Math.PI
    }
}

function updateFetti(b, a, d) {
    b.physics.x += Math.cos(b.physics.angle2D) * b.physics.velocity;
    b.physics.y += Math.sin(b.physics.angle2D) * b.physics.velocity;
    b.physics.z += Math.sin(b.physics.angle3D) * b.physics.velocity;
    b.physics.wobble += 0.05;
    b.physics.velocity *= d;
    b.physics.y += 3;
    b.physics.tiltAngle += 30.1;
    var i = b.physics;
    var h = i.x;
    var g = i.y;
    var e = i.tiltAngle;
    var f = i.wobble;
    var k = h + 10 * Math.cos(f);
    var j = g + 10 * Math.sin(f);
    var c = "translate3d(" + k + "px, " + j + "px, 0) rotateZ(" + e + "deg)";
    b.element.style.transform = c;
    b.element.style.opacity = Math.min(1 - a, 1000 - g)
}

function animateConfetti(b, e, d) {
    var a = 100;
    var c = 0;

    function f() {
        e.forEach(function(g) {
            return updateFetti(g, c / a, d)
        });
        c += 1;
        if (c < a) {
            requestAnimationFrame(f);
            if (c == a / 2) {
                confettiClear = true
            }
        } else {
            e.forEach(function(g) {
                return b.removeChild(g.element)
            })
        }
    }
    requestAnimationFrame(f)
}

function confetti(n) {
    if (confettiClear) {
        confettiClear = false;
        var g = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        var p = g.angle;
        var f = p === undefined ? 230 : p;
        var c = g.decay;
        var h = c === undefined ? 0.88 : c;
        var k = g.spread;
        var m = k === undefined ? 360 : k;
        var i = g.startVelocity;
        var j = i === undefined ? 25 : i;
        var b = g.elementCount;
        var e = b === undefined ? 80 : b;
        var l = new Date();
        l.setTime(l.getTime() + (7 * 24 * 60 * 60 * 1000));
        document.cookie = "bang=1; expires=" + l.toUTCString() + "; path=/; domain=pluralsight.com";
        var a = createConfetti(n, e);
        var o = a.map(function(d) {
            return {
                element: d,
                physics: randomPhysics(f, m, j)
            }
        });
        animateConfetti(n, o, h)
    }
}


jQuery(function() {

    jQuery(document).on({
        mouseover: function() {
            jQuery(this).css("animation", "none");
            confetti(jQuery(".surprise-hover")[0])
        }
    }, ".surprise-hover");

});
