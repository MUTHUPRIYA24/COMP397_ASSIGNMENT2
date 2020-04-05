module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _levelLabel: objects.Label;
        private _: objects.Label;
        private _ocean?: objects.Ocean;
        private _plane?: objects.Plane;
        private _island?: objects.Island;
        private _scoreLabel: objects.Label;

        private _clouds: Array<objects.Cloud>;

        private _scoreBoard: managers.ScoreBoard;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void 
        {
            this._levelLabel = new objects.Label("LEVEL 1", "40px", "fantasy", "#FFFF90", 320, 180, true);
            this._scoreLabel = new objects.Label("Score:", "40px", "fantasy", "#FF3F90", 320, 180, true);
            
            
            this._ocean = new objects.Ocean();
            this._plane = new objects.Plane();
            this._island = new objects.Island();
            
            // create the cloud array
            this._clouds = new Array<objects.Cloud>(); // empty container
            

            // instantiating CLOUD_NUM clouds
            for (let index = 0; index < config.Game.CLOUD_NUM; index++) {
                this._clouds.push(new objects.Cloud());
            }
            

            //this._scoreBoard = new managers.ScoreBoard();
            //config.Game.SCORE_BOARD = this._scoreBoard;

             this.Main();
        }        
        
        public Update(): void 
        {
           this._ocean.Update();

           this._plane.Update();

           this._island.Update();

           managers.Collision.AABBCheck(this._plane, this._island);

           
           this._clouds.forEach(cloud => {
               cloud.scaleX=0.25;
               cloud.scaleY=0.25;
               cloud.Update();
               managers.Collision.squaredRadiusCheck(this._plane, cloud);
           });
        }
        
        public Main(): void 
        {
            

            this.addChild(this._ocean);

            this.addChild(this._levelLabel);
            this._levelLabel.regX=300;
            this._levelLabel.regY=150;

            this.addChild(this._scoreLabel);
            this._scoreLabel.regX=-100;
            this._scoreLabel.regY=150;

            this.addChild(this._island);

            this.addChild(this._plane);
            this._plane.scaleX=0.15;
            this._plane.scaleY=0.15;


            for (const cloud of this._clouds) {
                this.addChild(cloud);
            }

            //this.addChild(this._scoreBoard.ScoreLabel);

        }

        
    }
}