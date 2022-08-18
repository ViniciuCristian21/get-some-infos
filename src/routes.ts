import { Router } from "express";
import { getAllInfos } from './functions';


const router = Router()

router.get("/infos", (req, res) => {
    const infos = getAllInfos()
    res.send(infos)
})


export {router}