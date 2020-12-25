const router = require("express").Router();


const getController = (req, res) => {
    res.json({
        "juhi": "I love juhi a lot. she is the best. GET"
    })
}

router.get("/post", getController);

router.post("/post", (req, res)=>{
    res.json({
        "juhi": "I love juhi a lot. she is the best. POST"
    })
})

router.put("/post", (req, res)=>{
    res.json({
        "juhi": "I love juhi a lot. she is the best. PUT"
    })
})

router.patch("/post", (req, res)=>{
    res.json({
        "juhi": "I love juhi a lot. she is the best. PATCH"
    })
})

router.delete("/post", (req, res)=>{
    res.json({
        "juhi": "I love juhi a lot. she is the best. DELETE"
    })
})

module.exports = router;