const adminUser = require("./user")();

function AdminCreate(name, data) {
  return async () => {
    try {
      let users = await this.service(name).find({ query: { isAdmin: true } });

      if (users.total === 0) {
        try {
          let createdRecord = await this.service(name).create(data);
       console.log(createdRecord.adminUser);
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("Admin already created through script");
      }
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = function () {
  const app = this;
  AdminCreate = AdminCreate.bind(this);
 

  try {
    app.configure(AdminCreate("users", adminUser));
  } catch (error) {
    console.log(`in the app`, error);
  }
};