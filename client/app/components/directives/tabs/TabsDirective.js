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
var core_1 = require("@angular/core");
var tabs_service_1 = require("../../../services/tabs.service");
var TabsDirective = (function () {
    function TabsDirective(_tabsService) {
        this._tabsService = _tabsService;
    }
    TabsDirective.prototype.selectTab = function (tab) {
        this.selectedTab = tab;
        this._tabsService.emitTab(tab);
    };
    TabsDirective.prototype.ngAfterContentInit = function () {
        this.selectedTab = this.tabs[0];
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TabsDirective.prototype, "tabs", void 0);
    TabsDirective = __decorate([
        core_1.Component({
            selector: 'tabs',
            moduleId: module.id,
            templateUrl: '/app/views/directives/tabs/tabs-view.html'
        }), 
        __metadata('design:paramtypes', [tabs_service_1.TabsService])
    ], TabsDirective);
    return TabsDirective;
}());
exports.TabsDirective = TabsDirective;
//# sourceMappingURL=TabsDirective.js.map