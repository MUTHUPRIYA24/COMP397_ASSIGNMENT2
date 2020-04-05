module scenes
{
    export class Start extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _welcomeLabel: objects.Label;
        private _startButton: objects.Button;
        private _ocean: objects.Ocean;
        private _instrucButton: objects.Button;
        private _exitButton: objects.Button;
        

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public Start(): void 
        {
             //instantiate a new Text object
            this._welcomeLabel = new objects.Label("SpaceScape", "80px", "Consolas", "#FFFF00", 320, 180, true);
            // buttons
             this._startButton = new objects.Button(config.Game.ASSETS.getResult("startButton"), 320, 430, true);

             this._ocean = new objects.Ocean();
             this._instrucButton = new objects.Button("./Assets/images/instrucButton.png",320, 430, true);
             this._exitButton = new objects.Button("./Assets/images/exitButton.png",320, 430, true);

            this.Main();
        }        
        
        public Update(): void 
        {
           this._ocean.Update();
        }
        
        public Main(): void 
        {
            this.addChild(this._ocean);
       
            this.addChild(this._welcomeLabel);

        
            this.addChild(this._startButton);
            this._startButton.regY=200;

            this.addChild(this._instrucButton);
            this._instrucButton.regY=120;

            this.addChild(this._exitButton);


            this._startButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.PLAY;
            });

            this._instrucButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.INSTRUC;
            });

            this._exitButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.END;
            });

        }

        
    }
}