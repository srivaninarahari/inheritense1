/**
 * we can use common object-oriented patterns.
 * Of course, one of the most fundamental patterns in class-based programming --
 *   is being able to extend existing classes to create new ones using inheritance.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = (function () {
    function Animal(Name) {
        this._Name = Name;
    }
    Animal.prototype.makeSound = function (behavior) {
        console.log("barking");
    };
    Animal.prototype.move = function (distance) {
        console.log("The player who is batting is " + this._Name + " and Batting Order is " + distance);
        alert("The player who is batting is " + this._Name + " and Batting Order is " + distance);
    };
    return Animal;
}());
;
var Animal1 = (function (_super) {
    __extends(Animal1, _super);
    function Animal1(Name) {
        return _super.call(this, Name) || this;
    }
    Animal1.prototype.move = function (distance) {
        if (distance === void 0) { distance = 1; }
        _super.prototype.move.call(this, distance);
    };
    Animal1.prototype.makeSound = function (behavior) {
        if (behavior === void 0) { behavior = "barking"; }
        _super.prototype.makeSound.call(this, behavior);
    };
    return Animal1;
}(Animal));
var Animal3 = (function (_super) {
    __extends(Animal3, _super);
    function Animal3(Name) {
        return _super.call(this, Name) || this;
    }
    Animal3.prototype.move = function (distance) {
        if (distance === void 0) { distance = 2; }
        _super.prototype.move.call(this, distance);
    };
    Animal3.prototype.makeSound = function (behavior) {
        if (behavior === void 0) { behavior = "crying"; }
        _super.prototype.makeSound.call(this, behavior);
    };
    return Animal3;
}(Animal));
var animaldist = new Animal1("tiger");
animaldist.move();
var animaldist1 = new Animal3("lion");
animaldist.move();
