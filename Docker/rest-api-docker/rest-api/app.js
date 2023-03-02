const app = require("express")();
const db = require("./db.json");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// kullanicilari listeleme
app.get("/users", (req, res) => {
    res.send({
        success: true,
        users: db
    });
});

// bir kullanici gösterme
app.get("/users/:id", (req, res) => {
    const user = db.find(user => user.id == req.params.id);
    if (user) {
        res.send({
            success: true,
            user
        });
    } else {
        res.send({
            success: false,
            message: "Kullanıcı bulunamadı."
        });
    }
});


// yeni kullanici ekleme
app.post("/users", (req, res) => {
    const newUSer = {
        id: new Date().getTime(),
        full_name: req.body.full_name,
        country: req.body.country,
        email: req.body.email,
        created_at: new Date()
    };
    db.push(newUSer);
    res.status(201).send({
        success: true,
        data: newUSer
    });
});

// kullanici güncelleme
app.put("/users/:id", (req, res) => {
    const userId = req.params.id;
    const userIndex = db.findIndex(u => u.id == userId);
    if (userIndex === -1) {
        res.status(404).send({
            message: "Kullanıcı bulunamadı",
            success: false
        });
    } else {
        const updatedUser = {
            id: parseInt(userId),
            full_name: req.body.full_name,
            country: req.body.country,
            email: req.body.email,
            created_at: db[userIndex].created_at,
            updated_at: new Date()
        };
        db[userIndex] = updatedUser;
        res.status(200).send({
            success: true,
            data: updatedUser
        });
    }
});

// kullanici silme
app.delete("/users/:id", (req, res) => {
    const userIndex = db.findIndex(user => user.id == req.params.id);
    if (userIndex != -1) {
        db.splice(userIndex, 1);
        res.send({
            success: true,
            message: "Kullanıcı başarıyla silindi."
        });
    } else {
        res.send({
            success: false,
            message: "Kullanıcı bulunamadı."
        });
    }
});


app.listen(process.env.PORT || 3000, () => {
    console.log("Sunucu çalışıyor...");
});