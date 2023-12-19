import {pool} from "../db.js" 

export const getEmployess= async(req,res)=>{
    const [rows]=await pool.query('SELECT *FROM employe')
    res.json(rows)
}
export const getEmploye=async(req,res)=>{
    const [rows]=await pool.query("SELECT *FROM employe WHERE id=?",[req.params.id])

    if(rows.length<=0) return res.status(404).json({mesage:"Employe not found"})

    res.json(rows[0])
}

export const createEmployees=async(req,res)=>{
    const {name,salary}=req.body
    const [rows]=await pool.query('INSERT INTO employe(name,salary) VALUES(?,?)',[name,salary])
    res.send({
        id:rows.insertId,
        name,
        salary
    })
    //console.log(req.body)
}


export const deleteEmployees=async(req,res)=>{
    const [result]=await pool.query("DELETE FROM employe WHERE id=?",[req.params.id])
    console.log(result)
    if(result.affectedRows<=0) return res.status(404).json({mesage:"Employed not found"})

    res.sendStatus(204)
}

export const updateEmployees=async(req,res)=>{
    const {id}=req.params
    const {name,salary}=req.body
    //console.log(id,name,salary)

    const [result]=await pool.query('UPDATE employe SET name=IFNULL(?,name),salary=IFNULL(?,salary) WHERE id=?',[name,salary,id])
    console.log(result)
    if(result.affectedRows<=0) return res.status(404).json({mesage:"Employed not found"})

    const [rows]=await pool.query('SELECT * FROM employe WHERE id=?',[id])
    res.json(rows[0])
}
