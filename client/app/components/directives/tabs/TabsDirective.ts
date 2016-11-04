import { Component, Input, AfterContentInit } from "@angular/core";
import { TabsService } from "../../../services/tabs.service";

@Component({
    selector    : 'tabs',
    moduleId    :  module.id,
    templateUrl : '/app/views/directives/tabs/tabs-view.html'
})

export class TabsDirective implements AfterContentInit{
    @Input() tabs;
    private selectedTab: Object;

    constructor(
        private _tabsService: TabsService
    ) {

    }

    selectTab(tab) {
        this.selectedTab = tab;
        this._tabsService.emitTab(tab);
    }

    ngAfterContentInit() {
        this.selectedTab = this.tabs[0];
    }

}