const express = require('express');
const router = express.Router();

const students = [
    {
        name: "ishimwe aliane",
        className: "S6MPC",
        position: 2
    },
    {
        name: "gusenga david",
        className: "S6MPC",
        position: 3
    },
    {
        name: "uwamungu edison",
        className: "S6MPC",
        position: 5
    },
    {
        name: "manzi sam",
        className: "S6MPC",
        position: 6
    },
    {
        name: "niyonkuru hosanna",
        className: "S6MPC",
        position: 7
    },
    {
        name: "bunani patrice",
        className: "S6MPC",
        position: 9
    },
]

router.route('/')
    .get((req, res) => {
        res
            .status(200)
            .json(
                {
                    status: "success",
                    data: {
                        students
                    }
                }
            )
    })

module.exports = router;