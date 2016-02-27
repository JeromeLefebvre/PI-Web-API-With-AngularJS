//***************************************************************************
//   Copyright 2015 OSIsoft, LLC.
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//       http://www.apache.org/licenses/LICENSE-2.0
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
// ***************************************************************************

'use strict'
piWebApiApp.factory('piWebApiHttpService', ['$http', '$q', function ($http, $q) {

    //This factory method works like a service in which all HTTP requests are made.

    //Set withCredentials = true; if you need to type your credentais.
    $http.defaults.withCredentials = true;

    var piWebApiHttpServiceFactory = {};

    piWebApiHttpServiceFactory.validPIServerName = function (serviceBase, piServerName) {
        return $http.get(serviceBase + "dataservers?name=" + piServerName).then(function (response) {
            return response;
        });
    };

    piWebApiHttpServiceFactory.validPIPointName = function (serviceBase, piServerName, piPointName) {
        return $http.get(serviceBase + "points?path=\\\\" + piServerName + "\\" + piPointName).then(function (response) {
            return response;
        });
    };

    piWebApiHttpServiceFactory.getSnapshotValue = function (serviceBase, webId) {
        return $http.get(serviceBase + 'streams/' + webId + '/value').then(function (response) {
            return response;
        });
    };

    piWebApiHttpServiceFactory.getRecordedValues = function (serviceBase, webId, startTime, endTime) {
        return $http.get(serviceBase + 'streams/' + webId + '/recorded?starttime=' + startTime + '&endtime=' + endTime).then(function (response) {
            return response;
        });
    };

    piWebApiHttpServiceFactory.getInterpolatedValues = function (serviceBase, webId, startTime, endTime, interval) {
        return $http.get(serviceBase + 'streams/' + webId + '/interpolated?starttime=' + startTime + '&endtime=' + endTime + "&interval=" + interval).then(function (response) {
            return response;
        });
    };
    piWebApiHttpServiceFactory.getCorsValues = function (serviceBase) {
        return $http.get(serviceBase + '/system/configuration').then(function (response) {
            return response;
        });
    };

    return piWebApiHttpServiceFactory;
}]);