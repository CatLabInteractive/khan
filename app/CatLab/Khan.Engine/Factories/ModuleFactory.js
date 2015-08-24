define(
    [
        'CatLab/Khan.Engine/Exception'
    ],
    function(
        Exception
    ) {
        var ModuleFactory = function()
        {
            this.modules = {};
        };

        var p = ModuleFactory.prototype;

        p.setModule = function(name, module)
        {
            if (typeof(this.modules[name]) !== 'undefined') {
                throw new Exception("Module " + name + " already defined.");
            }

            this.modules[name] = module;
        };

        p.getModule = function(name)
        {
            if (typeof(this.modules[name]) === 'undefined') {
                throw new Exception("Module " + name + " is not defined");
            }

            return this.modules[name];
        };

        return ModuleFactory;
    }
);