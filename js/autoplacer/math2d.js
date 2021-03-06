

/*
 * 2d-math stuff; 
 */
define([], function(m) {
  
	var inc = function(t, s) {
		t[0] += s[0];
		t[1] += s[1];
		return t;
	};
	var dec = function(t, s) {
		t[0] -= s[0];
		t[1] -= s[1];
		return t;
	};
	var mul = function(t, s) {
		t[0] *= s;
		t[1] *= s;
		return t;
	};
	var sqrlen = function(t) {
		var t0 = t[0], t1 = t[1];
		return t0*t0 + t1*t1;
	}
	var len = function(t) {
		var t0 = t[0], t1 = t[1];
		return Math.sqrt(t0*t0 + t1*t1);
	}
	var setlen = function(t, newlen) {
		var t0 = t[0], t1 = t[1], k;
		if (
			(t0 === 0) ||
			(t1 === 0)
		) {
			return t;
		}
		k = newlen/Math.sqrt(t0*t0 + t1*t1);
		t[0] *= k;
		t[1] *= k;	
		return t;
	}

	var rectptmid = function(r) {
		return [r[0] + r[2]/2, r[1] + r[3]/2] 
	}

	return {
		inc: inc,
		dec: dec,
		mul: mul,
		sqrlen: sqrlen,
		len: len,
		setlen: setlen,
		rectptmid: rectptmid
	}
});