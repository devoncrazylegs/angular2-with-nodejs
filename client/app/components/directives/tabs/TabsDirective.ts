import { Component, Input, AfterContentInit } from "@angular/core";

@Component({
    selector    : 'tabs',
    moduleId    :  module.id,
    templateUrl : '/app/views/directives/tabs/tabs-view.html'
})

export class TabsDirective implements AfterContentInit{
    @Input() tabs;
    private selectedTab: Object;

    constructor() {

    }

    selectTab(tab) {
        this.selectedTab = tab;
    }

    ngAfterContentInit() {
        this.selectedTab = this.tabs[0];
    }

}