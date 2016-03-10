        var mouseX = 0;
        var mouseY = 0;
        $(document).mousemove(function (e) {
            mouseX = e.pageX;
            mouseY = e.pageY;
        });

        //Paths for plants declared in variables
        var pathMercury  = "M705,400a95,70 0 1,0 190,0a95,70 0 1,0 -190,0";
        var pathVenus    = "M625,400a175,175 0 1,0 350,0a175,175 0 1,0 -350,0";
        var pathEarth    = "M550,400a250,230 0 1,0 500,0a250,230 0 1,0 -500,0";
        var pathMars     = "M420,400a380,364 0 1,0 760,0a380,364 0 1,0 -760,0";
        var pathJupiter  = "M-500,400a700,620 0 1,0 2600,0a700,620 0 1,0 -2600,0";
        var pathSaturn   = "M-1595,400a900,800 0 1,0 4790,0a900,800 0 1,0 -4790,0";
        var pathUranus   = "M-4000,400a1000,900 0 1,0 9600,0a1000,900 0 1,0 -9600,0";
        var pathNeptune  = "M-6712,400a1100,1000 0 1,0 15024,0a1100,1000 0 1,0 -15024,0";

        //Time for each planet to revolve around sun
        var tpMercury = "4s";
        var tpVenus   = "7s";
        var tpEarth   = "12s";
        var tpMars    = "20s";
        var tpJupiter = "35s";
        var tpSaturn  = "50s";
        var tpUranus  = "80s";
        var tpNeptune = "120s";


        //Make sun glow
        function glowSun(){
            var glow = document.createElementNS(svgNS,"path");
            glow.setAttributeNS(null,"d","M800,400M800,331C853.1162247654456,331,886.313865243849,388.5,859.7557528611262,434.5C847.4300900092945,455.8486742963367,824.6513257036632,469,800,469C746.8837752345544,469,713.6861347561509,411.5,740.2442471388737,365.5C752.5699099907054,344.1513257036633,775.3486742963368,331,800,331C800,331,800,331,800,331");
            glow.setAttributeNS(null,"stroke-linejoin","round");
            glow.setAttributeNS(null,"fill","#ffff33");
            glow.setAttributeNS(null,"stroke","#ffff33");
            glow.setAttributeNS(null,"stroke-linecap","round");
            glow.setAttributeNS(null,"stroke-width","3");
            glow.setAttributeNS(null,"opacity","0.016");
            glow.setAttributeNS(null,"transform","matrix(1,0,0,1,0,0)");
            $("#sun").after(glow);

        }


        //Create Orbit
        function createOrbit(path,id,image) {
            var orbit = document.createElementNS(svgNS,"path");
            orbit.setAttributeNS(null,"d",path);
            orbit.setAttributeNS(null,"id",id);
            orbit.setAttributeNS(null,"stroke","lightgrey");
            orbit.setAttributeNS(null,"fill","none");
            orbit.setAttributeNS(null,"stroke-width",2);

            $("#sun").after(orbit);
        }

        //Start the animation
        function animatePlanet(radius,imageurl,id,path,timePeriod){
            var planet = document.createElementNS(svgNS,"circle");
            planet.setAttributeNS(null,"id",id);
            planet.setAttributeNS(null,"cx","");
            planet.setAttributeNS(null,"cy","");
            planet.setAttributeNS(null,"r",radius);
            planet.setAttributeNS(null,"fill",imageurl);

            var animateMotion = document.createElementNS(svgNS,'animateMotion');
            animateMotion.setAttribute("dur",timePeriod);
            animateMotion.setAttribute("repeatCount","indefinite");
            var mpath = document.createElementNS(svgNS,'mpath');
            mpath.setAttributeNS(xmlns, "xlink:href", path);
            animateMotion.appendChild(mpath);
            planet.appendChild(animateMotion);
            $("path").after(planet);

        }