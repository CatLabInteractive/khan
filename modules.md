#Khan
##Modules
* Map: contains all logic to handle unit position management, collision detection, line of sight, ...
** addObject
** getCloseby(Objects, radius)
** collides(a, b)
** Vector constructor

* Units: all logic to handle unit creation, stats, etc
** addUnit
** instantiate(unit) -> returns an instance of the object
** Unit: setPosition

* Network: contains the object synchronization code
* Commander: contains methods to create commands, queues and how to create them in the UI
* GameController: TurnBasedGameController

##Client only
* Viewer: contains the whole UI

##Addons
* SquadManager: contains all logic to keep units together. Also contains UI stuff to handle the commands