var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/**
 * New typescript file
 */
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.var1 = "SYMPOHX TWO";
    }
    AppComponent.prototype.show = function () {
        alert("Hello");
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h1 (click)="show()">Hello {{var1}}! Your First Angular 2.0 App</h1>'
        })
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map