const con = require('../Database/database');

class User{

    constructor(id,name,age,address){
        this.id      = id
        this.name    = name
        this.age     = age
        this.address = address
    }


    static FetchAll() {

        return new Promise((resolve, reject) => {
            con.query("SELECT * FROM persons" , (err, result) => {
                return resolve(result);
                    }
                );
            });
        }


    static FetchOne(id){

        return new Promise((resolve, reject) => {
            con.query("SELECT * FROM persons WHERE id = ?",[id] , (err, result) => {
                return resolve(result);
                    }
                );
            });

    }

    static Add (id,name,age,address){

        con.connect(function(err) {
            
            //Update the address field:
            var sql = "INSERT INTO persons VALUES (?,?,?,?)";
            con.query(sql,[id,name,age,address], function (err, result) {
 
            });
          });


    }

    static Update(id,name,age,address){

        con.connect(function(err) {

            //Update the address field:
            var sql = "UPDATE persons SET name = ? , age = ? , address = ?  WHERE id = ?";
            con.query(sql,[name,age,address,id], function (err, result) {

            });
          });

    }

    static Delete(id){

        con.connect(function(err) {
            
            //Update the address field:
            var sql = "DELETE FROM persons WHERE id = ?";
            con.query(sql,[id], function (err, result) {

            });
          });


    }

}
module.exports = User;

// User.Update(123);












