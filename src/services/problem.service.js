const sanitizeMarkdownContent = require('../utils/markdownSanitizer')

class ProblemService{
    constructor(problemRepository){
        this.problemRepository= problemRepository
    }

    async createProblem(problemData){
        try {
            // 1. sanitize the markdown for description
            problemData.description = sanitizeMarkdownContent(problemData.description);

            const problem = await this.problemRepository.createProblem(problemData);

            return problem;
        } catch (error) {
            throw error;
        }
        
    }

    async getAllProblems(){
        try {
            const problems = await this.problemRepository.getAllProblems();
            return problems
        } catch (error) {
            throw error
        }

    }

    async getProblem(problemId){
        try {
            const problem = await this.problemRepository.getProblem(problemId);
            return problem;
        } catch (error) {
            throw error;
        }
    }

    async deleteProblem(id){
        try {
            const deleteproblem = await this.problemRepository.deleteProblem(id);
            return deleteproblem
        } catch (error) {
            throw error
        }
    }

    async updateProblem(id,problemData){
        try {
            const problem = await this.problemRepository.updateProblem(id,problemData);
            return problem;
        } catch (error) {
            
        }
    }
}

module.exports = ProblemService