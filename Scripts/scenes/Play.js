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
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
            this._levelLabel = new objects.Label("LEVEL 1", "40px", "fantasy", "#FFFF90", 320, 180, true);
            this._scoreLabel = new objects.Label("Score:", "40px", "fantasy", "#FF3F90", 320, 180, true);
            this._ocean = new objects.Ocean();
            this._plane = new objects.Plane();
            this._island = new objects.Island();
            // create the cloud array
            this._clouds = new Array(); // empty container
            // instantiating CLOUD_NUM clouds
            for (var index = 0; index < config.Game.CLOUD_NUM; index++) {
                this._clouds.push(new objects.Cloud());
            }
            //this._scoreBoard = new managers.ScoreBoard();
            //config.Game.SCORE_BOARD = this._scoreBoard;
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._ocean.Update();
            this._plane.Update();
            this._island.Update();
            managers.Collision.AABBCheck(this._plane, this._island);
            this._clouds.forEach(function (cloud) {
                cloud.scaleX = 0.25;
                cloud.scaleY = 0.25;
                cloud.Update();
                managers.Collision.squaredRadiusCheck(_this._plane, cloud);
            });
        };
        Play.prototype.Main = function () {
            this.addChild(this._ocean);
            this.addChild(this._levelLabel);
            this._levelLabel.regX = 300;
            this._levelLabel.regY = 150;
            this.addChild(this._scoreLabel);
            this._scoreLabel.regX = -100;
            this._scoreLabel.regY = 150;
            this.addChild(this._island);
            this.addChild(this._plane);
            this._plane.scaleX = 0.15;
            this._plane.scaleY = 0.15;
            for (var _i = 0, _a = this._clouds; _i < _a.length; _i++) {
                var cloud = _a[_i];
                this.addChild(cloud);
            }
            //this.addChild(this._scoreBoard.ScoreLabel);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map