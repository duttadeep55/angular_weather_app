"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var WeaComponent = (function () {
    function WeaComponent(http) {
        var _this = this;
        this.http = http;
        this.flag = false;
        this.sunImage = '/app/images/sun.png';
        this.rainImage = '/app/images/rain.png';
        this.daynightImage = '/app/images/daynight.png';
        setInterval(function () {
            _this.date = new Date();
        }, 1000);
    }
    WeaComponent.prototype.ngOnInit = function () {
        this.makeRequest();
    };
    WeaComponent.prototype.makeRequest = function () {
        var _this = this;
        this.http.request('http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=7&appid=b1b15e88fa797225412429c1c50c122a1&apikey=26416597cea257592c8f3895f4cb53ed')
            .subscribe(function (res) {
            _this.data = res.json().list;
            _this.city = res.json().city.name;
            console.log(_this.data);
        });
    };
    WeaComponent.prototype.daynight = function () {
        if (!this.flag) {
            this.flag = true;
            console.log("hello");
        }
        else {
            this.flag = false;
            console.log("bye");
        }
    };
    WeaComponent = __decorate([
        core_1.Component({
            selector: 'wea-dashboard',
            templateUrl: 'app/dashboard.component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WeaComponent);
    return WeaComponent;
}());
exports.WeaComponent = WeaComponent;
//# sourceMappingURL=dashboard.component.js.map