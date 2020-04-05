module scenes
{
    export class Instruc extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
       
        private _backButton: objects.Button;
        private _ocean: objects.Ocean;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        // Initializing and Instantiating
        public Start(): void 
        {
             //instantiate a new Text object
            //this._Label = new objects.Label("Instructions", "80px", "Consolas", "#FFFF00", 320, 180, true);
            // buttons
             //this._backButton = new objects.Button(config.Game.ASSETS.getResult("backButton"), 320, 430, true);
            
             this._ocean = new objects.Ocean();
             this.Main();
        }        
        
        public Update(): void 
        {
            this._ocean.Update();
        }
        
        public Main(): void 
        {
            this.addChild(this._ocean);

           

        
            this.addChild(this._backButton);

            this._backButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.PLAY;
            });

        }

        
    }
}