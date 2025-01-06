import { AppDataSource } from "./data-source";
import { Calevent } from "./entity/Calevent";

AppDataSource.initialize()
  .then(async () => {
    console.log("Inserting a new user into the database...");
    // const user = new User()
    // calvent.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    // await AppDataSource.manager.save(calevent)
    // console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...");
    const calevents = await AppDataSource.manager.find(Calevent);
    console.log("Loaded users: ", calevents);

    console.log(
      "Here you can setup and run express / fastify / any other framework."
    );
  })
  .catch((error) => console.log(error));
