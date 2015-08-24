define(
    [
        'CatLab/Khan.Engine/Factories/ModuleFactory'
    ],
    function(
        ModuleFactory
    ) {

        var Khan = function()
        {
            this.modules = new ModuleFactory();
        };

        var p = Khan.prototype;



        return Khan;

    }
);