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
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Start() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Start.prototype.Start = function () {
            //instantiate a new Text object
            this._welcomeLabel = new objects.Label("SpaceScape", "80px", "Consolas", "#FFFF00", 320, 180, true);
            // buttons
            this._startButton = new objects.Button(config.Game.ASSETS.getResult("startButton"), 320, 430, true);
            this._ocean = new objects.Ocean();
            this._instrucButton = new objects.Button("./Assets/images/instrucButton.png", 320, 430, true);
            this._exitButton = new objects.Button("./Assets/images/exitButton.png", 320, 430, true);
            this.Main();
        };
        Start.prototype.Update = function () {
            this._ocean.Update();
        };
        Start.prototype.Main = function () {
            this.addChild(this._ocean);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this._startButton.regY = 200;
            this.addChild(this._instrucButton);
            this._instrucButton.regY = 120;
            this.addChild(this._exitButton);
            this._startButton.on("click", function () {
                config.Game.SCENE = scenes.State.PLAY;
            });
            this._instrucButton.on("click", function () {
                config.Game.SCENE = scenes.State.INSTRUC;
            });
            this._exitButton.on("click", function () {
                config.Game.SCENE = scenes.State.END;
            });
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=Start.js.map