
const {StatusCodes} = require('http-status-codes')
const NotImplemented = require('../errors/notimplemented.error')
const {ProblemService} = require('../services')
const {ProblemRepository} = require('../reprositories')
const NotFound = require('../errors/notfound.error')
const problemService = new ProblemService(new ProblemRepository());


function pingProblemController(req,res){
    return res.json({message:'ping controller is up'})
}


async function addProblem(req,res,next){
    try{
        const newProblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message : 'Successfully created a new problem',
            error:{},
            data:newProblem
        })
    }catch(error){
        next(error);
    }
}

async function getProblem(req,res){
    try{
        
        const problem = await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            message : 'Successfully fetch the problem',
            error:{},
            data:problem
        })
    }catch(error){
        next(error)
    }
}

async function getProblems(req,res){
    try{
        const response = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success:true,
            message : 'Successfully fetch the problems',
            error:{},
            data:response
        })
    }catch(error){
        next(error)
    }
}

function deleteProblem(req,res){
    try{
        throw new NotImplemented('addProblem')
    }catch(error){
        next(error)
    }
}

function updateProblem(req,res){
    try{
        throw new NotImplemented('addProblem')
    }catch(error){
        next(error)
    }
}

module.exports={
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}