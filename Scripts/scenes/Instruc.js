"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Instruc = /** @class */ (function (_super) {
        __extends(Instruc, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Instruc() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        // Initializing and Instantiating
        Instruc.prototype.Start = function () {
            //instantiate a new Text object
            //this._Label = new objects.Label("Instructions", "80px", "Consolas", "#FFFF00", 320, 180, true);
            // buttons
            //this._backButton = new objects.Button(config.Game.ASSETS.getResult("backButton"), 320, 430, true);
            this._ocean = new objects.Ocean();
            this.Main();
        };
        Instruc.prototype.Update = function () {
            this._ocean.Update();
        };
        Instruc.prototype.Main = function () {
            this.addChild(this._ocean);
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                config.Game.SCENE = scenes.State.PLAY;
            });
        };
        return Instruc;
    }(objects.Scene));
    scenes.Instruc = Instruc;
})(scenes || (scenes = {}));
//# sourceMappingURL=Instruc.js.map