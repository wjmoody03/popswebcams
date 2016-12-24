var app = angular.module('cams',['ui.knob','circle.countdown']).config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'http://streams.seejh.com/**'
  ])
});

app.controller('camCtrl',function($scope, $http,$interval){
    
    $scope.interval = 15;
    $scope.cycleActive = true;
    $scope.mapZoom = 4;
    $scope.rando = function(url){
        $scope.refreshed = Date.now();
        return url + "?rand=" + Date.now();        
    };
    
    $scope.cams = [
        {
            "title":"Teton Climbers Ranch",
            "url":"http://www.americanalpineclub.org.php56-21.dfw3-2.websitetestlink.com/images/gtcr_webcam/webcam.jpg",
            "type":"img",
            "location":{lat:43.7048618, lng:-110.7352089}
        },
        {
            "title":"Grand Teton Live View",
            "url":"http://streams.seejh.com/?cameraName=dornans",
            "thumbnail":"http://webcams.alltrips.com/thumbs/webcamthumb_3223.jpeg",
            "type":"video",
            "location":{lat:43.6569093, lng:-110.712944}
        },
        {
            "title":"Old Faithful",
            "url":"http://www.nps.gov/webcams-yell/oldfaithvc.jpg?1481751658328",
            "type":"img",
            "location":{lat:44.4604788, lng:-110.8303263}
        },
        {
            "title":"Crater Lake",
            "url":"https://www.nps.gov/webcams-crla/camerasinnott.jpg?201611141342",
            "type":"img",
            "location":{lat:42.9357625, lng:-122.2756397}
        },
        {
            "title":"Paradise",
            "url":"https://www.nps.gov/webcams-mora/mountain.jpg?20161114134412",
            "type":"img",
            "location":{lat:46.7859078, lng:-121.7389231}
        },
        {
            "title":"Look Rock (Smokies)",
            "url":"http://www.nature.nps.gov/air/webcams/parks/grsmcam/grsm.jpg",
            "type":"img",
            "location":{lat:35.6331398, lng:-83.9440354}
        },
        {
            "title":"Grand Canyon",
            "url":"http://www.nature.nps.gov/air/WebCams/parks/grcacam/grca.jpg",
            "type":"img",
            "location":{lat:36.0660209, lng:-112.1166801}
        },
        {
            "title":"Hurricane Ridge",
            "url":"https://www.nps.gov/webcams-olym/current_ridgecam.jpg",
            "type":"img",
            "location":{lat:47.9331457, lng:-123.4118154}
        },
        {
            "title":"Lake Louise",
            "url":"http://cams.skilouise.com/cam9.jpg",
            "type":"img",
            "location":{lat:51.4201096, lng:-116.2085222}
        },
        {
            "title":"Apgar Mt",
            "url":"https://www.nps.gov/webcams-glac/middleforkcam.jpg",
            "type":"img",
            "location":{lat:48.5180938, lng:-114.0228064}
        },
        {
            "title":"Perdido Key",
            "url":"https://www.nps.gov/webcams-guis/pkbeach/perdidokey000M.jpg",
            "type":"img",
            "location":{lat:30.3042028, lng:-87.5555011}
        },
        {
            "title":"Half Dome",
            "url":"http://pixelcaster.com/yosemite/webcams/ahwahnee2.jpg",
            "type":"img",
            "location":{lat:37.8529772, lng:-119.831296}
        },
        {
            "title":"Yosemite",
            "url":"http://pixelcaster.com/yosemite/webcams/sentinel.jpg",
            "type":"img",
            "location":{lat:37.8529772, lng:-119.831296}
        },
        {
            "title":"Seattle",
            "url":"http://cdn.tegna-media.com/king/weather/roofcam1nw880x495.jpg",
            "type":"img",
            "location":{lat:47.6147628, lng:-122.475989}
        },
        {
            "title":"Mt. Everest",
            "url":"http://www.evk2cnr.org/WebCams/PyramidOne/current_online.jpg",
            "type":"img",
            "location":{lat:27.98785, lng:86.9228374}
        },
        {
            "title":"Aconcagua",
            "url":"http://www.aconcaguanow.com/camara001.jpg",
            "type":"img",
            "location":{lat:-32.653179, lng:-70.0130562}
        },
        {
            "title":"Denali",
            "url":"http://www.nature.nps.gov/air/WebCams/parks/denacam/dena.jpg",
            "type":"img",
            "location":{lat:63.0919802, lng:-151.1348142}
        },
        {
            "title":"Mt St. Helens",
            "url":"http://www.fs.fed.us/gpnf/volcanocams/msh/images01/volcanocamhd.jpg",
            "type":"img",
            "location":{lat:46.1914006, lng:-122.1977396}
        },
        {
            "title":"Snoqualmie Pass",
            "url":"http://images.wsdot.wa.gov/sc/090VC05200.jpg",
            "type":"img",
            "location":{lat:47.41, lng:-121.4080217}
        },
        {
            "title":"Longs Peak",
            "url":"https://www.nps.gov/webcams-romo/longs_peak.jpg",
            "type":"img",
            "location":{lat:40.2548753, lng:-105.6182182}
        },
        {
            "title":"Lake Chelan",
            "url":"http://webcam.campbellsresort.com/campcam.jpg",
            "type":"img",
            "location":{lat:47.840239, lng:-120.0224197}
        },
        {
            "title":"Space Needle",
            "url":"http://media.cmgdigital.com/shared/lt/lt_cache/thumbnail/607/img/photos/2014/04/21/3a/a3/dVz5oP_seacam2.jpg",
            "type":"img",
            "location":{lat:47.6205099, lng:-122.3514661}
        },
        {
            "title":"Glacier Bay",
            "url":"https://www.nps.gov/webcams-glba/BartlettLagoon.jpg",
            "type":"img",
            "location":{lat:58.5773739, lng:-136.6716532}
        },
        {
            "title":"Bryce Canyon",
            "url":"https://www.nps.gov/webcams-blca/sr2.jpg",
            "type":"img",
            "location":{lat:37.5735929, lng:-112.4585202}
        },
        {
            "title":"Denali Meadow",
            "url":"https://www.nps.gov/webcams-dena/alpine.jpg",
            "type":"img",
            "location":{lat:63.0919802, lng:-151.1348142}
        },
        {
            "title":"South Pole",
            "url":"https://www.usap.gov/videoclipsandmaps/SouthPoleWebcam/darksector00021.jpg?=12901309.4991",
            "type":"img",
            "location":{lat:-84.9997583, lng:-0.0021887}
        }
    ];
	
	angular.forEach($scope.cams,function(itm){
        itm.randoUrl = $scope.rando(itm.url);
        if(itm.thumbnail){
            itm.thumbnail = $scope.rando(itm.thumbnail);
        }
    });
    
    $scope.ix = 0;
    $scope.max = $scope.cams.length-1;
    
    $scope.focus = function(newCam){
        if($scope.focalCam){
            $scope.focalCam.focus = false;
        }
    
        $scope.focalCam = newCam;
        $scope.focalCam.focus = true;
        $scope.randoUrl = $scope.rando(newCam.url);

        //do the map
        $scope.drawMap();
        $scope.getWeather(newCam);
        $scope.getTime(newCam);
        console.log('done');
    };

    $scope.drawMap = function(){
		if(google){
        var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: $scope.mapZoom,
                    center: $scope.focalCam.location
                    });
        var marker = new google.maps.Marker({
                    position: $scope.focalCam.location,
                    map: map
                    });
		}
    }

    $scope.cycle=function(){
        $scope.ix++;
        if($scope.ix>$scope.max){
            $scope.ix=0;
        };
        $scope.focus($scope.cams[$scope.ix]);
    };

    $scope.select = function(cam){
        $scope.cycleActive = false;
        $scope.setCycle();
        $scope.focus(cam);
        
    };

    $scope.setCycle = function(){
        if($scope.timer){
            $interval.cancel($scope.timer);
        }
        if($scope.cycleActive){
            $scope.timer = $interval(function(){$scope.cycle();},$scope.interval * 1000);
            console.log('Activated cycle');
        }
        else{            
            console.log('canceled cycle');
        }
    };

    $scope.getTime = function(cam){
        $scope.time = null;
        $http.get("http://api.geonames.org/timezoneJSON?lat=" + cam.location.lat + "&lng=" + cam.location.lng + "&username=wjmoody03")
            .success(function(result){
                $scope.time = result.time;
                console.log(result);
            })
            .error(function(result){
                $scope.time = "Local Time Unavailable";
            });
    }

    $scope.getWeather=function(cam){
        var key="a4f7622d65bf2db15eae72acad716b0f";
        $scope.weatherError = null;
        $scope.weather = null;
        $http.get("http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=" + 
                    cam.location.lat + "&lon=" + cam.location.lng +
                    "&APPID=" + key)
            .success(function(result){
                console.log(result);
                $scope.weather = result;
            })
            .error(function(err){
                $scope.weatherError = err;
            });
    };

    $scope.focus($scope.cams[$scope.ix]);
    $scope.setCycle();

});